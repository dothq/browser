import { ipcRenderer } from 'electron';
import { observable } from 'mobx';
import { resolve } from 'path';
import { homedir } from 'os';

const json = require("edit-json-file");
const opts = json(resolve(homedir() + '/dot/dot-options.json'));

export class Store {
  @observable
  public visible = true;

  @observable
  public currentLanguage: string = opts.get('language');

  public lang: any;

  public loadLocale() {
    const languageJSON = json(
      `${process.cwd()}/src/renderer/views/app/locale/${this.currentLanguage}.json`,
    );
    this.lang = languageJSON.toObject();
  }

  public constructor() {
    ipcRenderer.on('visible', (e, flag) => {
      this.visible = flag;
    });

    this.loadLocale();

    window.addEventListener('blur', () => {
      if (this.visible) {
        setTimeout(() => {
          this.hide();
        });
      }
    });
  }

  public hide() {
    this.visible = false;
    ipcRenderer.send('hide-dialog', 'menu');
  }
}

export default new Store();

import { ipcRenderer } from 'electron';
import { observable } from 'mobx';
import { resolve } from 'path';
import { homedir } from 'os';

export class Store {
  @observable
  public visible = true;

  @observable
  public currentLanguage: string = 'en'

  public lang: any;

  public loadLocale() {

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

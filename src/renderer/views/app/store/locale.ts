import { observable, action } from 'mobx';
import { ipcRenderer, remote } from 'electron';
import { resolve } from 'path';
import { homedir } from 'os';
import store from '../store';

const json = require('edit-json-file');
const opts = json(resolve(homedir() + '/dot/dot-options.json'));

if (!opts.get('language')) {
  opts.set('language', 'en');
  opts.save();
}

export class LocaleStore {
  public lang: any;

  @observable
  public languagePackSize: any = '...';

  @observable
  public languagePacksToInstall: any[] = [];

  @observable
  public showLanguagePacks: boolean;

  @observable
  public currentLanguage: string = opts.get('language');

  @action
  public setLanguage(language: string) {
    this.currentLanguage = language;
    this.load();
    store.overlay.currentContent = 'preload';
    remote.webContents.getFocusedWebContents().reload();
  }

  public async loadLangPacks() {
    const data = await fetch(
      `https://api.dotbrowser.me/api/v${store.api}/languages/packs/latest`,
    );
    const json = await data.json();
  }

  public load() {
    console.log(process.cwd());
    const languageJSON = json(
      `${process.cwd()}/src/renderer/views/app/locale/${this.currentLanguage}.json`,
    );
    this.lang = languageJSON.toObject();
  }

  public loadUK() {
    const enUK = json(`${process.cwd()}/locale/en.json`);
    this.uk = enUK.toObject();
    throw new Error('This resource is deprecated.');
  }

  /** @deprecated */
  public uk: any;
}

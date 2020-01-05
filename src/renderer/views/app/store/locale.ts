import { observable, action } from 'mobx';
import { ipcRenderer, remote } from 'electron';
import { resolve } from 'path';
import { homedir } from 'os';
import store from '../store';

const json = require("edit-json-file")

export class LocaleStore {
  public lang: any;

  @observable
  public languagePackSize: any = '...';

  @observable
  public languagePacksToInstall: any[] = [];

  @observable
  public showLanguagePacks: boolean;

  @observable
  public currentLanguage: string = 'en'

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
    const languageJSON = json(
      `${__dirname.split("build/renderer")[0]}src/renderer/views/app/locale/${this.currentLanguage}.json`,
    );
    this.lang = languageJSON.toObject();
  }
}

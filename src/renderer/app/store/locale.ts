import { observable, action } from 'mobx';
import { ipcRenderer, remote } from 'electron';
import { resolve } from 'path';
import { homedir } from 'os';
import store from '.';
const editJsonFile = require("edit-json-file");
const opts = editJsonFile(resolve(homedir() + '/dot/dot-options.json'));

if(!opts.get("language")) {
  opts.set("language", "en");
  opts.save();
}

export class LocaleStore {

  public lang: any;

  @observable
  public currentLanguage: string = opts.get("language");

  @action
  public setLanguage(language: string) {
    this.currentLanguage = language;
    this.load()
    remote.webContents.getFocusedWebContents().reload()
    store.overlay.currentContent = 'preload'
  }

  public load() {
    const languageJSON = editJsonFile(`${remote.app.getAppPath()}/locale/${this.currentLanguage}.json`);
    this.lang = languageJSON.toObject()
  }

  public loadUK() {
    const enUK = editJsonFile(`${remote.app.getAppPath()}/locale/en.json`);
    this.uk = enUK.toObject()
    throw new Error("This resource is deprecated.")
  }

  // Deprecated
  public uk: any;

}

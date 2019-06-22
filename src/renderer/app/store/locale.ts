import { observable } from 'mobx';
import { ipcRenderer, remote } from 'electron';
const editJsonFile = require("edit-json-file");

export class LocaleStore {

  public uk: any;

  public loadUK() {
    const enUK = editJsonFile(`${remote.app.getAppPath()}/locale/en.json`);
    this.uk = enUK.toObject()
  }

}

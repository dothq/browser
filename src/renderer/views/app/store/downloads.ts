import { observable } from 'mobx';
import { DownloadItem } from '../models/download-item';
import { ipcRenderer, remote } from 'electron';
import store from '../store';
import console = require('console');
import { homedir } from 'os';
import { resolve } from 'path';
import { rename } from 'fs';

const app = remote.app;

export class DownloadsStore {
  @observable
  public list: DownloadItem[] = [];

  public keepList: number;

  @observable
  public location: string;

  @observable
  public async load() {
    this.location = '';
  }

  constructor() {
    ipcRenderer.on(
      'download-started',
      (e: any, item: DownloadItem, location: any) => {
        this.list.unshift(item);
      },
    );

    ipcRenderer.on('download-progress', (e: any, item: DownloadItem) => {
      const i = this.list.find(x => x.id === item.id);
      i.receivedBytes = item.receivedBytes;
    });

    ipcRenderer.on('download-completed', (e: any, id: string) => {
      /* @todo Rewrite downloads */
      const i = this.list.find(x => x.id === id);
      // i.savePath = resolve(file.get('downloadLocation') + '\\' + i.fileName);
      i.completed = true;

      // rename(
      //   resolve(app.getPath('temp') + '\\' + i.fileName),
      //   // resolve(file.get('downloadLocation') + '\\' + i.fileName),
      //   function(err) {
      //     if (err) {
      //     }
      //   },
      // );
    });
  }
}

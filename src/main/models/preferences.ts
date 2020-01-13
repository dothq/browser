import { DEFAULT_PREFERENCES, DEFAULT_PREFERENCES_OBJECT } from '../../shared/models/default-preferences';

import { EventEmitter } from 'events';
import { readFileSync, promises } from 'fs';
import { preferencesLocation } from '../services';
import { WindowsManager } from '../windows-manager';
import { ipcMain } from 'electron';

const fileOptions = {
    encoding: 'utf-8'
}

export class Preferences extends EventEmitter {
    public conf = DEFAULT_PREFERENCES_OBJECT;

    private loaded = false;

    private windowsManager: WindowsManager;

    private onLoad = async (): Promise<void> => {
        return new Promise(resolve => {
          if (!this.loaded) {
            this.once('load', () => {
              resolve();
            });
          } else {
            resolve();
          }
        });
    };

    constructor(manager: WindowsManager) {
        super();

        this.windowsManager = manager;

        ipcMain.on('get-settings-sync', async e => {
            await this.onLoad();
            this.load()
            e.returnValue = this.conf;
          });
      
        ipcMain.on('get-settings', async e => {
            await this.onLoad();
            console.log("update-settings", this.conf)
            this.windowsManager.window.webContents.send("update-settings", this.conf);
        });

        this.load()
    }

    private async load() {
        const file = await promises.readFile(preferencesLocation, 'utf-8');
        const preferences = JSON.parse(file);

        console.log("load", preferences)

        if(!preferences.appearance.theme) {
            preferences.appearance.theme = 'light';
        }

        if(!preferences.search.provider) {
            preferences.search.provider = 'duckduckgo';
        }

        this.conf = preferences;

        this.loaded = true;
        this.emit('load');
        console.log("emitted load event");
    }
    

}
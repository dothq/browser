import { observable, action } from 'mobx';
import { ipcRenderer, remote } from 'electron';

import { DEFAULT_PREFERENCES_OBJECT, DEFAULT_PREFERENCES } from '~/shared/models/default-preferences';
import { Store } from '.';
import watch from 'node-watch';
import { resolve } from 'path';
import { readFileSync } from 'fs';

export type SettingsSection =
  | 'appearance'

export class PreferencesStore {
  @observable
  public selectedSection: SettingsSection = 'appearance';

  @observable
  public conf: DEFAULT_PREFERENCES = DEFAULT_PREFERENCES_OBJECT;

  public constructor(store: Store) {
    ipcRenderer.send('get-settings');

    ipcRenderer.on('update-settings', (e, settings: DEFAULT_PREFERENCES) => {
      this.updatePreferences(settings);
      console.log("store", this.conf)
    });

    let userData = remote.app.getPath('userData')

    const self = this;

    watch(resolve(userData, 'preferences.json'), () => {
        console.log(`[PreferencesStore] The preferences file has been updated.`);

        const file = readFileSync(resolve(userData, 'preferences.json'), 'utf-8');
        const newPrefs = JSON.parse(file)

        self.conf = newPrefs;
        self.updatePreferences(newPrefs)
    });
  }

  @action
  public updatePreferences(newPrefs: DEFAULT_PREFERENCES) {
    this.conf = { ...this.conf, ...newPrefs };
  }
}

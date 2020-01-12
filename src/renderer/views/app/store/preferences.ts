import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';

import { DEFAULT_PREFERENCES_OBJECT, DEFAULT_PREFERENCES } from '~/shared/models/default-preferences';
import { Store } from '.';

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
  }

  @action
  public updatePreferences(newPrefs: DEFAULT_PREFERENCES) {
    this.conf = { ...this.conf, ...newPrefs };
  }
}

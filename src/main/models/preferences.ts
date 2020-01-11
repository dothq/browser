import { DEFAULT_PREFERENCES, DEFAULT_PREFERENCES_OBJECT } from '../../shared/models/default-preferences';

import { EventEmitter } from 'events';
import { readFileSync } from 'fs';
import { preferencesLocation } from '../services';
import { appWindow } from '..';

const fileOptions = {
    encoding: 'utf-8'
}

export class Preferences extends EventEmitter {
    public conf = DEFAULT_PREFERENCES_OBJECT;

    constructor() {
        super();

        const preferences = (JSON.parse(readFileSync(preferencesLocation, fileOptions)) as DEFAULT_PREFERENCES)

        console.log(preferences)

        if(!preferences.appearance.theme) {
            preferences.appearance.theme = 'light';
        }

        if(!preferences.search.provider) {
            preferences.search.provider = 'duckduckgo';
        }

        this.conf = preferences;
    }

}
import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { DEFAULT_PREFERENCES_OBJECT } from '../../shared/models/default-preferences';
import { startStorageService } from './storage';

import colors from 'colors';

export let userData = startStorageService()

export const preferencesExist = () => { 
    return existsSync(resolve(userData, 'preferences.json'))
}

export const preferencesLoad = () => {
    console.log(`${colors.blue.bold('Preferences')} Loaded preferences file located at ${userData}`);

    if(preferencesExist() == false) {
        const defaultPreferences = DEFAULT_PREFERENCES_OBJECT

        writeFileSync(
            resolve(userData, 'preferences.json'),
            JSON.stringify(defaultPreferences)
        )
    }
}

export const preferencesLocation = resolve(userData, 'preferences.json');
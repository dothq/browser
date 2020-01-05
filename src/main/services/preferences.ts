import { existsSync, writeFileSync } from 'fs';
import { app } from 'electron';
import { resolve } from 'path';

import { DEFAULT_PREFERENCES_OBJECT } from '../../shared/models/default-preferences';

let userData = app.getPath('userData')

export const preferencesExist = () => { 
    return existsSync(resolve(userData, 'preferences.json'))
}

export const preferencesFirstSetup = () => {
    const defaultPreferences = DEFAULT_PREFERENCES_OBJECT

    writeFileSync(
        resolve(userData, 'preferences.json'),
        JSON.stringify(defaultPreferences)
    )
}

export const preferencesLocation = resolve(userData, 'preferences.json');
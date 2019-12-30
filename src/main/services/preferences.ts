import { existsSync, writeFileSync } from 'fs';
import { app } from 'electron';
import { resolve } from 'path';

import { Preferences } from '../../shared/models/default-preferences';

let userData = app.getPath('userData')

export const PreferencesExist = () => { 
    return existsSync(resolve(userData, 'preferences.json'))
}

export const preferencesFirstSetup = () => {
    writeFileSync(
        resolve(userData, 'preferences.json'),
        JSON.stringify(Preferences)
    )
}

export const preferencesLocation = resolve(userData, 'preferences.json');
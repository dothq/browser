import { existsSync, writeFileSync } from 'fs';
import { app } from 'electron';
import { resolve } from 'path';

import { Preferences } from '../../shared/models/default-preferences';

let userData = app.getPath('userData')

export const PreferencesExist = () => { 
    return existsSync(resolve(userData, 'Dot Browser', 'preferences.json'))
}

export const preferencesFirstSetup = () => {
    writeFileSync(
        resolve(userData, 'Dot Browser', 'preferences.json'),
        Preferences
    )
}
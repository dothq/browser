import { readFileSync } from 'fs';
import { resolve } from 'path';
import colors from 'colors';

const userData = process.env.__DOT_USERDATA_PATH;

const loadPreferences = () => {
    const file = readFileSync(resolve(userData, 'preferences.json'), 'utf-8')
    const preferences = JSON.parse(file);

    (window as any).settings = preferences;
}

setInterval(loadPreferences, 1000);
console.log(`${colors.blue.bold('Preferences')} Loaded preferences file located at ${userData}`);
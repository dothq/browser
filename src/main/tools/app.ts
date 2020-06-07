import { platform, homedir } from "os";
import { app } from "electron";
import { resolve } from "path";
import { appWindow } from "..";

export const setAppDataLocation = () => {
    if(platform() == 'darwin') {
        app.setPath('userData', resolve(homedir(), 'Library', 'Application Support', 'Dot Browser'));
    } else if(platform() == 'win32') {
        app.setPath('userData', resolve(homedir(), 'AppData', 'Roaming', 'Dot Browser'));
    } else {
        app.setPath('userData', resolve(homedir(), '.local', 'share', 'Dot Browser'));
    }
}

export const focusAddressbar = () => {
    appWindow.window.webContents.send('focus-addressbar')
}
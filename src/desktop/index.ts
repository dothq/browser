import { AppWindow } from "./app";
import { app, ipcMain, protocol } from "electron";
import { autoUpdater } from 'electron-updater';
import { startProtocolService } from "./tools/protocol";

import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { USER_DATA } from "../constants/storage";

export let appWindow: AppWindow;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

autoUpdater.checkForUpdatesAndNotify();

if(process.env.ENV == "development") process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true.toString();

app.name = "Dot Browser"

protocol.registerSchemesAsPrivileged([
    { 
        scheme: 'dot', 
        privileges: { 
            standard: true, 
            secure: true, 
            corsEnabled: true,
            supportFetchAPI: true,
            allowServiceWorkers: true
        }
    }
])

app.on('ready', () => {
    appWindow = new AppWindow();

    startProtocolService()
})

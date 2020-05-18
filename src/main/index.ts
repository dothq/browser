import { AppWindow } from "./app";
import { app, ipcMain } from "electron";
import { autoUpdater } from 'electron-updater';

export let appWindow: AppWindow;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

autoUpdater.checkForUpdatesAndNotify();

if(process.env.ENV == "development") process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true.toString();

app.name = "Dot Browser"

app.on('ready', () => {
    appWindow = new AppWindow();
})
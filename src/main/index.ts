import { AppWindow } from "./app";
import { app, ipcMain } from "electron";

let appWindow: AppWindow;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

app.on('ready', () => {
    appWindow = new AppWindow();
})
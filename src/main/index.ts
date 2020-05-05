import { AppWindow } from "./app";
import { app, ipcMain } from "electron";

export let appWindow: AppWindow;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

if(process.env.ENV == "development") process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true.toString();

app.name = "Dot Browser"

app.on('ready', () => {
    appWindow = new AppWindow();
})
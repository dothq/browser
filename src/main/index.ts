import { AppWindow } from "./app";
import { app, ipcMain } from "electron";
import { View } from "./view";

export let appWindow: AppWindow;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

app.on('ready', () => {
    appWindow = new AppWindow();

    const { view } = new View(3, "https://google.com")

    appWindow.window.setBrowserView(view)
})
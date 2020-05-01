import { ipcMain } from "electron";
import { appWindow } from "..";

ipcMain.on('app-close', (e) => {
    console.log("App close")
    appWindow.window.close()
})

ipcMain.on('app-minimise', (e) => {
    console.log("App min")
    appWindow.window.minimize()
})

ipcMain.on('app-maximise', (e) => {
    console.log("App max")
    appWindow.window.maximize()
})

ipcMain.on('app-restore', (e) => {
    console.log("App res")
    appWindow.window.restore()
})
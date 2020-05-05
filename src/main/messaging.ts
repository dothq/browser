import { ipcMain } from "electron";
import { View } from "./view";
import { appWindow } from ".";
import { NAVIGATION_HEIGHT } from "../renderer/app/constants/window";

export const startMessagingAgent = () => {
    ipcMain.on('view-create', (e, options) => {
        const view = new View(options.id, options.url);

        appWindow.views.push(view)

        if(options.active == true) {
            appWindow.window.setBrowserView(view.view)
            appWindow.selectedId = view.id;
        }

        view.rearrange()
    })

    ipcMain.on('view-select', (e, id) => {
        const view = appWindow.getViewFromId(id);
        if(!view) return;

        appWindow.selectedId = view.id;
        appWindow.window.setBrowserView(view.view)

        view.rearrange()
    })

    ipcMain.on('view-destroy', (e, id, replacingId) => {
        let index = appWindow.views.findIndex(view => view.id == id)
        let view = appWindow.views[index];
        let replacingView = appWindow.getViewFromId(replacingId);

        if(view.id !== id || replacingView.id !== replacingId) return;

        if(view !== null) {
            appWindow.selectedId = replacingView.id;
            appWindow.window.setBrowserView(replacingView.view);
    
            replacingView.rearrange()
    
            view.view.destroy()
            view = null;
        }

    })

    ipcMain.on('view-refresh', (e, id, ignoreCache?: boolean) => {
        const { view } = appWindow.getViewFromId(id);
        if(!view) return;

        if(ignoreCache) return view.webContents.reloadIgnoringCache()
        view.webContents.reload()
    })

    ipcMain.on('view-navigate', (e, id, url) => {
        const { view } = appWindow.getViewFromId(id);
        if(!view) return;

        view.webContents.loadURL(url)
    })

    ipcMain.on('app-close', (e) => { appWindow.window.close() })
}
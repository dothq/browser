import { ipcMain } from "electron";
import { View } from "./view";
import { appWindow } from ".";

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
        const view = appWindow.views.find(view => view.id == id);
        if(!view) return;

        appWindow.selectedId = view.id;
        appWindow.window.setBrowserView(view.view)

        view.rearrange()
    })

    ipcMain.on('view-destroy', (e, id, replacingId) => {
        const index = appWindow.views.findIndex(view => view.id == id)
        const view = appWindow.views[index];
        const replacingView = appWindow.views.find(view => view.id == replacingId);

        if(view.id !== id || replacingView.id !== replacingId) return;

        appWindow.selectedId = replacingView.id;
        appWindow.window.setBrowserView(replacingView.view);

        replacingView.rearrange()

        view.view.destroy()
    })

    ipcMain.on('view-refresh', (e, id, ignoreCache?: boolean) => {
        const { view } = appWindow.views.find(view => view.id == id);
        if(!view) return;

        if(ignoreCache) return view.webContents.reloadIgnoringCache()
        view.webContents.reload()
    })

    ipcMain.on('view-navigate', (e, id, url) => {
        const { view } = appWindow.views.find(view => view.id == id);
        if(!view) return;

        view.webContents.loadURL(url)
    })

    ipcMain.on('app-close', (e) => { appWindow.window.close() })
}
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

        view.rearrange()

        appWindow.selectedId = view.id;
        appWindow.window.setBrowserView(view.view)
    })

    ipcMain.on('view-destroy', (e, id, previousId) => {
        const view = appWindow.views.find(view => view.id == id);
        if(!view) return;

        const previousView = appWindow.views.find(view => view.id == previousId);
        if(!previousView) return;

        if(appWindow.views.length == 1) return appWindow.window.close();

        console.log(view)

        view.view.destroy()

        appWindow.views = appWindow.views.filter(view => view.id !== id);

        previousView.rearrange()

        appWindow.selectedId = previousView.id;
        appWindow.window.setBrowserView(previousView.view)
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

        console.log(id)

        view.webContents.loadURL(url)
    })

    ipcMain.on('app-close', (e) => { appWindow.window.close() })
}
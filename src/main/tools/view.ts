import { View } from "../view";
import { appWindow } from "..";

export const createView = (options) => {
    const view = new View(options.id, options.url);

    appWindow.views.push(view)
    appWindow.window.addBrowserView(view.view)

    if(options.active == true) {
        appWindow.window.setBrowserView(view.view)
        appWindow.selectedId = view.id;
    }

    view.rearrange()
}

export const selectView = (id) => {
    const view = appWindow.getViewFromId(id);
    if(!view) return;

    appWindow.selectedId = view.id;

    if(view.view.isDestroyed() == false) view.rearrange()

    appWindow.window.setBrowserView(view.view)
}

export const destroyView = (id) => {
    const { view } = appWindow.getViewFromId(id)

    appWindow.window.removeBrowserView(view)
    view.destroy()
}

export const refreshView = (id, ignoreCache: boolean) => {
    const { view } = appWindow.getViewFromId(id);
    if(!view) return;

    if(ignoreCache) return view.webContents.reloadIgnoringCache()
    view.webContents.reload()
}

export const stopView = (id) => {
    const { view } = appWindow.getViewFromId(id);
    if(!view) return;

    view.webContents.stop()
}

export const backView = (id) => {
    const { view } = appWindow.getViewFromId(id);
    if(!view) return;

    view.webContents.canGoBack() && view.webContents.goBack()
}

export const forwardView = (id) => {
    const { view } = appWindow.getViewFromId(id);
    if(!view) return;

    view.webContents.canGoForward() && view.webContents.goForward()
}

export const navigateView = (id, url) => {
    const { view } = appWindow.getViewFromId(id);
    if(!view) return;

    view.webContents.loadURL(url)
}

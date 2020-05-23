import { View } from "../view";
import { appWindow } from "..";

export const createView = (options) => {
    const view = new View(options.id, options.url);

    appWindow.views.push(view)

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
    appWindow.window.setBrowserView(view.view)

    if(view.view.isDestroyed() == false) view.rearrange()
}

export const destroyView = (id) => {
    const { view } = appWindow.getViewFromId(id)

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

    if (url.includes('google.com' || url.includes('youtube.com')) === true) {
        view.webContents.userAgent =
          view.webContents.userAgent
            .replace(/ DotBrowser\\?.([^\s]+)/g, '')
            .replace(/ Electron\\?.([^\s]+)/g, '')
            .replace(/ AppleWebKit\\?.([^\s]+)/g, '')
            .replace(/ Safari\\?.([^\s]+)/g, '')
            .replace(/Chrome\\?.([^\s]+)/g, `Gecko/20100101 Firefox/76.0`)
    } else {
        view.webContents.userAgent =
          view.webContents.userAgent
          .replace(/ dot\\?.([^\s]+)/g, '')
          .replace(/ Electron\\?.([^\s]+)/g, '')
          .replace(/Chrome\\?.([^\s]+)/g, `Chrome/81.0.4044.122`)
    }

    view.webContents.loadURL(url)
}

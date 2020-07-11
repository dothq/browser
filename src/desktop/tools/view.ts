import { View } from "../view";
import { appWindow } from "..";

export const createView = (options) => {
    const view = new View(options.id, options.url);

    appWindow.views.push(view)

    if(options.active == true) {
        appWindow.window.addBrowserView(view.view)
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
    const viewIndex = appWindow.getViewIndex(id)

    const { view } = appWindow.views[viewIndex];

    appWindow.window.removeBrowserView(view)
    view.destroy()

    appWindow.views[viewIndex] = null;
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

export const bookmarkView = (id) => {
     // todo: migrate old nedb code to sqlite
    // const view = appWindow.getViewFromId(id);
    // if(!view) return;

    // appWindow.storage.db.bookmarks.count({
    //     url: view.url
    // }, (e, count) => {
    //     if(count == 0) {
    //         appWindow.storage.db.bookmarks.insert([
    //             {
    //                 tabId: view.id,
    //                 url: view.url,
    //                 title: view.title,
    //                 favicon: view.favicon
    //             }
    //         ])
    //     } else {
    //         appWindow.storage.db.bookmarks.remove({
    //             url: view.url
    //     }, { multi: true })
    //     }
    // })

    // appWindow.window.webContents.send('refetch-storage');

}

export const setFontSizeView = (id: any, size: "vs" | "s" | "m" | "l" | "vl") => {
    const sizes = {
        vs: 8,
        s: 12,
        m: 16,
        l: 20,
        vl: 72
    }

    if(size == "m") return;

    const view = appWindow.getViewFromId(id);
    if(!view) return;

    if(view.injectedCss.fontSize !== '') view.view.webContents.removeInsertedCSS(view.injectedCss.fontSize)
    view.view.webContents.insertCSS(`html { font-size: ${sizes[size]}px !important }`, { cssOrigin: 'user' }).then(v => { view.injectedCss.fontSize = v })
}

export const setPageSizeView = (id: any, size: number) => {
    const { view } = appWindow.getViewFromId(id);
    if(!view) return;

    view.webContents.zoomFactor = 1;
    view.webContents.zoomFactor = size/100;
}
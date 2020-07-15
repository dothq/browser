import { platform, homedir } from "os";
import { app, Menu } from "electron";
import { resolve } from "path";
import { appWindow } from "..";
import { NAVIGATION_HEIGHT } from "../../ui/constants/window";
import { showBookmarkMenu } from "../menus/bookmark";
import { showTabMenu } from "../menus/tab";

export const setAppDataLocation = () => {
    if(platform() == 'darwin') {
        app.setPath('userData', resolve(homedir(), 'Library', 'Application Support', 'Dot Browser'));
    } else if(platform() == 'win32') {
        app.setPath('userData', resolve(homedir(), 'AppData', 'Roaming', 'Dot Browser'));
    } else {
        app.setPath('userData', resolve(homedir(), '.local', 'share', 'Dot Browser'));
    }
}

export const focusAddressbar = () => {
    appWindow.window.webContents.send('focus-addressbar')
}

export const popupMenu = () => {
    if(!appWindow.menuVisible) {
        const { width } = appWindow.window.getBounds()

        appWindow.menu.popup({ x: width - 238, y: appWindow.fullscreen ? 0 : NAVIGATION_HEIGHT, window: appWindow.window })
    }
}

export const popupBookmarkMenu = (args) => {
    showBookmarkMenu(args.bookmark, args.x, args. y)
}

export const popupTabMenu = (args) => {
    showTabMenu(args.tabId, args.x, args. y)
}

export const hideMenu = (menu: Menu) => {
    menu.closePopup(appWindow.window)
}
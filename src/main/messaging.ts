import { ipcMain, app } from "electron";

import { 
    createView, 
    selectView, 
    destroyView, 
    refreshView, 
    stopView, 
    backView, 
    forwardView, 
    navigateView
} from "./tools/view";
import { appWindow } from ".";
import { 
  updateMouseBoundries, 
  updateOverlayCursor, 
  showSuggestionBox, 
  hideSuggestionBox, 
  setSuggestionBoxWidth, 
  setSuggestionBoxLeft, 
  showMenu,
  hideMenu,
  setMenuLeft
} from "./tools/overlay";
import { focusAddressbar } from "./tools/app";

export const startMessagingAgent = () => {
    ipcMain.on('view-create', (e, options) => createView(options))
    ipcMain.on('view-select', (e, id) => selectView(id))
    ipcMain.on('view-destroy', (e, id) => destroyView(id))
    
    ipcMain.on('view-refresh', (e, id, ignoreCache?: boolean) => refreshView(id, ignoreCache))
    ipcMain.on('view-stop', (e, id) => stopView(id))
    ipcMain.on('view-back', (e, id) => backView(id))
    ipcMain.on('view-forward', (e, id) => forwardView(id))

    ipcMain.on('view-navigate', (e, id, url) => navigateView(id, url))

    ipcMain.on('app-close', (e) => { appWindow.window.close() })
    ipcMain.on('app-minimise', (e) => { appWindow.window.minimize() })
    ipcMain.on('app-maximise', (e) => { 
      if(appWindow.window.isMaximized()) return appWindow.window.unmaximize()
      return appWindow.window.maximize()
    })

    ipcMain.on('ignore-pointer-events', () => updateMouseBoundries(false))
    ipcMain.on('allow-pointer-events', () => updateMouseBoundries(true))

    ipcMain.on('suggestionbox-activate', () => showSuggestionBox())
    ipcMain.on('suggestionbox-disable', () => hideSuggestionBox())
    ipcMain.on('suggestionbox-width', (e, args) => setSuggestionBoxWidth(args))
    ipcMain.on('suggestionbox-left', (e, args) => setSuggestionBoxLeft(args))

    ipcMain.on('menu-activate', () => showMenu())
    ipcMain.on('menu-disable', () => hideMenu())
    ipcMain.on('menu-left', (e, args) => setMenuLeft(args))

    ipcMain.on(`transport-active-cursor`, (e, cursor) => updateOverlayCursor(cursor))

    ipcMain.on('focus-addressbar', () => focusAddressbar())
}
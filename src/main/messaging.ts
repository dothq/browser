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
import { updateMouseBoundries, updateOverlayCursor, showSuggestionBox } from "./tools/overlay";

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

    ipcMain.on('ignore-pointer-events', () => updateMouseBoundries(false))
    ipcMain.on('allow-pointer-events', () => updateMouseBoundries(true))

    ipcMain.on('suggestionbox-activate', () => showSuggestionBox())

    ipcMain.on(`transport-active-cursor`, (e, cursor) => updateOverlayCursor(cursor))
}
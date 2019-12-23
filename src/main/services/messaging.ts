import { ipcMain, autoUpdater, IpcMainEvent } from 'electron'
import { AppWindow } from '../app-window';

export const startMessagingService = (window: AppWindow) => {
    ipcMain.on('update-install', () => {
        autoUpdater.quitAndInstall();
    });
    
    ipcMain.on('open-omnibox', (event: IpcMainEvent, details: any) => {
        window.search.show();
        window.search.send(details)
    });
    
    ipcMain.on('show-dialog', (event: IpcMainEvent, dialog: string) => {
        if(window[dialog].visible == false) {
            window[dialog].show();
        } else {
            window[dialog].hide();
        }
    })

    ipcMain.on('hide-dialog', (event: IpcMainEvent, dialog: string) => {
        window[dialog].hide()
    })

    ipcMain.on('show-alert', (event: IpcMainEvent, action: 'alert' | 'confirm' | 'input', content: any) => {
        window.alert.show();
        window.alert.action = action;
        window.alert.send(content);
    })

    ipcMain.on('dev-tools-open', () => {
        window.webContents.inspectElement(0, 0);

        if (window.webContents.isDevToolsOpened()) {
            window.webContents.devToolsWebContents.focus();
        }
    });
    
    ipcMain.on('update-check', () => {
        autoUpdater.checkForUpdates();
    });
    
    ipcMain.on('transport-settings-push', (event: any, data: any) => {
        console.log('transporting', data);
        window.viewManager.newTabView().webContents.send('settings-push', data);
    });
    
    ipcMain.on('window-focus', () => {
        window.webContents.focus();
    });
}
import { ipcMain, IpcMainEvent, app } from 'electron'
import { AppWindow } from '../app-window';
import { autoUpdater } from 'electron-updater';

export const startMessagingService = (window: AppWindow) => {
    ipcMain.on('update-install', () => {
        autoUpdater.quitAndInstall();
    });
    
    ipcMain.on('open-omnibox', (event: IpcMainEvent) => {
        console.log(window.viewManager.selected.url)
        window.search.show({
            url: window.viewManager.selected.url,
            tabId: window.viewManager.selected.tabId
        });
    });
    
    ipcMain.on('show-dialog', (event: IpcMainEvent, dialog: string) => {
        console.log("Showing dialog", dialog);
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

    ipcMain.on('app-open-dev-tools', () => {
        window.webContents.openDevTools({ mode: 'detach' })
    })

    ipcMain.on('update-top-sites', async e => {
        window.webContents.send('get-top-sites');

        ipcMain.on('receive-top-sites', async (e, topsites) => {
            await app.isReady();
            console.log("Recieved history items from history store, sending back to search.");
            window.search.webContents.send('history-items', topsites);
        })

    })

    autoUpdater.on('update-downloaded', ({ version }) => {
        window.webContents.send('update-available', version);
    });
}
import { ipcMain, IpcMainEvent, app } from 'electron'
import { AppWindow } from '../app-window';
import { autoUpdater } from 'electron-updater';

import colors from 'colors';

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

    ipcMain.once('update-top-sites', async e => {
        window.webContents.send('get-top-sites');

        ipcMain.once('receive-top-sites', async (e, topsites) => {
            await app.isReady();
            console.log(`${colors.blue.bold('History')} Sending history items to search dialog`);
            window.search.webContents.send('history-items', topsites);
        })

    })

    autoUpdater.on('update-downloaded', ({ version }) => {
        window.webContents.send('update-available', version);
    });

    ipcMain.on('open-print', (e) => {
        window.print.show()
        window.print.webContents.send('update-printers', window.webContents.getPrinters());

        window.viewManager.selected.webContents.capturePage().then(image => {
            window.print.webContents.send('update-page-preview', image.toDataURL());
        })
    })
}
import { ipcMain, IpcMainEvent, app } from 'electron'
import { AppWindow } from '../app-window';
import { autoUpdater } from 'electron-updater';

import colors from 'colors';
import { callViewMethod } from '~/shared/utils/view';
import { zoom } from '~/shared/events';

export const startMessagingService = (window: AppWindow) => {
    ipcMain.on('update-install', () => {
        autoUpdater.quitAndInstall();
    });
    
    ipcMain.on('open-search', (event: IpcMainEvent) => {
        window.dialogs.search.show({
            url: window.viewManager.selected.url,
            tabId: window.viewManager.selected.tabId,
            favicon: window.viewManager.selected.favicon
        });
    });
    
    ipcMain.on('show-dialog', (event: IpcMainEvent, dialog: string) => {
        if(window.dialogs[dialog].visible == false) {
            window.dialogs[dialog].show();
        } else {
            window.dialogs[dialog].hide();
        }
    })

    ipcMain.on('hide-dialog', (event: IpcMainEvent, dialog: string) => {
        window.dialogs[dialog].hide()
    })

    ipcMain.on('show-alert', (event: IpcMainEvent, action: 'alert' | 'confirm' | 'input', content: any) => {
        window.dialogs.alert.show();
        window.dialogs.alert.action = action;
        window.dialogs.alert.send(content);
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
        window.viewManager.newTabView().webContents.send('settings-push', data);
    });
    
    ipcMain.on('window-focus', () => {
        window.webContents.focus();
    });

    ipcMain.on('window-close', () => {
        console.log(`${colors.blue.bold('Window')} Given signal to close application.`);
        window.close()
    });

    ipcMain.on('window-restore', () => {
        window.unmaximize()
    });

    ipcMain.on('window-maximize', () => {
        window.maximize()
    });

    ipcMain.on('window-minimize', () => {
        window.minimize()
    });

    ipcMain.on('app-open-dev-tools', () => {
        window.webContents.openDevTools({ mode: 'detach' })
    })

    ipcMain.once('update-top-sites', async e => {
        window.webContents.send('get-top-sites');

        ipcMain.on('receive-top-sites', async (e, topsites) => {
            await app.isReady();
            console.log(`${colors.blue.bold('History')} Sending history items to search dialog`);
            window.dialogs.search.webContents.send('history-items', topsites);
        })

    })

    autoUpdater.on('update-downloaded', ({ version }) => {
        window.webContents.send('update-available', version);
    });

    ipcMain.on('get-accent-color', (event) => {
        window.webContents.send('get-accent-color');

        ipcMain.on('receive-accent-color', async (e, ac) => {
            event.returnValue = ac;
        })
    })

    ipcMain.on('open-print', (e) => {

        window.viewManager.selected.webContents.executeJavaScript(`
            document.body.style.width = "467px";
        `)

        window.dialogs.print.show()
        window.dialogs.print.webContents.send('update-printers', window.webContents.getPrinters());

        window.viewManager.selected.webContents.capturePage({ width: 467, height: 686, x: 0, y: 0 }).then(image => {
            window.dialogs.print.webContents.send('update-page-preview', image.toDataURL());
        })

        setTimeout(() => {
            window.viewManager.selected.webContents.executeJavaScript(`
                document.body.style.width = "";
            `)
        }, 3000);
    })

    ipcMain.on('reset-zoom', (e) => {
        window.viewManager.selected.webContents.zoomFactor = 1;
    })

    ipcMain.on('set-zoom', (e, dir) => {
        zoom(dir, window);
    })
}
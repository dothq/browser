import {
  BrowserWindow,
  app,
  ipcMain,
} from 'electron';
import { resolve } from 'path';
import { appWindow } from '.';
import { TOOLBAR_HEIGHT } from '../renderer/app/constants/design';

export class PermissionDialog extends BrowserWindow {
  constructor(public appWindow: any) {
    super({
      width: 405,
      height: 200,
      frame: false,
      resizable: false,
      maximizable: false,
      show: false,
      fullscreenable: false,
      skipTaskbar: true,
      transparent: true,
      closable: false,
      minHeight: 0,
      title: 'Dot Permission Dialog',
      webPreferences: {
        plugins: true,
        nodeIntegration: true,
        contextIsolation: false,
        experimentalFeatures: true,
        enableBlinkFeatures: 'OverlayScrollbars',
        webviewTag: true,
      },
      icon: resolve(process.cwd(), '/static/icon.png'),
    });

    app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');
    app.commandLine.appendSwitch('--enable-transparent-visuals');
    app.commandLine.appendSwitch('auto-detect', 'false');

    this.setParentWindow(this.appWindow);

    this.webContents.loadURL(
      process.cwd() + '/static/pages/dialog/permission.html',
    );
  }

  public async requestPermission(
    name: string,
    url: string,
    details: any,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (
        name === 'unknown' ||
        (name === 'media' && details.mediaTypes.length === 0)
      ) {
        return reject('Unknown permission');
      }

      this.rearrange();

      this.webContents.send('request-permission', { name, url, details });

      ipcMain.once(
        'request-permission-result',
        (e: any, r: boolean, permission: any) => {
          resolve(r);
          if (permission == 'http_permission') {
            appWindow.viewManager.selected.webContents.loadURL(
              `https://${
                appWindow.viewManager.selected.webContents
                  .getURL()
                  .split('://')[1]
              }`,
            );
          }
        },
      );

      ipcMain.once('pls-show', (e: any) => {
        this.show();
        this.setIgnoreMouseEvents(false);
        this.setOpacity(1);
      });

      ipcMain.once('pls-hide', (e: any) => {
        this.hide();
        this.setIgnoreMouseEvents(false);
        this.setOpacity(0);
      });
    });
  }

  public rearrange() {
    const cBounds = this.appWindow.getContentBounds();
    this.setBounds({ x: cBounds.x, y: cBounds.y + TOOLBAR_HEIGHT } as any);
  }
}

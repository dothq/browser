import { BrowserWindow, app, nativeImage, screen, session, ipcMain, ipcRenderer } from 'electron';
import { resolve } from 'path';
import { appWindow } from '.';
import { TOOLBAR_HEIGHT } from '~/renderer/app/constants/design';

export class PermissionDialog extends BrowserWindow {
  
  constructor(public appWindow: any) {

    super({
      width: 405,
      height: 200,
      frame: false,
      resizable: false,
      maximizable: false,
      show: false,
      alwaysOnTop: true,
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
      icon: resolve(app.getAppPath(), '/static/icon.png'),
    });

    app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar')
    app.commandLine.appendSwitch('--enable-transparent-visuals');
    app.commandLine.appendSwitch('auto-detect', 'false')
    app.commandLine.appendSwitch('no-proxy-server')

    this.webContents.loadURL(app.getAppPath() + '/static/pages/permission.html')

    if(process.env.ENV == 'dev') {
      this.webContents.openDevTools({ mode: 'detach'  })
    }


  }

  public async requestPermission(
    name: string,
    url: string,
    details: any,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (
        name === 'unknown' ||
        (name === 'media' && details.mediaTypes.length === 0) ||
        name === 'midiSysex'
      ) {
        return reject('Unknown permission');
      }

      this.rearrange();
      this.show();

      this.webContents.send('request-permission', { name, url, details });

      ipcRenderer.once('request-permission-result', (e: any, r: boolean) => {
        resolve(r);
        this.hide();
      });

      ipcRenderer.once('pls-show', (e: any) => {
        console.log("Showing permission window")
        this.show();
      });
  
      ipcRenderer.once('pls-hide', (e: any) => {
        console.log("Hiding permission window")
        this.hide();
      });

    });
  }

  public rearrange() {
    const cBounds = this.appWindow.getContentBounds();
    this.setBounds({ x: cBounds.x, y: cBounds.y + TOOLBAR_HEIGHT } as any);
  }

}

import { BrowserWindow, app, nativeImage, screen } from 'electron';
import { appWindow } from '~/renderer/app';
import { resolve } from 'path';

export class PermissionDialog extends BrowserWindow {
  
  constructor() {

    super({
      width: 450,
      height: 400,
      frame: true,
      resizable: false,
      maximizable: false,
      show: true,
      alwaysOnTop: true,
      fullscreenable: false,
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
}

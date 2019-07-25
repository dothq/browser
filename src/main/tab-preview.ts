import { BrowserWindow, app, nativeImage, screen } from 'electron';
import { appWindow } from '~/renderer/app';
import { resolve } from 'path';

export class TabPreview extends BrowserWindow {
  
   constructor(public appWindow: any) {

    super({
      width: 450,
      height: 180,
      show: true,
      alwaysOnTop: true,
      minHeight: 0,
      acceptFirstMouse: true,
      title: 'Dot Tab Preview',
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
    app.commandLine.appendSwitch('auto-detect', 'false')
    app.commandLine.appendSwitch('--enable-transparent-visuals');
    app.commandLine.appendSwitch('no-proxy-server')

    this.webContents.loadURL(app.getAppPath() + '/static/pages/tabs/tab-preview.html')

    if(process.env.ENV == 'dev') {
      this.webContents.openDevTools({ mode: 'detach'  })
    }

  }
}

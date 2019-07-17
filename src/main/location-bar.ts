import { BrowserWindow, app, nativeImage, screen } from 'electron';
import { appWindow } from '~/renderer/app';
import { resolve } from 'path';

export class LocationBar extends BrowserWindow {
  
  constructor() {

    super({
      width: 450,
      height: 22,
      frame: false,
      resizable: false,
      maximizable: false,
      movable: false,
      show: true,
      alwaysOnTop: true,
      fullscreenable: false,
      transparent: true,
      skipTaskbar: true,
      minHeight: 0,
      acceptFirstMouse: true,
      title: 'Dot Location Tooltip Handler',
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
    app.commandLine.appendSwitch('no-proxy-server')

    this.setIgnoreMouseEvents(true);
    this.webContents.loadURL(app.getAppPath() + '/static/pages/location-bar.html')

    if(process.env.ENV == 'dev') {
      this.webContents.openDevTools({ mode: 'detach'  })
    }

  }
}

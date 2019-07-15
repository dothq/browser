import { BrowserWindow, app, nativeImage, screen } from 'electron';
import { appWindow } from '~/renderer/app';
import { resolve } from 'path';

export class LocationBar extends BrowserWindow {
  
  constructor() {

    super({
      width: 450,
      height: 32,
      frame: false,
      resizable: false,
      maximizable: false,
      show: true,
      alwaysOnTop: true,
      fullscreenable: false,
      transparent: true,
      minHeight: 32,
      acceptFirstMouse: true,
      title: 'locproc',
      webPreferences: {
        plugins: true,
        nodeIntegration: true,
        contextIsolation: false,
        experimentalFeatures: true,
        enableBlinkFeatures: 'OverlayScrollbars',
        webviewTag: true,
      },
      icon: resolve(app.getAppPath(), '/icon.png'),
    });

    app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar')
    app.commandLine.appendSwitch('auto-detect', 'false')
    app.commandLine.appendSwitch('no-proxy-server')

    this.webContents.loadURL(app.getAppPath() + '/static/pages/location-bar.html')
    this.webContents.openDevTools({ mode: 'detach'  })

  }
}

import { BrowserWindow, app, nativeImage, screen } from 'electron';
import { appWindow } from '~/renderer/app';
import { resolve } from 'path';

export class LocationBar extends BrowserWindow {
  constructor(public appWindow: any) {
    super({
      x: 0,
      y: 0,
      width: 450,
      height: 22,
      frame: false,
      resizable: false,
      maximizable: false,
      movable: false,
      show: false,
      alwaysOnTop: false,
      fullscreenable: false,
      transparent: true,
      skipTaskbar: true,
      focusable: false,
      minHeight: 0,
      acceptFirstMouse: true,
      title: 'Location Host',
      webPreferences: {
        plugins: true,
        nodeIntegration: true,
        contextIsolation: false,
      },
      icon: resolve(app.getAppPath(), '/static/icon.png'),
    });

    this.setParentWindow(this.appWindow);

    this.setIgnoreMouseEvents(true);
    this.webContents.loadURL(
      app.getAppPath() + '/static/pages/util/location-bar.html',
    );

    if (process.env.ENV == 'dev') {
      this.webContents.openDevTools({ mode: 'detach' });
    }
  }
}

import { BrowserWindow } from 'electron';
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
      icon: resolve(process.cwd(), '/static/icon.png'),
    });

    this.setParentWindow(this.appWindow);

    this.setIgnoreMouseEvents(true);
    // tslint:disable-next-line: prefer-template
    this.webContents.loadURL(
      process.cwd() + '/static/pages/util/location-bar.html',
    );
  }
}

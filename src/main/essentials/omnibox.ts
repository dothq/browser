import { BrowserWindow, app, nativeImage, screen } from 'electron';
import { appWindow } from '~/renderer/app';
import { resolve } from 'path';
import { Tab } from '~/renderer/app/models';
import { TOOLBAR_HEIGHT } from '~/renderer/app/constants';
import * as isDev from 'electron-is-dev';

export class Omnibox extends BrowserWindow {
  constructor(public appWindow: any) {
    super({
      width: 1000,
      height: 50,
      title: 'Omnibox Host',
      frame: false,
      resizable: false,
      maximizable: false,
      show: false,
      fullscreenable: false,
      skipTaskbar: true,
      transparent: true,
      closable: false,
      minHeight: 0,
      webPreferences: {
        plugins: true,
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    this.setParentWindow(this.appWindow);

    this.webContents.loadURL('http://localhost:4444/search.html');

    if (isDev) {
      this.webContents.openDevTools({ mode: 'detach' });
    }
  }

  public open(tab?: Tab) {
    this.show();

    const cBounds = this.appWindow.getContentBounds();
    console.log(cBounds);
    this.setBounds({
      x: cBounds.x + cBounds.width / 2,
      y: cBounds.y + 42,
    } as any);

    this.webContents.send('tab-content', tab);
  }
}

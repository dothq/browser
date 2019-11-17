import { BrowserWindow } from 'electron';
import * as isDev from 'electron-is-dev';
import { Tab } from '../../renderer/app/models';

export class Omnibox extends BrowserWindow {
  constructor(public appWindow: any) {
    super({
      width: 1000,
      height: 58,
      title: 'Omnibox Host',
      frame: false,
      resizable: false,
      maximizable: false,
      opacity: 0,
      show: false,
      hasShadow: true,
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

    this.on('blur', () => {
      this.hide()
    })
  }

  public open(tab?: Tab) {
    this.show();

    const cBounds = this.appWindow.getContentBounds();
    
    this.setBounds({
      y: cBounds.y + 42,
    } as any);

    this.webContents.send('tab-content', tab);
  }
}

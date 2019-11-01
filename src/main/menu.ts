import { BrowserWindow, app, ipcMain, ipcRenderer } from 'electron';
import { resolve, join } from 'path';
import { appWindow } from '.';
import { TOOLBAR_HEIGHT } from '~/renderer/app/constants/design';
import store from '~/renderer/app/store';
import * as isDev from 'electron-is-dev';

export class MenuList extends BrowserWindow {
  public visible: boolean = false;

  constructor(public appWindow: any) {
    super({
      width: 260,
      height: 365,
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
      title: 'Dot Menu',
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

    if (isDev) {
      this.webContents.openDevTools({ mode: 'detach' });
      this.loadURL('http://localhost:4444/menu.html');
    } else {
      this.loadURL(join('file://', process.cwd(), 'build/menu.html'));
    }
  }

  public showWindow() {
    if (this.visible == false) {
      this.visible = true;
      this.webContents.send('visible', true);
      this.show();

      this.webContents.focus();
      this.rearrange();
    }
  }

  public hideWindow() {
    if (this.visible == true) {
      this.hide();
      this.webContents.send('visible', false);
      this.rearrange();
    }
  }

  public rearrange() {
    if (this.visible == true) {
      const cBounds = this.appWindow.getContentBounds();
      this.setBounds({
        x: cBounds.width - 145,
        y: cBounds.y + TOOLBAR_HEIGHT,
      } as any);
    }
  }
}

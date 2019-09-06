import {
  BrowserWindow,
  app,
  nativeImage,
  dialog,
  remote,
  ipcMain,
} from 'electron';
import { resolve, join } from 'path';
import { platform } from 'os';

import { ViewManager } from './view-manager';
import { getPath } from '~/shared/utils/paths';
import { existsSync, readFileSync, writeFileSync, appendFile } from 'fs';
import store from '~/renderer/app/store';
import console = require('console');
import { locationBar } from '.';
import { TOOLBAR_HEIGHT } from '~/renderer/app/constants/design';
import { PermissionDialog } from './permissions';
import { MenuList } from './menu';
const { setup: setupPushReceiver } = require('electron-push-receiver');

export class AppWindow extends BrowserWindow {
  public viewManager: ViewManager = new ViewManager();
  public permissionWindow: PermissionDialog = new PermissionDialog(this);
  public menu: MenuList = new MenuList(this);

  constructor() {
    super({
      frame: false,
      minWidth: 500,
      minHeight: 450,
      width: 1280,
      height: 720,
      show: false,
      backgroundColor: '#1c1c1c',
      title: 'Dot Browser',
      titleBarStyle: 'hiddenInset',
      maximizable: false,
      webPreferences: {
        plugins: true,
        nodeIntegration: true,
        contextIsolation: false,
        experimentalFeatures: true,
        enableBlinkFeatures: 'OverlayScrollbars',
        webviewTag: true,
        sandbox:
          platform() == 'linux'
            ? false
            : true /* This is a known issue on Linux machines, see https://github.com/dot-browser/desktop/issues/116 */,
      },
      icon: resolve(app.getAppPath(), '/icon.png'),
    });

    app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');
    app.commandLine.appendSwitch('--enable-transparent-visuals');
    app.commandLine.appendSwitch('auto-detect', 'false');
    app.commandLine.appendSwitch('--enable-transparent-visuals');

    const windowDataPath = getPath('window-data.json');

    setupPushReceiver(this.webContents);

    let windowState: any = {};

    let possibleURI: string[] = [];

    process.argv.forEach(specimen => {
      if (specimen.startsWith('http') == true) {
        possibleURI.push(specimen);
      }
    });

    if (existsSync(windowDataPath)) {
      try {
        // Read the last window state from file.
        windowState = JSON.parse(readFileSync(windowDataPath, 'utf8'));
      } catch (e) {
        writeFileSync(windowDataPath, JSON.stringify({}));
      }
    }

    // Merge bounds from the last window state to the current window options.
    if (windowState) {
      this.setBounds({ ...windowState.bounds });
    }

    if (windowState) {
      if (windowState.maximized) {
        this.maximize();
      }
      if (windowState.fullscreen) {
        this.setFullScreen(true);
      }
    }

    this.on('resize', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
    });

    this.on('move', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
    });

    this.on('resize', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
      this.menu.hideWindow();
    });
    this.on('move', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
      this.menu.hideWindow();
    });

    if (
      this.webContents.getURL().split('https://dot.ender.site/api/')[0] !=
      `https://dot.ender.site/api/`
    ) {
      this.webContents.setUserAgent(`Dot Fetcher/${app.getVersion()}`);
    }

    const resize = () => {
      this.viewManager.fixBounds();
      this.webContents.send('tabs-resize');
    };

    this.on('maximize', resize);
    this.on('restore', resize);
    this.on('unmaximize', resize);

    process.on('uncaughtException', error => {
      console.error(error);
    });

    this.on('close', () => {
      windowState.maximized = this.isMaximized();
      windowState.fullscreen = this.isFullScreen();
      writeFileSync(windowDataPath, JSON.stringify(windowState));
    });

    this.webContents.on('crashed', (event: any, crashed: boolean) => {
      this.loadURL(app.getAppPath() + 'static\\pages\\util\\crash.html');
    });

    if (process.env.ENV === 'dev') {
      this.setIcon(
        nativeImage.createFromPath(
          resolve(app.getAppPath() + '\\static\\icon.png'),
        ),
      );
      this.loadURL('http://localhost:4444/app.html');
    } else {
      this.loadURL(join('file://', app.getAppPath(), 'build/app.html'));
    }

    this.once('ready-to-show', () => {
      this.show();

      if (possibleURI) {
        setTimeout(() => {
          this.webContents.send('load-url-command', possibleURI);
        }, 1000);
      }
    });

    this.on('enter-full-screen', () => {
      this.webContents.send('fullscreen', true);
      this.viewManager.fixBounds();
    });

    this.on('leave-full-screen', () => {
      this.webContents.send('fullscreen', false);
      this.viewManager.fixBounds();
    });

    this.on('enter-html-full-screen', () => {
      this.viewManager.fullscreen = true;
      this.webContents.send('html-fullscreen', true);
    });

    this.on('leave-html-full-screen', () => {
      this.viewManager.fullscreen = false;
      this.webContents.send('html-fullscreen', false);
    });

    this.on('scroll-touch-begin', () => {
      this.webContents.send('scroll-touch-begin');
    });

    this.on('scroll-touch-end', () => {
      this.viewManager.selected.webContents.send('scroll-touch-end');
      this.webContents.send('scroll-touch-end');
    });

    this.on('app-command', (e, cmd) => {
      if (
        cmd === 'browser-backward' &&
        this.viewManager.selected.webContents.canGoBack()
      ) {
        this.viewManager.selected.webContents.goBack();
      }

      if (
        cmd === 'browser-forward' &&
        this.viewManager.selected.webContents.canGoBack()
      ) {
        this.viewManager.selected.webContents.goBack();
      }
    });
  }
}

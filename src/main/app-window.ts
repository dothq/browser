import {
  BrowserWindow,
  app,
  nativeImage,
} from 'electron';

import { resolve, join } from 'path';
import { platform } from 'os';

import { ViewManager } from './view-manager';
import { getPath } from '../shared/utils/paths';
import { existsSync, readFileSync, writeFileSync, appendFile } from 'fs';
import console = require('console');
import { PermissionDialog } from './permissions';
const { setup: setupPushReceiver } = require('electron-push-receiver');
import * as isDev from 'electron-is-dev';

import { MenuDialog } from './dialogs/menu';
import { PrintDialog } from './dialogs/print';
import { AlertDialog } from './dialogs/alert';
import { SearchDialog } from './dialogs/search';

import { PreferencesExist } from './services/preferences';
import { startMessagingService } from './services';

export class AppWindow extends BrowserWindow {
  public viewManager: ViewManager = new ViewManager();
  public permissionWindow: PermissionDialog = new PermissionDialog(this);
  public menu: MenuDialog = new MenuDialog(this);
  public search: SearchDialog = new SearchDialog(this);
  public print: PrintDialog = new PrintDialog(this);
  public alert: AlertDialog = new AlertDialog(this);

  public preferencesExist = PreferencesExist();

  constructor() {
    super({
      frame: false,
      minWidth: 500,
      minHeight: 450,
      width: 1280,
      height: 720,
      show: false,
      title: 'Dot Browser',
      titleBarStyle: 'hiddenInset',
      maximizable: true,
      webPreferences: {
        plugins: true,
        nodeIntegration: true,
        contextIsolation: false,
        experimentalFeatures: true,
        enableBlinkFeatures: 'OverlayScrollbars',
        webviewTag: true,
        webSecurity: false
      },
    });

    process.traceDeprecation = true;

    startMessagingService(this);

    this.setBackgroundColor('#fff');

    app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');
    app.commandLine.appendSwitch('--enable-transparent-visuals');
    app.commandLine.appendSwitch('auto-detect', 'false');

    let pluginName;
    switch (process.platform) {
      case 'win32':
        pluginName = 'pepflashplayer.dll';
        break;
      case 'darwin':
        pluginName = 'PepperFlashPlayer.plugin';
        break;
      case 'linux':
        pluginName = 'libpepflashplayer.so';
        break;
    }

    /** @almost_deprecated */
    // Adobe Flash Player will be deprecated January 2020
    app.commandLine.appendSwitch(
      'ppapi-flash-path',
      join(__dirname, pluginName),
    );

    const windowDataPath = getPath('window-data.json');

    const errorLogPath = getPath('dot-errors.log');

    var time = new Date().toUTCString();

    setupPushReceiver(this.webContents);

    let windowState: any = {};

    if (existsSync(windowDataPath)) {
      try {
        // Read the last window state from file.
        windowState = JSON.parse(readFileSync(windowDataPath, 'utf8'));
      } catch (e) {
        writeFileSync(windowDataPath, JSON.stringify({}));
      }
    }

    if (existsSync(errorLogPath)) {
      appendFile(
        errorLogPath,
        `// Error log effective of 2.2.0, ${time}. Running ${platform()}, started main app.\n`,
        function(err) {},
      );
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

    // Update modal bounds (permission window) on resize and move
    this.on('resize', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }

      this.viewManager.fixBounds();
      this.search.hide();
      this.permissionWindow.rearrange();
      this.alert.rearrange();
      this.print.rearrange();
      this.menu.hide()
    });

    this.on('move', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }

      this.search.hide();

      this.permissionWindow.rearrange();
      this.alert.rearrange();
      this.print.rearrange();
      this.menu.rearrange();
    });

    this.on('maximize', () => {
      this.webContents.send('window-state', 'maximize');
      this.viewManager.fixBounds();
      this.search.hide();
      this.alert.rearrange();
      this.print.rearrange();
      this.menu.hide()
    });

    this.on('unmaximize', () => {
      this.webContents.send('window-state', 'minimize');
      this.viewManager.fixBounds();
      this.search.hide();
      this.alert.rearrange();
      this.print.rearrange();
      this.menu.hide()
    });

    // Update window bounds on resize and on move when window is not maximized.
    this.on('resize', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
      this.menu.hide();
      this.viewManager.fixBounds();
      this.permissionWindow.rearrange();
      this.alert.rearrange();
      this.print.rearrange();
      this.search.hide();
    });
    this.on('move', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
      this.menu.hide();
      this.viewManager.fixBounds();
      this.permissionWindow.rearrange();
      this.alert.rearrange();
      this.print.rearrange();
      this.search.hide();
    });

    const resize = () => {
      this.viewManager.fixBounds();
      this.webContents.send('tabs-resize');
      this.permissionWindow.rearrange();
      this.alert.rearrange();
      this.print.rearrange();
      this.search.hide();
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

    console.log('file://' + resolve(__dirname, 'app.html'))

    if (process.env.NODE_ENV == 'dev') {
      this.setIcon(
        nativeImage.createFromPath(
          resolve(app.getAppPath(), `/static/icon.${platform() == 'win32' ? 'icon' : platform() == 'darwin' ? 'icns' : 'png'}`),
        ),
      );
      this.webContents.openDevTools({ mode: 'detach' });
      this.loadURL('http://localhost:4444/app.html');
    } else {
      this.loadURL('file://' + resolve(__dirname, 'renderer', 'app.html'));
    }

    this.once('ready-to-show', () => {
      this.show();
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

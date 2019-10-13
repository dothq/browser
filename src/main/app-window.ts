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
import { Omnibox } from './essentials/omnibox';
import { LocationBar } from './location-bar';
const { setup: setupPushReceiver } = require('electron-push-receiver');

import { DotOptions } from '~/renderer/app/models/dotoptions';

try {
  if (existsSync(getPath('dot-options.json'))) {
  }
} catch (e) {
  writeFileSync(
    getPath('dot-options.json'),
    JSON.stringify({
      toggleDotLauncher: true,
      searchEngine: 'google',
    } as DotOptions),
  );
}

export class AppWindow extends BrowserWindow {
  public viewManager: ViewManager = new ViewManager();
  public permissionWindow: PermissionDialog = new PermissionDialog(this);
  public menu: MenuList = new MenuList(this);
  public omnibox: Omnibox = new Omnibox(this);
  public locationBar: LocationBar = new LocationBar(this);

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
      },
      icon: resolve(app.getAppPath(), '/icon.png'),
    });

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
      this.omnibox.hide();

      // this.permissionWindow.rearrange();
      // this.menu.hideWindow()
    });

    this.on('move', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }

      this.omnibox.hide();

      // this.permissionWindow.rearrange();
      // this.menu.rearrange();
    });

    this.on('maximize', () => {
      this.webContents.send('window-state', 'maximize');
      this.viewManager.fixBounds();
      this.omnibox.hide();
    });

    this.on('unmaximize', () => {
      this.webContents.send('window-state', 'minimize');
      this.viewManager.fixBounds();
      this.omnibox.hide();
    });

    // Update window bounds on resize and on move when window is not maximized.
    this.on('resize', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
      this.menu.hideWindow();
      this.viewManager.fixBounds();
      this.omnibox.hide();
    });
    this.on('move', () => {
      if (!this.isMaximized()) {
        windowState.bounds = this.getBounds();
      }
      this.menu.hideWindow();
      this.viewManager.fixBounds();
      this.omnibox.hide();
    });

    if (
      this.webContents.getURL().split('https://api.dotbrowser.me/api/')[0] !=
      `https://api.dotbrowser.me/api/`
    ) {
      this.webContents.setUserAgent(`Dot Fetcher/${app.getVersion()}`);
    }

    const resize = () => {
      this.viewManager.fixBounds();
      this.webContents.send('tabs-resize');
      this.omnibox.hide();
    };

    // const fixPerm = () => {
    //   if(this.isMinimized() == true) {
    //     this.permissionWindow.setOpacity(0)
    //     this.permissionWindow.setIgnoreMouseEvents(true)

    //     const cBounds: any = this.getContentBounds();
    //     this.permissionWindow.setBounds({
    //       x: cBounds.x,
    //       y: cBounds.y + TOOLBAR_HEIGHT,
    //       height: this.permissionWindow.getBounds().height,
    //       width: this.permissionWindow.getBounds().width
    //     });

    //   }
    //   else {
    //     this.permissionWindow.setOpacity(1)
    //     this.permissionWindow.setIgnoreMouseEvents(false)

    //   }
    // };

    this.on('maximize', resize);
    this.on('restore', resize);
    this.on('unmaximize', resize);

    process.on('uncaughtException', error => {
      console.error(error);
    });

    // Save current window state to file.
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
      this.webContents.openDevTools({ mode: 'detach' });
      this.loadURL('http://localhost:4444/app.html');
    } else {
      this.loadURL(join('file://', app.getAppPath(), 'build/app.html'));
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

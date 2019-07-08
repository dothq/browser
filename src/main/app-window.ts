import { BrowserWindow, app, nativeImage, dialog, dialog, remote } from 'electron';
import { resolve, join } from 'path';
import { platform } from 'os';

import { ViewManager } from './view-manager';
import { getPath } from '~/shared/utils/paths';
import { existsSync, readFileSync, writeFileSync, appendFile } from 'fs';
import store from '~/renderer/app/store';
import console = require('console');
const { setup: setupPushReceiver } = require('electron-push-receiver');

export class AppWindow extends BrowserWindow {
  public viewManager: ViewManager = new ViewManager();
  
  constructor() {
    super({
      frame: false,
      minWidth: 400,
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
      },
      icon: resolve(app.getAppPath(), '/icon.png'),
    });

    app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar')
    app.commandLine.appendSwitch('auto-detect', 'false')
    app.commandLine.appendSwitch('no-proxy-server')

    let pluginName
    switch (process.platform) {
      case 'win32':
        pluginName = 'pepflashplayer.dll'
        break
      case 'darwin':
        pluginName = 'PepperFlashPlayer.plugin'
        break
      case 'linux':
        pluginName = 'libpepflashplayer.so'
        break
    }

    // Adobe Flash Player will be deprecated January 2020
    app.commandLine.appendSwitch('ppapi-flash-path', join(__dirname, pluginName))

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
      appendFile(errorLogPath, `// Error log effective of 2.1.0, ${time}. Running ${platform()}, started main app.\n`, function(err) {

      });
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

    // systemPreferences.on('accent-color-changed', (event: any, newColor: string) => {
    //   console.log(newColor)
    // });

    // Update window bounds on resize and on move when window is not maximized.
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

    if(this.webContents.getURL().split("https://dot.ender.site/api/")[0] != `https://dot.ender.site/api/`) {
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

    // Save current window state to file.
    this.on('close', () => {
      windowState.maximized = this.isMaximized();
      windowState.fullscreen = this.isFullScreen();
      writeFileSync(windowDataPath, JSON.stringify(windowState));
    });

    this.webContents.on('crashed', (event: any, crashed: boolean) => {
      this.loadURL(app.getAppPath() + 'static\\pages\\crash.html')
    });   

    if (process.env.ENV === 'dev') {
      this.setIcon(nativeImage.createFromPath(resolve(app.getAppPath() + '\\static\\icon.png')))
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

    if(process.env.ENV != "dev") {
      var oldConsole = console.log;
      console.log = function(msg: any) {
        appendFile(errorLogPath, `[${time}] [App] [DEBUG] ` + msg + '\n', function(err) {
          if(err) {
              return oldConsole(err);
          }
        });
      };
  
      var oldError = console.error;
      console.error = function(msg: any) {
        appendFile(errorLogPath, `[${time}] [App] [ERROR] ` + msg + '\n', function(err) {
          if(err) {
              return oldError(err);
          }
        });
      };
  
      var oldInfo = console.info;
      console.info = function(msg: any) {
        appendFile(errorLogPath, `[${time}] [App] [INFO] ` + msg + '\n', function(err) {
          if(err) {
              return oldInfo(err);
          }
        });
      };
  
      var oldWarn = console.warn;
      console.warn = function(msg: any) {
        appendFile(errorLogPath, `[${time}] [App] [WARN] ` + msg + '\n', function(err) {
          if(err) {
              return oldWarn(err);
          }
        });
      };
    }

  }
}

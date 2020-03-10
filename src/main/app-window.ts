import {
  BrowserWindow,
  app,
  nativeImage,
  session,
  ipcRenderer,
} from 'electron';

import { resolve } from 'path';
import { platform } from 'os';

import { ViewManager } from './view-manager';
import console = require('console');
import colors from 'colors';

import { MenuDialog } from './dialogs/menu';
import { PrintDialog } from './dialogs/print';
import { AlertDialog } from './dialogs/alert';
import { SearchDialog } from './dialogs/search';
import { PermissionsDialog } from './dialogs/permissions';
import { QuickMenuDialog } from './dialogs/quickmenu';

import { startMessagingService, runAdblockService } from './services';
import { windowsManager } from '.';
import { defaultTabOptions } from '~/renderer/views/app/constants';
import { Dialog } from './dialogs/dialog';

const showSearchOnStartup = (window: AppWindow) => {
  const { search } = window.dialogs;

  const url = "";
  const tabId = 0;

  search.show({
    url,
    tabId
  });

  search.webContents.focus()
}

interface IDialogs {
  search?: SearchDialog;

  menu?: MenuDialog;
  print?: PrintDialog;

  alert?: AlertDialog;
  permissions?: PermissionsDialog;
  
  [key: string]: Dialog;
}

export class AppWindow extends BrowserWindow {
  public viewManager: ViewManager = new ViewManager();
  public dialogs: IDialogs = {
    search: new SearchDialog(this)
  }

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
        webSecurity: false,
        enableRemoteModule: true
      },
    });

    process.traceDeprecation = true;

    startMessagingService(this);

    this.setBackgroundColor('#fff');

    app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');
    app.commandLine.appendSwitch('--enable-transparent-visuals');
    app.commandLine.appendSwitch('auto-detect', 'false');

    this.webContents.once('dom-ready', () => {
      this.dialogs.menu = new MenuDialog(this);
      this.dialogs.print = new PrintDialog(this);

      this.dialogs.alert = new AlertDialog(this);
      this.dialogs.permissions = new PermissionsDialog(this);

      showSearchOnStartup(this);
    });

    this.on('resize', () => {
      this.viewManager.fixBounds();
    });

    this.on('maximize', () => {
      this.viewManager.fixBounds();
      this.dialogs.search.rearrange();
      this.dialogs.alert.rearrange();
      this.dialogs.print.rearrange();
      this.dialogs.permissions.rearrange();
      this.dialogs.menu.hide()
    });

    this.on('unmaximize', () => {
      this.viewManager.fixBounds();
      this.dialogs.search.rearrange();
      this.dialogs.alert.rearrange();
      this.dialogs.print.rearrange();
      this.dialogs.permissions.rearrange();
      this.dialogs.menu.hide()
    });

    this.on('resize', () => {
      this.dialogs.menu.hide();
      this.viewManager.fixBounds();
      this.dialogs.permissions.hide();
      this.dialogs.alert.rearrange();
      this.dialogs.print.rearrange();
      this.dialogs.search.hide();
    });

    this.on('move', () => {
      this.dialogs.menu.hide();
      this.viewManager.fixBounds();
      this.dialogs.permissions.hide();
      this.dialogs.alert.rearrange();
      this.dialogs.print.rearrange();
      this.dialogs.search.hide();
    });

    const resize = () => {
      this.viewManager.fixBounds();
      this.webContents.send('tabs-resize');
      this.dialogs.permissions.hide();
      this.dialogs.alert.rearrange();
      this.dialogs.print.rearrange();
      this.dialogs.search.hide();
    };

    this.on('maximize', resize);
    this.on('restore', resize);
    this.on('unmaximize', resize);

    process.on('uncaughtException', error => {
      console.log(`${colors.blue.bold('Exception')}`, error);
    });

    if (process.env.ENV == 'dev') {
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

    this.once('ready-to-show', async () => {
      this.show();
      runAdblockService(session.fromPartition("persist:view"));

      console.log(`${colors.blue.bold('Performance')} Loaded application in ${Date.now() - windowsManager.performanceStart}ms`);

      this.focus()
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

import {
  BrowserWindow,
  app,
  nativeImage,
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

import { startMessagingService } from './services';
import { windowsManager } from '.';

export class AppWindow extends BrowserWindow {
  public viewManager: ViewManager = new ViewManager();
  public permissions: PermissionsDialog = new PermissionsDialog(this);
  public menu: MenuDialog = new MenuDialog(this);
  public search: SearchDialog = new SearchDialog(this);
  public print: PrintDialog = new PrintDialog(this);
  public alert: AlertDialog = new AlertDialog(this);
  public quickMenu: QuickMenuDialog = new QuickMenuDialog(this);

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

    this.on('resize', () => {
      this.viewManager.fixBounds();
      this.search.rearrange();
      this.permissions.hide();
      this.alert.rearrange();
      this.print.rearrange();
      this.menu.hide()
    });

    this.on('move', () => {
      this.search.rearrange();
      this.permissions.hide();
      this.alert.rearrange();
      this.print.rearrange();
      this.menu.rearrange();
    });

    this.on('maximize', () => {
      this.webContents.send('window-state', 'maximize');
      this.viewManager.fixBounds();
      this.search.rearrange();
      this.alert.rearrange();
      this.print.rearrange();
      this.permissions.rearrange();
      this.menu.hide()
    });

    this.on('unmaximize', () => {
      this.webContents.send('window-state', 'minimize');
      this.viewManager.fixBounds();
      this.search.rearrange();
      this.alert.rearrange();
      this.print.rearrange();
      this.permissions.rearrange();
      this.menu.hide()
    });

    this.on('resize', () => {
      this.menu.hide();
      this.viewManager.fixBounds();
      this.permissions.hide();
      this.alert.rearrange();
      this.print.rearrange();
      this.search.hide();
    });

    this.on('move', () => {
      this.menu.hide();
      this.viewManager.fixBounds();
      this.permissions.hide();
      this.alert.rearrange();
      this.print.rearrange();
      this.search.hide();
    });

    const resize = () => {
      this.viewManager.fixBounds();
      this.webContents.send('tabs-resize');
      this.permissions.hide();
      this.alert.rearrange();
      this.print.rearrange();
      this.search.hide();
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

      console.log(`${colors.blue.bold('Performance')} Loaded application in ${Date.now() - windowsManager.performanceStart}ms`);
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

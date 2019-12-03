import {
  ipcMain,
  app,
  session,
  BrowserWindow,
  IpcMainEvent,
} from 'electron';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { AppWindow } from './app-window';
import { autoUpdater } from 'electron-updater';

import { registerProtocols } from './protocols';
import { runWebRequestService, loadFilters } from './services/web-request';
import {
  existsSync,
  writeFileSync,
} from 'fs';
import { getPath } from '../shared/utils/paths';
import { Settings } from '../renderer/views/app/models/settings';
import { DotOptions } from '../renderer/views/app/models/dotoptions';
import { makeId } from '../shared/utils/string';
import { LocationBar } from './location-bar';
import console = require('console');
import * as isDev from 'electron-is-dev';
import { Tab } from '../renderer/views/app/models';
const modal = require('electron-modal');
const json = require('edit-json-file');

ipcMain.setMaxListeners(0);

app.setPath('userData', resolve(homedir(), 'dot'));

export let appWindow: AppWindow;

registerProtocols();

app.setAsDefaultProtocolClient('http');
app.setAsDefaultProtocolClient('https');

// Check for settings
try {
  if (existsSync(getPath('settings.json'))) {
  }
} catch (e) {
  writeFileSync(
    getPath('settings.json'),
    JSON.stringify({
      dialType: 'top-sites',
    } as Settings),
  );
}

// Check for dot-options
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

try {
  if (existsSync(getPath('tab-groups.json'))) {
  }
} catch (e) {
  writeFileSync(
    getPath('tab-groups.json'),
    JSON.stringify({
      'tab-groups': {},
    }),
  );
}

app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar');
app.commandLine.appendSwitch('--enable-transparent-visuals');
// Adds the sexy scrollbar
app.commandLine.appendSwitch('auto-detect', 'false');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('ready', async () => {
  /**
   * Create the main process and location bar sub-process.
   */

  modal.setup();

  app.commandLine.appendSwitch(
    'widevine-cdm-path',
    `${process.cwd()}/components/winevinecdm/winevinecdm.dll`,
  );

  app.commandLine.appendSwitch('widevine-cdm-version', '4.10.1503.4');

  appWindow = new AppWindow();

  /**
    
    * If the application is initiated with a URL argument, set a property in the AppWindow for easier access.
    @example $ dot.exe "https://google.com"

  */
  if (process.argv[4]) {
    if (new URL(process.argv[4]).hostname) {
      setTimeout(() => {
        appWindow.webContents.send('url-arguments-applied', process.argv[4]);
        process.argv[4] = null;
      }, 9000);
    }
  }

  app.on('activate', () => {
    if (appWindow === null) {
      appWindow = new AppWindow();
    }
  });

  autoUpdater.on('update-downloaded', ({ version }) => {
    appWindow.webContents.send('update-available', version);
  });

  ipcMain.on('update-install', () => {
    autoUpdater.quitAndInstall();
  });

  ipcMain.on('open-omnibox', (event: IpcMainEvent, tab: Tab) => {
    appWindow.omnibox.open(tab);
  });

  ipcMain.on('get-settings-sync', e => {
    const settings = json(resolve(homedir()) + '/dot/dot-options.json');

    e.returnValue = settings.toObject();
  });

  ipcMain.on('dot-open-settings', e => {
    appWindow.webContents.send('open-settings');
  });

  ipcMain.on('bskmsg-test', (event: any, data: any) => {
    console.log('recieved some data', data);
  });

  ipcMain.on('show-dialog', (event: IpcMainEvent, dialog: string) => {
    appWindow[dialog].show();
  })

  ipcMain.on('hide-dialog', (event: IpcMainEvent, dialog: string) => {
    appWindow[dialog].hide()
  })

  app.on(
    'certificate-error',
    (event, webContents, link, error, certificate, callback) => {},
  );

  ipcMain.on('dev-tools-open', () => {
    appWindow.webContents.inspectElement(0, 0);

    if (appWindow.webContents.isDevToolsOpened()) {
      appWindow.webContents.devToolsWebContents.focus();
    }
  });

  ipcMain.on('update-check', () => {
    if (isDev == false) {
      autoUpdater.checkForUpdates();
    }
  });

  ipcMain.on('transport-settings-push', (event: any, data: any) => {
    console.log('transporting', data);
    appWindow.viewManager.newTabView().webContents.send('settings-push', data);
  });

  ipcMain.on('window-focus', () => {
    appWindow.webContents.focus();
  });

  ipcMain.on('set-downloads-loc', (path: any) => {
    appWindow.webContents.session.setDownloadPath(path);
  });

  const viewSession = session.fromPartition('persist:view');

  session
    .fromPartition('persist:view')
    .on('will-download', (event, item, webContents) => {
      const fileName = item.getFilename();
      const savePath = resolve(app.getPath('temp'), fileName);
      const id = makeId(32);

      item.setSavePath(savePath);

      appWindow.webContents.send('download-started', {
        fileName,
        receivedBytes: 0,
        totalBytes: item.getTotalBytes(),
        downloadedFrom: item.getURL(),
        savePath,
        id,
      });

      item.on('updated', (event, state) => {
        if (state === 'interrupted') {
        } else if (state === 'progressing') {
          if (item.isPaused()) {
          } else {
            appWindow.webContents.send('download-progress', {
              id,
              receivedBytes: item.getReceivedBytes(),
              downloadedFrom: item.getURL(),
            });
          }
        }
      });
      item.once('done', (event, state) => {
        if (state === 'completed') {
          appWindow.webContents.send('download-completed', id);
        } else {
        }
      });
    });

  viewSession.setPermissionRequestHandler(
    async (webContents, permission, callback, details) => {
      try {
        if (new URL(webContents.getURL()).protocol == 'https:') {
          const response = await appWindow.permissionWindow.requestPermission(
            permission,
            webContents.getURL(),
            details,
          );
          callback(response);
        } else {
          await appWindow.permissionWindow.requestPermission(
            'http_permission',
            webContents.getURL(),
            details,
          );
        }
      } catch (e) {
        callback(false);
      }
    },
  );

  loadFilters();
  runWebRequestService(appWindow);
});

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

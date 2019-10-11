import {
  ipcMain,
  app,
  Menu,
  session,
  globalShortcut,
  Tray,
  BrowserWindow,
  screen,
  IpcMessageEvent,
} from 'electron';
import { resolve, extname, join } from 'path';
import { platform, homedir } from 'os';
import { AppWindow } from './app-window';
import { autoUpdater } from 'electron-updater';
import { loadExtensions } from './extensions';

import { registerProtocols } from './protocols';
import { runWebRequestService, loadFilters } from './services/web-request';
import {
  existsSync,
  writeFileSync,
  rename,
  promises,
  createWriteStream,
} from 'fs';
import { getPath } from '~/shared/utils/paths';
import { Settings } from '~/renderer/app/models/settings';
import { DotOptions } from '~/renderer/app/models/dotoptions';
import { makeId } from '~/shared/utils/string';
import store from '~/renderer/app/store';
import console = require('console');
import { get } from 'http';
const nativeImage = require('electron').nativeImage;
const modal = require('electron-modal');
const json = require('edit-json-file');
const LifeguardSession = require('lifeguard-api');

let file = json(resolve(homedir()) + '/dot/dot-options.json');

ipcMain.setMaxListeners(0);

app.setPath('userData', resolve(homedir(), 'dot'));

export let appWindow: AppWindow;
export let locationBar: LocationBar;

registerProtocols();

app.setAsDefaultProtocolClient('http');
app.setAsDefaultProtocolClient('https');

try {
  if (
    existsSync(getPath(app.getPath('userData') + '\\notification_sound.mp3'))
  ) {
  }
} catch (e) {
  const notifFile = createWriteStream(
    app.getPath('userData') + '\\notification_sound.mp3',
  );
  const request = get(
    `https://api.dotbrowser.me/api/v0/static/notification.mp3`,
    function(response: any) {
      response.pipe(notifFile);
    },
  );
}

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

import { LocationBar } from './location-bar';
import { PermissionDialog } from './permissions';
import { TOOLBAR_HEIGHT } from '~/renderer/app/constants';
import { Omnibox } from './essentials/omnibox';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('ready', async () => {
  /**
   * Create the main process and location bar sub-process.
   */

  const dir = `${app.getAppPath()}/extensions/developer`;
  console.log(dir);
  BrowserWindow.addDevToolsExtension(dir);

  modal.setup();

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

  ipcMain.on('open-omnibox', () => {
    appWindow.omnibox.open();
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

  app.on(
    'certificate-error',
    (event, webContents, link, error, certificate, callback) => {},
  );

  appWindow.webContents.on('devtools-opened', () => {
    if (appWindow.webContents.getURL().includes('file://') == true) {
      return;
    } else {
      appWindow.webContents.devToolsWebContents.executeJavaScript('');
    }
  });

  ipcMain.on('dev-tools-open', () => {
    appWindow.webContents.inspectElement(0, 0);

    if (appWindow.webContents.isDevToolsOpened()) {
      appWindow.webContents.devToolsWebContents.focus();
    }
  });

  ipcMain.on('update-check', () => {
    if (process.env.ENV !== 'dev') {
      autoUpdater.checkForUpdates();
    }
  });

  ipcMain.on('menu-view', (event: IpcMessageEvent, name: boolean) => {
    if (name == true) {
      appWindow.menu.showWindow();
    } else {
      appWindow.menu.hideWindow();
    }
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
          const response = await appWindow.permissionWindow.requestPermission(
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

  // session
  // .fromPartition('persist:view')
  // .setPermissionRequestHandler((webContents, permission, callback) => {
  //   if(new URL(webContents.getURL()).protocol == 'https:') {

  //     var permissionObj = {
  //       url: webContents.getURL(),
  //       permissionNode: permission
  //     }

  //     try {
  //       permissionWindow.webContents.send('permission', permissionObj);
  //       permissionWindow.setOpacity(1)
  //       permissionWindow.setIgnoreMouseEvents(false)

  //       // const cBounds: any = appWindow.getContentBounds();
  //       // permissionWindow.setBounds({
  //       //   x: cBounds.x,
  //       //   y: cBounds.y + TOOLBAR_HEIGHT,
  //       //   height: permissionWindow.getBounds().height,
  //       //   width: permissionWindow.getBounds().width
  //       // });

  //     } catch(e) {
  //       permissionWindow = new PermissionDialog();

  //       permissionWindow.webContents.on('dom-ready', () => {
  //         permissionWindow.webContents.send('permission', permissionObj);
  //         permissionWindow.setOpacity(1)
  //         permissionWindow.setIgnoreMouseEvents(false)

  //         // const cBounds: any = appWindow.getContentBounds();
  //         // permissionWindow.setBounds({
  //         //   x: cBounds.x,
  //         //   y: cBounds.y + TOOLBAR_HEIGHT,
  //         //   height: permissionWindow.getBounds().height,
  //         //   width: permissionWindow.getBounds().width
  //         // });

  //       })

  //     }
  //   }
  //   else {
  //     return callback(false)
  //   }
  // })

  /**
   * @todo Work on Extensions
   * @body electron-extensions doesn't seem to work with Electron 5.0, this is a priority.
   */
  // const extensions = new ExtensibleSession(viewSession);
  // extensions.addWindow(appWindow);

  // const extensionsPath = getPath('extensions');
  // const dirs = await promises.readdir(extensionsPath);

  // for (const dir of dirs) {
  //   const extension = await extensions.loadExtension(
  //     resolve(extensionsPath, dir),
  //   );
  //   extension.backgroundPage.webContents.openDevTools();
  // }

  loadFilters();
  // loadExtensions();
  runWebRequestService(appWindow);

  // extensionsMain.setSession(viewSession);

  // const extensionsPath = getPath('extensions');

  // const dirs = await promises.readdir(extensionsPath);

  // for (const dir of dirs) {
  //   extensionsMain.load(resolve(extensionsPath, dir));
  // }
});

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

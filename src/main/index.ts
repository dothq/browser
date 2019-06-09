import { ipcMain, app, Menu, session, globalShortcut, Tray } from 'electron';
import { resolve, extname } from 'path';
import { platform, homedir } from 'os';
import { AppWindow } from './app-window';
import { autoUpdater } from 'electron-updater';
import { loadExtensions } from './extensions';
import { registerProtocols } from './protocols';
import { runWebRequestService, loadFilters } from './services/web-request';
import { existsSync, writeFileSync, rename, promises, createWriteStream } from 'fs';
import { getPath } from '~/shared/utils/paths';
import { Settings } from '~/renderer/app/models/settings';
import { DotOptions } from '~/renderer/app/models/dotoptions';
import { makeId } from '~/shared/utils/string';
import store from '~/renderer/app/store'
import console = require('console');
import { get } from 'http';
const nativeImage = require("electron").nativeImage;
const modal = require('electron-modal');
const editJsonFile = require("edit-json-file");

let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

ipcMain.setMaxListeners(0);

app.setPath('userData', resolve(homedir(), 'dot'));

export let appWindow: AppWindow;

registerProtocols();

try {
  if (existsSync(getPath(app.getPath("userData") + "\\notification_sound.mp3"))) {
    console.log("[SettingsStore] Notification sound exists.")
  }
}
catch (e) {
  const notifFile = createWriteStream(app.getPath("userData") + "\\notification_sound.mp3");
  const request = get("https://dot.ender.site/api/static/notification.mp3", function(response: any) {
    response.pipe(notifFile);
  });
}

// Check for settings
try {
  if (existsSync(getPath('settings.json'))) { console.log("[SettingsStore] Checked for settings.json, exists.") }
}
catch (e) {
  console.log(e)
  writeFileSync(
    getPath('settings.json'),
    JSON.stringify({
      dialType: 'top-sites'
    } as Settings),
  );
}

// Check for dot-options
try {
  if (existsSync(getPath('dot-options.json'))) { console.log("[OptionsStore] Checked for dot-options.json, exists.") }
}
catch (e) {
  console.log(e)
  writeFileSync(
    getPath('dot-options.json'),
    JSON.stringify({
      toggleDotLauncher: true,
      searchEngine: 'google'
    } as DotOptions),
  );
}


app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar')
// Adds the sexy scrollbar
app.commandLine.appendSwitch('auto-detect', 'false')
app.commandLine.appendSwitch('no-proxy-server')
// Fixes any proxy bypass settings

app.on('ready', async () => {

  modal.setup();

  session.defaultSession.setPermissionRequestHandler(
    (webContents, permission, callback) => {
      if (permission === 'notifications' || permission === 'fullscreen') {
        callback(true);
      } else {
        callback(false);
      }
    },
  );

  // const gotTheLock = app.requestSingleInstanceLock();

  // if (!gotTheLock) {
  //   app.quit();
  // } else {
  //   app.on('second-instance', (e, argv) => {
  //     if (appWindow) {
  //       if (appWindow.isMinimized()) appWindow.restore();
  //       appWindow.focus();
  
  //       if (process.env.ENV !== 'dev') {
  //         const path = argv[argv.length - 1];
  //         const ext = extname(path);
  
  //         if (ext === '.html') {
  //           appWindow.webContents.send('api-tabs-create', {
  //             url: `file:///${path}`,
  //             active: true,
  //           });
  //         }
  //       }
  //     }
  //   });
  // }

  app.on('activate', () => {
    if (appWindow === null) {
      appWindow = new AppWindow();
    }
  });

  appWindow = new AppWindow();

  autoUpdater.on('update-downloaded', ({ version }) => {
    appWindow.webContents.send('update-available', version);
  });

  ipcMain.on('update-install', () => {
    autoUpdater.quitAndInstall();
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

  ipcMain.on('window-focus', () => {
    appWindow.webContents.focus();
  });

  const viewSession = session.fromPartition('persist:view');

  session
    .fromPartition('persist:view')
    .on('will-download', (event, item, webContents) => {
      const fileName = item.getFilename();
      const savePath = resolve(app.getPath("temp"), fileName);
      const id = makeId(32);

      item.setSavePath(savePath);

      appWindow.webContents.send('download-started', {
        fileName,
        receivedBytes: 0,
        totalBytes: item.getTotalBytes(),
        savePath,
        id,
      });

      item.on('updated', (event, state) => {
        if (state === 'interrupted') {
          console.log('Download is interrupted but can be resumed');
        } else if (state === 'progressing') {
          if (item.isPaused()) {
            console.log('Download is paused');
          } else {
            appWindow.webContents.send('download-progress', {
              id,
              receivedBytes: item.getReceivedBytes(),
            });
          }
        }
      });
      item.once('done', (event, state) => {
        if (state === 'completed') {
          appWindow.webContents.send('download-completed', id);
        } else {
          console.log(`Download failed: ${state}`);
        }
      });
    });

  loadFilters();
  loadExtensions();
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

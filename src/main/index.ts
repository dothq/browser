import { ipcMain, app, Menu, session, globalShortcut, Tray } from 'electron';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { AppWindow } from './app-window';
import { autoUpdater } from 'electron-updater';
import { loadExtensions } from './extensions';
import { registerProtocols } from './protocols';
import { runWebRequestService, loadFilters } from './services/web-request';
import { existsSync, writeFileSync } from 'fs';
import { getPath } from '~/shared/utils/paths';
import { Settings } from '~/renderer/app/models/settings';
import { DotOptions } from '~/renderer/app/models/dotoptions';
import { makeId } from '~/shared/utils/string';
import store from '~/renderer/app/store'
import console = require('console');
const nativeImage = require("electron").nativeImage;
const modal = require('electron-modal');

ipcMain.setMaxListeners(0);

app.setPath('userData', resolve(homedir(), 'dot'));

export let appWindow: AppWindow;

registerProtocols();

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
      searchEngine: 'google',
      setupDot: false
    } as DotOptions),
  );
}


app.commandLine.appendSwitch('enable-features', 'OverlayScrollbar')
// Adds the sexy scrollbar
app.commandLine.appendSwitch('auto-detect', 'false')
app.commandLine.appendSwitch('no-proxy-server')
// Fixes any proxy bypass settings

app.on('ready', () => {

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

  session
    .fromPartition('persist:view')
    .on('will-download', (event, item, webContents) => {
      const fileName = item.getFilename();
      const savePath = resolve(app.getPath('downloads'), fileName);
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
});

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

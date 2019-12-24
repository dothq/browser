import {
  ipcMain,
  app,
  session,
} from 'electron';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { AppWindow } from './app-window';
import { autoUpdater } from 'electron-updater';

import { registerProtocol } from './protocols';
import { runWebRequestService, loadFilters } from './services/web-request';
import { makeId } from '../shared/utils/string';
import { startMessagingService } from './services/messaging';

ipcMain.setMaxListeners(0);

if(platform() == 'darwin') {
  app.setPath('userData', resolve(homedir(), 'Library', 'Preferences'));
} else if(platform() == 'win32') {
  app.setPath('userData', resolve(homedir(), 'AppData', 'Roaming'));
} else {
  app.setPath('userData', resolve(homedir(), '.local', 'share'));
}

export let appWindow: AppWindow;

app.setAsDefaultProtocolClient('http');
app.setAsDefaultProtocolClient('https');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('ready', async () => {
  appWindow = new AppWindow();

  registerProtocol(session.fromPartition('persist:view'));
  startMessagingService(appWindow);

  app.on('activate', () => {
    if (appWindow === null) {
      appWindow = new AppWindow();
    }
  });

  autoUpdater.on('update-downloaded', ({ version }) => {
    appWindow.webContents.send('update-available', version);
  });

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

  let viewSession: Electron.Session = session.fromPartition('persist:view')

  viewSession.setPermissionRequestHandler(
    async (webContents, permission, callback, details) => {

      try {

        const parsed = new URL(webContents.getURL());

        if (
          parsed.protocol == 'https:'
        ) {
          const response = await appWindow.permissionWindow.requestPermission(
            permission,
            webContents.getURL(),
            details,
          );
          callback(response);
        } else {
          if(parsed.protocol != 'dot:') {
            await appWindow.permissionWindow.requestPermission(
              'http_permission',
              webContents.getURL(),
              details,
            );
          } else {
            callback(true)
          }
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

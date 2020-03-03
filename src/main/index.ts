import {
  ipcMain,
  app,
} from 'electron';
import { resolve } from 'path';
import { platform, homedir } from 'os';

import * as Sentry from '@sentry/electron';

import { WindowsManager } from './windows-manager';

process.throwDeprecation = true;

ipcMain.setMaxListeners(0);
app.allowRendererProcessReuse = true;

export const windowsManager = new WindowsManager();

app.setAsDefaultProtocolClient('http');
app.setAsDefaultProtocolClient('https');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

Sentry.init({ dsn: 'https://cad9bc83aced486abc1324821d166af9@sentry.io/3378655' });

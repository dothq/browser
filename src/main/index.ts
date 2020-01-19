import {
  ipcMain,
  app,
} from 'electron';
import { resolve } from 'path';
import { platform, homedir } from 'os';

import { WindowsManager } from './windows-manager';

ipcMain.setMaxListeners(0);

export const windowsManager = new WindowsManager();

app.setAsDefaultProtocolClient('http');
app.setAsDefaultProtocolClient('https');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

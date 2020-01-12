import {
  ipcMain,
  app,
} from 'electron';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { AppWindow } from './app-window';

import { WindowsManager } from './windows-manager';

ipcMain.setMaxListeners(0);

if(platform() == 'darwin') {
  app.setPath('userData', resolve(homedir(), 'Library', 'Application Support'));
} else if(platform() == 'win32') {
  app.setPath('userData', resolve(homedir(), 'AppData', 'Roaming'));
} else {
  app.setPath('userData', resolve(homedir(), '.local', 'share'));
}

export const windowsManager = new WindowsManager();

app.setAsDefaultProtocolClient('http');
app.setAsDefaultProtocolClient('https');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

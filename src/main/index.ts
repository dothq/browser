import {
  ipcMain,
  app,
  session,
} from 'electron';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { AppWindow } from './app-window';

import { registerProtocol } from './protocols';
import { 
  startSessionManager, 
  runWebRequestService, 
  loadFilters,  
  preferencesFirstSetup
} from './services';

ipcMain.setMaxListeners(0);

if(platform() == 'darwin') {
  app.setPath('userData', resolve(homedir(), 'Library', 'Application Support'));
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

  let viewSession = session.fromPartition('persist:view');

  registerProtocol(viewSession);
  startSessionManager(viewSession);

  console.log(appWindow.preferencesExist)

  if(appWindow.preferencesExist == false) {
    preferencesFirstSetup();
  }

  app.on('activate', () => {
    if (appWindow === null) {
      appWindow = new AppWindow();
    }
  });

  loadFilters();
  runWebRequestService(appWindow);
});

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

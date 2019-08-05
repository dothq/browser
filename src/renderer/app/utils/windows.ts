import { remote } from 'electron';
import store from '../store';
import { resolve } from 'path';
import console = require('console');
var modal = require('electron-modal');

async function areYouSure(tabSize: number) {
  var ars = await modal.open(resolve(remote.app.getAppPath() + '\\static\\pages\\util\\quit-dot.html'), {
    width: 504,
    height: 179,
    resizable: true,
    center: true,
    title: 'Quit Dot',
    maximizable: false,
    modal: true,
    minimizable: false,
    movable: false,
    icon: resolve(remote.app.getAppPath() + '/static/app-icons/tray-close.png'),
    titleBarStyle: 'hiddenInset',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    },
    frame: true
  }, { tabs: tabSize } )

  ars.show()

  remote.webContents.getFocusedWebContents().openDevTools()

  ars.on('window-close', () => {
    ars.hide()
    getCurrentWindow().close();
  })
}

export const getCurrentWindow = () => remote.getCurrentWindow();

export const closeWindow = () => {
  if(store.tabs.list.length == 0) {
    getCurrentWindow().close();
  }
  else {
    areYouSure(store.tabs.list.length)
  }
};

export const minimizeWindow = () => {
  getCurrentWindow().minimize();
};

export const maximizeWindow = () => {
  const currentWindow = getCurrentWindow();

  if (currentWindow.isMaximized()) {
    currentWindow.unmaximize();
  } else {
    currentWindow.maximize();
  }

  isMaximized()

};

export const isMaximized = () => {
  const currentWindow = getCurrentWindow();

  if (currentWindow.isMaximized()) {
    store.isMaximized = false;
  } else {
    store.isMaximized = true;
  }

};

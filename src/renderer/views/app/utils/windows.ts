import { remote, ipcRenderer } from 'electron';
import store from '../store';
import { resolve } from 'path';

export const getCurrentWindow = () => remote.getCurrentWindow();

export const closeWindow = () => {
  ipcRenderer.send('window-close');
};

export const minimizeWindow = () => {
  ipcRenderer.send('window-minimize');
};

export const maximizeWindow = () => {
  const currentWindow = getCurrentWindow();

  if (currentWindow.isMaximized()) {
    ipcRenderer.send('window-restore');
  } else {
    ipcRenderer.send('window-maximize');
  }

  isMaximized();
};

export const isMaximized = () => {
  const currentWindow = getCurrentWindow();

  if (currentWindow.isMaximized()) {
    store.isMaximized = false;
  } else {
    store.isMaximized = true;
  }
};

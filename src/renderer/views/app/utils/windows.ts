import { remote } from 'electron';
import store from '../store';
import { resolve } from 'path';

export const getCurrentWindow = () => remote.getCurrentWindow();

export const closeWindow = () => {
  getCurrentWindow().close();
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

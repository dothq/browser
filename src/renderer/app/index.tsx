import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';
import { fonts } from '../constants';
import store from './store';
import { ipcRenderer } from 'electron';
import { Settings } from 'react-native';
var Mousetrap = require('mousetrap');
import { AppWindow } from './app-window';
import { resolve } from 'path';
import console = require('console');

const { remote } = require('electron')
const { Menu, MenuItem, Tray, app } = remote

var tray = new Tray(resolve(app.getAppPath(), 'static/app-icons/icon.png'))
const contextMenu = Menu.buildFromTemplate([
  { label: `Dot ${app.getVersion()}`, type: 'normal', enabled: false, icon: resolve(app.getAppPath(), 'static/app-icons/tray-icon.png') },
  { type: 'separator' },
  { label: 'History', type: 'normal', click() {
      ipcRenderer.send('window-focus');
      store.overlay.visible = true;
      store.overlay.currentContent = "history";
      store.overlay.scrollRef.current.scrollTop = 0;   
  } },
  { label: 'Bookmarks', type: 'normal', click() {
    ipcRenderer.send('window-focus');
    store.overlay.visible = true;
    store.overlay.currentContent = "bookmarks";
    store.overlay.scrollRef.current.scrollTop = 0;   
  } },
  { label: 'Settings', type: 'normal', click() {
    ipcRenderer.send('window-focus');
    store.overlay.visible = true;
    store.overlay.currentContent = "settings";
    store.overlay.scrollRef.current.scrollTop = 0;   
  } },
  { type: 'separator' },
  { label: `Quit Dot ${app.getVersion()}`, type: 'normal', role: 'quit', icon: resolve(app.getAppPath(), 'static/app-icons/tray-close.png') },
])
tray.setToolTip(`Dot ${app.getVersion()}`)
tray.on('click', () => {
  ipcRenderer.send('window-focus');
}) 

ipcRenderer.setMaxListeners(0);

const styleElement = document.createElement('style');

ipcRenderer.on('dev-tools-opened', () => {
  appWindow.webContents.openDevTools();
});

var reload = () => {
  store.tabs.selectedTab.callViewMethod('webContents.reload');
}

var openLauncher = () => {
  store.overlay.visible = true;
}

var history = () => {
  store.overlay.visible = true;
  store.overlay.currentContent = "history";
  store.overlay.scrollRef.current.scrollTop = 0;
}

var bookmarks = () => {
  store.overlay.visible = true;
  store.overlay.currentContent = "bookmarks";
  store.overlay.scrollRef.current.scrollTop = 0;
}

var settings = () => {
  store.overlay.visible = true;
  store.overlay.currentContent = "settings";
  store.overlay.scrollRef.current.scrollTop = 0;
}

styleElement.textContent = `
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${fonts.robotoRegular}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(${fonts.robotoMedium}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url(${fonts.robotoLight}) format('woff2');
}
`;

document.head.appendChild(styleElement);

store.tabGroups.addGroup();

export let appWindow: AppWindow;

setInterval(function() {
  tray.setContextMenu(contextMenu)
}, 250);

Menu.setApplicationMenu(
  Menu.buildFromTemplate([
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' },
        { role: 'quit' },
        { role: 'reload', accelerator: 'Ctrl+Shift+Alt+R', click() { console.log("Reloading session...") } },
        {
          accelerator: 'Ctrl+F',
          label: 'Find in page',
          click() {
            appWindow.webContents.send('find');
          },
        },
        { 
          label: 'Reload Page',
          accelerator: 'F5',
          click() { 
            store.tabs.selectedTab.callViewMethod('webContents.reload'); 
          } 
        },
        { type: 'separator' },
        { 
          label: 'Launcher',
          accelerator: 'Ctrl+Space',
          click() { 
            store.overlay.visible = true;
          } 
        },
        { 
          label: 'History',
          accelerator: 'Ctrl+H',
          click() { 
            store.overlay.visible = true;
            store.overlay.currentContent = "history";
            store.overlay.scrollRef.current.scrollTop = 0;
          } 
        },   
        { 
          label: 'Bookmarks',
          accelerator: 'Ctrl+B',
          click() { 
            store.overlay.visible = true;
            store.overlay.currentContent = "bookmarks";
            store.overlay.scrollRef.current.scrollTop = 0;
          } 
        },
        { 
          label: 'Settings',
          accelerator: 'Ctrl+Shift+P',
          click() { 
            store.overlay.visible = true;
            store.overlay.currentContent = "settings";
            store.overlay.scrollRef.current.scrollTop = 0;
          } 
        },
        { type: 'separator' },
        { 
          label: 'Zoom in',
          accelerator: 'Ctrl+=',
          click() { 
            store.tabs.selectedTab.zoomIn(store.tabs.selectedTab.zoomAmount)
          } 
        },        
        { 
          label: 'Zoom out',
          accelerator: 'Ctrl+-',
          click() { 
            store.tabs.selectedTab.zoomIn(store.tabs.selectedTab.zoomAmount)
          } 
        },        
        { 
          label: 'Dev Tools F12',
          accelerator: 'F12',
          click() { 
            remote.webContents.getFocusedWebContents().openDevTools();  
            
            if (remote.webContents.getFocusedWebContents().isDevToolsOpened()) {
              remote.webContents.getFocusedWebContents().devToolsWebContents.focus();
            }
          } 
        },   
      ],
    },
  ]),
);



ReactDOM.render(<App />, document.getElementById('app'));

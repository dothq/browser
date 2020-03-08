import * as React from 'react';
import { render } from 'react-dom';;

import App from './components/App';
import { fonts } from './constants/fonts';
import store from './store';
import { ipcRenderer, remote } from 'electron';
import { AppWindow } from '../../../main/app-window';
import { defaultTabOptions } from './constants';

import * as Sentry from '@sentry/electron';

ipcRenderer.setMaxListeners(0);

const styleElement = document.createElement('style');

ipcRenderer.on('dev-tools-opened', () => {
  appWindow.webContents.openDevTools({ mode: 'detach' });
});

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

export let appWindow: AppWindow;

remote.Menu.setApplicationMenu(
  remote.Menu.buildFromTemplate([
    {
      label: 'Edit',
      type: 'submenu',
      submenu: [
        { role: 'undo', label: 'Undo' },
        { role: 'redo', label: 'Redo' },
        { type: 'separator' },
        { role: 'cut', label: 'Cut' },
        { role: 'copy', label: 'Copy' },
        { role: 'paste', label: 'Paste' },
        { role: 'pasteandmatchstyle', label: 'Paste and match style' },
        { role: 'delete', label: 'Delete' },
        { role: 'selectall', label: 'Select all' },
        { role: 'quit', label: 'Quit app' },
        { role: 'reload', label: 'Reload', accelerator: 'CmdOrCtrl+Shift+Alt+R' },
        {
          accelerator: 'CmdOrCtrl+F',
          label: 'Find in page',
          click() {
            if(store.tabs.selectedTab) {
              store.tabs.selectedTab.findVisible = true;
            
              setTimeout(() => {
                store.tabs.selectedTab.findVisible = true;
              }, 200);
            }
          },
        },
        {
          accelerator: 'CmdOrCtrl+P',
          label: 'Print',
          click() {
            ipcRenderer.send('open-print');
          },
        },
        { 
          label: 'Reload Page',
          accelerator: 'F5',
          click() { 
            if(store.tabs.selectedTab) {
              store.tabs.selectedTab.callViewMethod('webContents.reload'); 
            }
          } 
        },
        { 
          label: 'Reload Webpage',
          accelerator: 'CmdOrCtrl+R',
          click() { 
            if(store.tabs.selectedTab) {
              store.tabs.selectedTab.callViewMethod('webContents.reload'); 
            }
          } 
        },
        { 
          label: 'Close tab',
          accelerator: 'CmdOrCtrl+W',
          click() { 
            if(store.tabs.selectedTab) {
              if (store.tabs.selectedTab.loading) {
                store.tabs.selectedTab.callViewMethod('webContents.stop');
                store.tabs.selectedTab.close()
              }
              else {
                store.tabs.selectedTab.close()
              }
            }
            
          } 
        },
        { 
          label: 'New tab',
          accelerator: 'CmdOrCtrl+T',
          click() { 
            store.isHTMLFullscreen = false;
            store.isFullscreen = false;
          } 
        },
        { type: 'separator' },
        { 
          label: 'Back',
          accelerator: 'Alt+Left',
          click() { 
            if(store.tabs.selectedTab) {
              if(store.navigationState.canGoBack == true) {
                store.tabs.selectedTab.callViewMethod('webContents.goBack');
              }
            }
          } 
        },
        { 
          label: 'Forward',
          accelerator: 'Alt+Right',
          click() { 
            if(store.tabs.selectedTab) {
              if(store.navigationState.canGoForward == true) {
                store.tabs.selectedTab.callViewMethod('webContents.goForward');
              }
            }
          } 
        },
        { type: 'separator' },
        { 
          label: 'Open Browser Developer Tools',
          accelerator: 'CmdOrCtrl+Shift+U+I',
          click() { 
            ipcRenderer.send('app-open-dev-tools');
          } 
        },
      ],
    },
  ]),
);

store.tabGroups.addGroup();
store.tabs.addTab(defaultTabOptions);

Sentry.init({ dsn: 'https://cad9bc83aced486abc1324821d166af9@sentry.io/3378655' });

render(<App />, document.getElementById('app'));

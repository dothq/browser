import * as React from 'react';
import { render } from 'react-dom';;

import App from './components/App';
import { fonts } from './constants/fonts';
import store from './store';
import { ipcRenderer, remote } from 'electron';
import { AppWindow } from '../../../main/app-window';
import { defaultTabOptions, NEWTAB_URL } from './constants';

import * as Sentry from '@sentry/electron';
import { zoom } from '~/shared/events';

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
      label: "File",
      type: 'submenu',
      submenu: [
        { 
          label: 'New tab',
          accelerator: 'CmdOrCtrl+T',
          click() { 
            store.isHTMLFullscreen = false;
            store.isFullscreen = false;
            
            const url = NEWTAB_URL;
            store.tabs.addTab({ url, active: true });
          } 
        },
        { 
          label: 'Re-open closed tab',
          accelerator: 'CmdOrCtrl+Shift+T',
          click() { 
            if(store.tabs) {
              var url = store.tabs.lastUrl[store.tabs.lastUrl.length - 1];
              if (url != '') {
                store.tabs.addTab({ url, active: true });
                store.tabs.lastUrl.splice(-1, 1);
              }
            }
          } 
        },
        { type: 'separator' },
        { 
          label: 'Close Window',
          accelerator: 'CmdOrCtrl+Shift+W',
          click() { 
            process.exit(0)
          } 
        },
        { 
          label: 'Close Tab',
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
        { type: 'separator' },
        { 
          label: 'Print',
          accelerator: 'CmdOrCtrl+P',
          click() { 
            ipcRenderer.send("show-alert", "alert", "Print is disabled right now. However, you can expect it to return soon!")
          } 
        },
        { role: 'reload', label: 'Reload', accelerator: 'CmdOrCtrl+Shift+Alt+R' },
      ]
    },
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
        { role: 'pasteandmatchstyle', label: 'Paste and Match Style' },
        { role: 'delete', label: 'Delete' },
        { role: 'selectall', label: 'Select all' },
        { type: 'separator' },
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
      ],
    },
    {
      label: "View",
      type: "submenu",
      submenu: [
        {
          accelerator: 'CmdOrCtrl+.',
          label: 'Stop',
          enabled: store.tabs.selectedTab ? store.tabs.selectedTab.loading : false,
          click() {
            store.tabs.selectedTab.callViewMethod('webContents.stop');
          },
        },
        { 
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click() { 
            if(store.tabs.selectedTab) {
              store.tabs.selectedTab.callViewMethod('webContents.reload'); 
            }
          } 
        },
        { 
          label: 'Reload',
          accelerator: 'F5',
          visible: false,
          click() { 
            if(store.tabs.selectedTab) {
              store.tabs.selectedTab.callViewMethod('webContents.reload'); 
            }
          } 
        },
        { type: 'separator' },
        { 
          label: 'Zoom In',
          accelerator: 'CmdOrCtrl+=',
          click() { 
            ipcRenderer.send("set-zoom", "in")
          } 
        },
        { 
          label: 'Zoom Out',
          accelerator: 'CmdOrCtrl+-',
          click() { 
            ipcRenderer.send("set-zoom", "out")
          } 
        },
      ]
    }
  ]),
);

store.tabGroups.addGroup();
store.tabs.addTab(defaultTabOptions);

Sentry.init({ dsn: 'https://cad9bc83aced486abc1324821d166af9@sentry.io/3378655' });

render(<App />, document.getElementById('app'));

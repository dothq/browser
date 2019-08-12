import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';
import { fonts } from '../constants';
import store from './store';
import { ipcRenderer, dialog, ipcMain } from 'electron';
import { Settings } from 'react-native';
var Mousetrap = require('mousetrap');
import { AppWindow } from './app-window';
import { resolve, join } from 'path';
import console = require('console');
import { platform, homedir } from 'os';
import { icons } from './constants/icons';
var modal = require('electron-modal');
const json = require("edit-json-file");
const opts = json(resolve(homedir() + '/dot/dot-options.json'));

const { remote } = require('electron')
const { Menu, MenuItem, Tray, app } = remote

var tray = new Tray(resolve(app.getAppPath(), 'static/tray-icon.png'))
const contextMenu = Menu.buildFromTemplate([
  { label: store.locale.lang.standard[0].dot_with_version.replace(/{appVersion}/g, app.getVersion()), type: 'normal', enabled: false, icon: resolve(app.getAppPath(), 'static/app-icons/tray-icon.png') },
  { type: 'separator' },
  { label: store.locale.lang.history[0].title, type: 'normal', click() {
      ipcRenderer.send('window-focus');
      store.overlay.visible = true;
      store.overlay.currentContent = "history";
      store.overlay.scrollRef.current.scrollTop = 0;   
  } },
  { label: store.locale.lang.bookmarks[0].title, type: 'normal', click() {
    ipcRenderer.send('window-focus');
    store.overlay.visible = true;
    store.overlay.currentContent = "bookmarks";
    store.overlay.scrollRef.current.scrollTop = 0;   
  } },
  { label: store.locale.lang.settings[0].title, type: 'normal', click() {
    ipcRenderer.send('window-focus');
    store.overlay.visible = true;
    store.overlay.currentContent = "settings";
    store.overlay.scrollRef.current.scrollTop = 0;   
  } },
  { type: 'separator' },
  { label: store.locale.lang.settings[0].my_profile[0].title, type: 'normal', click() {
    ipcRenderer.send('window-focus');
    store.overlay.visible = true;
    store.overlay.currentContent = "settings";
    store.options.currentDisplay = "profile";
    store.overlay.scrollRef.current.scrollTop = 0;   
  } },
  { label: store.locale.lang.settings[0].my_profile[0].sign_out_btn, type: 'normal', click() {
    ipcRenderer.send('window-focus');
    store.overlay.visible = true;
    store.user.loggedin = false;
    store.user.username = "Guest";
    store.user.avatar = icons.user
    store.user.email = null;
    localStorage.removeItem("dot_footprint")
    store.user.menuVisible = false;
  } },
  { type: 'separator' },
  { label: store.locale.lang.standard[0].quit_dot_with_version.replace(/{appVersion}/g, app.getVersion()), type: 'normal', role: 'quit', icon: resolve(app.getAppPath(), 'static/app-icons/tray-close.png') },
])

tray.setToolTip(store.locale.lang.standard[0].dot_with_version.replace(/{appVersion}/g, app.getVersion()))
tray.on('click', () => {
  ipcRenderer.send('window-focus');
}) 

setInterval(function() {
  tray.setContextMenu(contextMenu)
}, 250)

ipcRenderer.setMaxListeners(0);

const styleElement = document.createElement('style');

ipcRenderer.on('dev-tools-opened', () => {
  appWindow.webContents.openDevTools({ mode: 'detach' });
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

export let appWindow: AppWindow;

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
        { role: 'reload', accelerator: 'CmdOrCtrl+Shift+Alt+R' },
        {
          accelerator: 'CmdOrCtrl+F',
          label: 'Find in page',
          click() {
            if(store.tabs.selectedTab) {
              store.overlay.visible = false;

              store.tabs.selectedTab.findVisible = true;
            
              setTimeout(() => {
                store.tabs.selectedTab.findVisible = true;
              }, 200);
            }
          },
        },
        {
          accelerator: 'CmdOrCtrl+P',
          label: 'Print webpage (Native)',
          click() {
            remote.webContents.getFocusedWebContents().print()
          },
        },
        {
          accelerator: 'CmdOrCtrl+S',
          label: 'Save page',
          click() {
            if(store.tabs.selectedTab) {
              remote.dialog.showSaveDialog(appWindow, { filters: [ { name: 'HTML file', extensions: ['html'] } ], }, (callback) => {
                remote.webContents.getFocusedWebContents().savePage(callback, 'HTMLComplete', (error) => {
                  if (!error) 
                })
              })
            }
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
            store.overlay.isNewTab = true;
            store.overlay.visible = true;
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
          label: 'Launcher',
          accelerator: 'CmdOrCtrl+Space',
          click() { 
            store.overlay.visible = true;
          } 
        },
        { 
          label: 'History',
          accelerator: 'CmdOrCtrl+H',
          click() { 
            store.overlay.visible = true;
            store.overlay.currentContent = "history";
            store.overlay.scrollRef.current.scrollTop = 0;
          } 
        },   
        { 
          label: 'Bookmarks',
          accelerator: 'CmdOrCtrl+B',
          click() { 
            store.overlay.visible = true;
            store.overlay.currentContent = "bookmarks";
            store.overlay.scrollRef.current.scrollTop = 0;
          } 
        },
        { 
          label: 'Settings',
          accelerator: 'CmdOrCtrl+Shift+P',
          click() { 
            store.overlay.visible = true;
            store.overlay.currentContent = "settings";
            store.overlay.scrollRef.current.scrollTop = 0;
          } 
        },
        { type: 'separator' },
        { 
          label: 'Dev Tools',
          accelerator: 'F12',
          click() { 

            openDeveloperTools()
            
          } 
        },   
        { 
          label: 'Task Manager',
          accelerator: 'Shift+Esc',
          async click() {
            tskManager()
          }
        }, 
      ],
    },
  ]),
);

export function openDeveloperTools() {
  if(remote.webContents.getFocusedWebContents().getURL() == "http://localhost:4444/app.html") {
    return;
  }

  if(remote.webContents.getFocusedWebContents().getURL() == join('file://', app.getAppPath(), 'build/app.html')) {
    return;
  }

  if(remote.webContents.getFocusedWebContents().getURL().includes("static/pages/") == true) {
    return;
  }

  if(remote.webContents.getFocusedWebContents().getURL().includes("dot://") == true) {
    return;
  }

  if(store.tabs.list.length != 0) {
    if(store.overlay.visible == false) {
    remote.webContents.getFocusedWebContents().openDevTools({ mode: 'detach' });
  
    if (remote.webContents.getFocusedWebContents().isDevToolsOpened()) {
      remote.webContents.getFocusedWebContents().devToolsWebContents.focus();
    }
    }
  }
}

export async function tskManager() {
  var data: any = [];

  remote.webContents.getAllWebContents().forEach(i => {

    var obj: any = {};
    obj.url = i.getURL();
    obj.task = i.getTitle();
    obj.id = i.id;

    data.push(obj);
    
  })

  var tm = await modal.open(resolve(app.getAppPath() + '\\static\\pages\\util\\tskmgr.html'), {
    width: 820,
    height: 300,
    resizable: true,
    center: true,
    title: 'Dot - Task Manager',
    icon: resolve(app.getAppPath() + '/static/app-icons/dev.png'),
    titleBarStyle: 'hiddenInset',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    },
    frame: true
  }, { data: data } )

  tm.show();

  tm.on('close', (id: number) => {
    remote.webContents.fromId(id).loadURL('about:blank')
  })

  tm.on('reload', () => {
    tskManager()
  })

}

if(opts.get("uiTheme") == 'dark') {
  document.getElementById("app").classList.add("theme-dark")
}
else {
  document.getElementById("app").classList.add("theme-light")
}

ReactDOM.render(<App />, document.getElementById('app'));

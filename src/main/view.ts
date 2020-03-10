import {
  BrowserView,
  BrowserWindow,
  shell,
  Menu,
  clipboard,
  nativeImage,
} from 'electron';
import { windowsManager } from '.';
import { resolve } from 'path';
import { ViewError } from '../renderer/views/app/models/error';
import { truncateStr } from '~/shared/mixins';

export class View extends BrowserView {
  public title: string = '';
  public url: string = '';
  public favicon: string = '';
  public tabId: number;
  public homeUrl: string = 'dot://newtab';
  public error: ViewError;

  constructor(id: number, url: string) {
    super({
      webPreferences: {
        sandbox: true,
        preload: `${process.cwd()}/build/preloads/view-preload.js`,
        nodeIntegration: false,
        additionalArguments: [`--tab-id=${id}`],
        contextIsolation: true,
        partition: 'persist:view',
        scrollBounce: true,
        plugins: true,
        javascript: true,
        enableRemoteModule: true
      },
    });

    this.homeUrl = url;
    this.tabId = id;

    this.setBackgroundColor("#fff");

    this.webContents.userAgent =
      this.webContents.userAgent
      .replace(/ dot\\?.([^\s]+)/g, '')
      .replace(/ Electron\\?.([^\s]+)/g, '')
      .replace(/Chrome\\?.([^\s]+)/g, `Chrome/${windowsManager.versions.chromium}`)

      this.webContents.on('context-menu', (e, params) => {
        let menuItems: Electron.MenuItemConstructorOptions[] = [];
  
        if (params.mediaType == 'video' || params.mediaType == 'audio') {
          menuItems = menuItems.concat([
            {
              label: 'Open ' + params.mediaType + ' in new tab',
              enabled: params.srcURL.includes('blob:') == false,
              click: () => {
                windowsManager.window.webContents.send('api-tabs-create', {
                  url: params.srcURL,
                  active: false,
                });
              },
            },
            {
              label: 'Save ' + params.mediaType,
              enabled: params.srcURL.includes('blob:') == false,
              click: () => {
                this.webContents.downloadURL(params.srcURL);
              },
            },
            {
              label: 'Copy link',
              enabled: params.srcURL.includes('blob:') == false,
              click: () => {
                clipboard.clear();
                clipboard.writeText(params.srcURL);
              },
            },
            {
              type: 'separator',
            },
          ]);
        }
  
        if (params.linkURL !== '') {
          menuItems = menuItems.concat([
            {
              label: 'Open link in new tab',
              icon: process.cwd() + '\\static\\app-icons\\add.png',
              click: () => {
                windowsManager.window.webContents.send('api-tabs-create', {
                  url: params.linkURL,
                  active: false,
                });
              },
            },
            {
              type: 'separator',
            },
            {
              label: 'Copy link address',
              click: () => {
                clipboard.clear();
                clipboard.writeText(params.linkURL);
              },
            },
            {
              type: 'separator',
            },
          ]);
        }
  
        if (params.hasImageContents) {
          menuItems = menuItems.concat([
            {
              label: 'Open image in new tab',
              click: () => {
                windowsManager.window.webContents.send('api-tabs-create', {
                  url: params.srcURL,
                  active: false,
                });
              },
            },
            {
              label: 'Save image',
              click: () => {
                this.webContents.downloadURL(params.srcURL);
              },
            },
            {
              label: 'Copy image',
              click: () => {
                const img = nativeImage.createFromDataURL(params.srcURL);
  
                clipboard.clear();
                clipboard.writeImage(img);
              },
            },
            {
              label: 'Copy image address',
              click: () => {
                clipboard.clear();
                clipboard.writeText(params.srcURL);
              },
            },
            {
              type: 'separator',
            },
          ]);
        }
  
        if (params.isEditable) {
          menuItems = menuItems.concat([
            {
              role: 'undo',
              accelerator: 'CmdOrCtrl+Z',
            },
            {
              role: 'redo',
              accelerator: 'CmdOrCtrl+Y',
            },
            {
              type: 'separator',
            },
            {
              role: 'cut',
              enabled: params.selectionText.length >= 1,
            },
            {
              role: 'copy',
              accelerator: 'CmdOrCtrl+C',
              enabled: params.selectionText.length >= 1,
            },
            {
              role: 'paste',
              accelerator: 'CmdOrCtrl+V',
            },
            {
              role: 'selectAll',
              accelerator: 'CmdOrCtrl+A',
            },
            {
              type: 'separator',
            },
          ]);
        }
  
        if (
          !params.isEditable &&
          params.selectionText !== '' &&
          !params.hasImageContents
        ) {
          menuItems = menuItems.concat([
            {
              role: 'copy',
              accelerator: 'CmdOrCtrl+C',
            },
            {
              label: `Search the web for "${truncateStr(
                params.selectionText,
                16,
                '...',
              )}"`,
              click: () => {
                var url = `https://google.com/search?q=${params.selectionText}`;
  
                this.webContents.loadURL(url);
              },
            },
          ]);
        }
  
        if (
          !params.hasImageContents &&
          params.linkURL === '' &&
          params.selectionText === '' &&
          !params.isEditable
        ) {
          menuItems = menuItems.concat([
            {
              label: 'Back              ',
              accelerator: 'Alt+Left',
              enabled: this.webContents.canGoBack(),
              click: () => {
                this.webContents.goBack();
              },
            },
            {
              label: 'Forward         ',
              accelerator: 'Alt+Right',
              enabled: this.webContents.canGoForward(),
              click: () => {
                this.webContents.goForward();
              },
            },
            {
              label: 'Refresh',
              accelerator: 'F5',
              click: () => {
                this.webContents.reload();
              },
            },
            {
              type: 'separator',
            },
          ]);
        }
  
        menuItems.push(
          {
            type: 'separator',
          },
          {
            label: 'View source',
            click: () => {
              if (this.webContents.getURL().substr(0, 12) != 'view-source:') {
                var url = `view-source:${this.webContents.getURL()}`;
  
                this.webContents.loadURL(url);
              }
            },
          },
          {
            label: 'Inspect',
            accelerator: 'F12',
            click: () => {
              if (this.webContents.getURL()) {
                this.webContents.inspectElement(params.x, params.y);
  
                if (this.webContents.isDevToolsOpened()) {
                  this.webContents.devToolsWebContents.focus();
                  this.webContents.devToolsWebContents.toggleDevTools();
                }
              }
            },
          },
        );
  
        const menu = Menu.buildFromTemplate(menuItems);
  
        menu.popup();
    });

    this.webContents.addListener('found-in-page', (e, result) => {
      windowsManager.window.webContents.send('found-in-page', result);
    });

    this.webContents.once('media-started-playing', (listener: any) => {
      windowsManager.window.webContents.send(`audio-playing-${this.tabId}`);
    });

    this.webContents.once('media-paused', (listener: any) => {
      windowsManager.window.webContents.send(`audio-stopped-${this.tabId}`);
    });

    this.webContents.addListener('did-stop-loading', () => {
      this.updateNavigationState();
      windowsManager.window.webContents.send(`view-loading-${this.tabId}`, false, this.url);
    });

    this.webContents.addListener('did-start-loading', () => {
      this.updateNavigationState();
      windowsManager.window.webContents.send(`view-loading-${this.tabId}`, true, this.url);
    });

    this.webContents.addListener('did-fail-load', 
      (event: Electron.Event, errorCode: number, errorDescription: string, validatedURL: string, isMainFrame: boolean) => {
        if(isMainFrame == true) {
          this.error = {
            code: errorCode,
            description: errorDescription,
            url: validatedURL
          }

          if(!windowsManager.window.viewManager.viewErrors[this.id]) {
            windowsManager.window.viewManager.viewErrors[this.id] = true;

            return this.webContents.reload()
          } else {
            delete windowsManager.window.viewManager.viewErrors[this.id];

            const url = this.webContents.getURL();
  
            return this.webContents.loadURL(`dot://error#${url}`)
          }

        }
      }
    )

    this.webContents.addListener('did-start-navigation', async (...args) => {
      this.updateNavigationState();

      if(args[3] == true) {
        windowsManager.window.webContents.send(`browserview-tab-info-updated-${this.tabId}`);
      }

      let url = this.webContents.getURL();

      // windowsManager.window.webContents.send(`load-commit-${this.webContents.id}`, ...args);

      this.emitWebNavigationEvent('onBeforeNavigate', {
        tabId: this.tabId,
        url: this.webContents.getURL(),
        frameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
        parentFrameId: -1,
      });

      this.emitWebNavigationEvent('onCommitted', {
        tabId: this.tabId,
        url,
        sourceFrameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
        frameId: 0,
        parentFrameId: -1,
      });
    });

    this.webContents.addListener('did-navigate', async (e, url) => {
      windowsManager.window.webContents.send(
        `view-did-navigate-${this.webContents.id}`,
        url,
      );

      this.emitWebNavigationEvent('onCreatedNavigationTarget', {
        tabId: this.tabId,
        url,
        sourceFrameId: 0,
        timeStamp: Date.now(),
      });
    });

    this.webContents.addListener('dom-ready', () => {
      this.emitWebNavigationEvent('onDOMContentLoaded', {
        tabId: this.tabId,
        url: this.webContents.getURL(),
        frameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
      });
    });

    this.webContents.addListener(
      'did-navigate-in-page',
      async (e, url, isMainFrame) => {
        if (isMainFrame) {
          windowsManager.window.webContents.send(
            `view-did-navigate-${this.webContents.id}`,
            url,
          );
        }
      },
    );

    this.webContents.addListener('did-finish-load', async () => {
      this.emitWebNavigationEvent('onCompleted', {
          tabId: this.tabId,
          url: this.webContents.getURL(),
          frameId: 0,
          timeStamp: Date.now(),
          processId: process.pid,
      });
    })

    this.webContents.addListener(
      'new-window',
      (e, url, frameName, disposition, options, referrer) => {
        if (disposition === 'new-window') {
          if (disposition === 'new-window') {
            if (
              windowsManager.window.viewManager.selected.title != `Dot - ${options.title}`
            ) {
              e.preventDefault();
              if (
                url.split('://')[0] != 'http' ||
                url.split('://')[0] != 'https'
              ) {
                return shell.openExternal(url);
              }
              let child = new BrowserWindow({
                show: false,
                frame: false,
                title: `Dot - ${options.title}`,
                width: options.width,
                height: options.height,
                icon: resolve(process.cwd() + '/static/icon.png'),
              });
              child.loadURL(process.cwd() + '/static/pages/util/window.html');
              child.once('ready-to-show', () => {
                child.show();
                child.webContents.send('load-url', url);
              });
            }
          }
          if (frameName === 'link') {
            e.preventDefault();
            windowsManager.window.viewManager.selected.webContents.loadURL(url);
          }
          if (frameName === '_self' || options.title == '_self') {
            e.preventDefault();
            windowsManager.window.viewManager.selected.webContents.loadURL(url);
          }
          if (frameName === '_top' || options.title == '_top') {
            e.preventDefault();
            windowsManager.window.viewManager.selected.webContents.loadURL(url);
          }
          if (frameName === '_blank' || options.title == '_blank') {
            e.preventDefault();
            windowsManager.window.webContents.send('api-tabs-create', {
              url,
              active: true,
            });
          }
          if (frameName === 'modal') {
            e.preventDefault();
            windowsManager.window.webContents.send('api-tabs-create', {
              url,
              active: true,
            });
          }
        } else if (disposition === 'foreground-tab') {
          e.preventDefault();
          windowsManager.window.webContents.send('api-tabs-create', { url, active: true });
        } else if (disposition === 'background-tab') {
          e.preventDefault();
          windowsManager.window.webContents.send('api-tabs-create', { url, active: false });
        } else if (frameName == '_blank') {
          e.preventDefault();
          windowsManager.window.webContents.send('api-tabs-create', { url, active: true });
        }

        if (frameName == '_blank') {
          e.preventDefault();
          windowsManager.window.webContents.send('api-tabs-create', { url, active: true });
        }
      },
    );

    this.webContents.addListener(
      'page-favicon-updated',
      async (e, favicons) => {
        this.favicon = favicons[0];

        windowsManager.window.webContents.send(
          `browserview-favicon-updated-${this.tabId}`,
          favicons[0],
          windowsManager.settings.conf.appearance.theme
        );
      },
    );

    this.webContents.addListener('did-change-theme-color', (e, color) => {
      windowsManager.window.webContents.send(
        `browserview-theme-color-updated-${this.tabId}`,
        color,
      );
    });

    this.setAutoResize({ width: true, height: true, horizontal: false, vertical: false });
    this.webContents.loadURL(url);
  }

  public emitWebNavigationEvent = (name: string, ...data: any[]) => {
    this.webContents.send(`api-emit-event-webNavigation-${name}`, ...data);
  };

  public updateNavigationState() {
    if (this.isDestroyed()) return;

    if (windowsManager.window.viewManager.selectedId === this.webContents.id) {
      windowsManager.window.webContents.send('update-navigation-state', {
        canGoBack: this.webContents.canGoBack(),
        canGoForward: this.webContents.canGoForward(),
      });
    }
  }

}

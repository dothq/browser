import {
  BrowserView,
  Menu,
  nativeImage,
  clipboard,
  BrowserWindow,
  shell,
  ContextMenuParams,
} from 'electron';
import { windowsManager } from '.';
import { engine } from './services/web-request';
import { parse } from 'tldts';
import { resolve } from 'path';
import * as isDev from 'electron-is-dev';
import { ViewError } from '../renderer/views/app/models/error';
import { TOOLBAR_HEIGHT } from '~/renderer/views/app/constants';

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
        javascript: true
      },
    });

    this.homeUrl = url;
    this.tabId = id;

    this.webContents.setUserAgent(
      this.webContents.getUserAgent()
      .replace(/ dot\\?.([^\s]+)/g, '')
      .replace(/ Electron\\?.([^\s]+)/g, '')
      .replace(/Chrome\\?.([^\s]+)/g, 'Chrome/79.0.3945.88')
    )

    var truncateStr = function(str: any, length: any, ending: any) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = '...';
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };

    this.webContents.addListener('context-menu', (e, params: ContextMenuParams) => {

      const navigationFlags = {
        back: this.webContents.canGoBack(),
        forward: this.webContents.canGoForward()
      }

      windowsManager.window.quickMenu.webContents.send("update-navigation-flags", navigationFlags);

      windowsManager.window.quickMenu.show(this.tabId)
      windowsManager.window.quickMenu.setPos(params.x, params.y+TOOLBAR_HEIGHT)
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

          const url = this.webContents.getURL();

          this.webContents.loadURL(`dot://error#${url}`)
        }
      }
    )

    this.webContents.addListener('did-start-navigation', (...args: any[]) => {
      this.updateNavigationState();

      if(args[3] == true) {
        windowsManager.window.webContents.send(`browserview-tab-info-updated-${this.tabId}`);
      }

      const url = this.webContents.getURL();

      const { styles, scripts } = engine.getCosmeticsFilters({
        url,
        ...parse(url),
      });

      this.webContents.insertCSS(styles);

      for (const script of scripts) {
        this.webContents.executeJavaScript(script);
      }

      windowsManager.window.webContents.send(`load-commit-${this.tabId}`, ...args);

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

    this.webContents.addListener('did-finish-load', async () => {
      this.emitWebNavigationEvent('onCompleted', {
        tabId: this.tabId,
        url: this.webContents.getURL(),
        frameId: 0,
        timeStamp: Date.now(),
        processId: process.pid,
      });
    });

    // this.webContents.addListener('will-navigate', (e, url) => {
    //   e.preventDefault();

    //   windowsManager.window.viewManager.selected.webContents.loadURL(url);
    // });

    this.webContents.addListener('did-navigate', async (e, url) => {
      windowsManager.window.webContents.send(
        `view-did-navigate-${this.webContents.id}`,
        url,
      );
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
                if (isDev) {
                  child.webContents.toggleDevTools();
                }
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

        this.emitWebNavigationEvent('onCreatedNavigationTarget', {
          tabId: this.tabId,
          url,
          sourceFrameId: 0,
          timeStamp: Date.now(),
        });
      },
    );

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

    (this.webContents as any).addListener(
      'certificate-error',
      (
        event: Electron.Event,
        url: string,
        error: string,
        certificate: Electron.Certificate,
        callback: Function,
      ) => {
        if (`${this.webContents.getURL()}`.includes('#ise') == false) {
          event.preventDefault();
          this.webContents.loadURL(
            process.cwd() +
              '/static/pages/error/ssl-error.html?du=' +
              url +
              '&err=' +
              error,
          );
          callback(true);
        }
        if (`${this.webContents.getURL()}`.includes('#ise') == true) {
          event.preventDefault();
          this.webContents.loadURL(this.webContents.getURL() + '#ise');
          callback(true);
        }
      },
    );

    this.setAutoResize({ width: true, height: true, horizontal: false, vertical: false });
    this.webContents.loadURL(url);
  }

  public updateNavigationState() {
    if (this.isDestroyed()) return;

    if (windowsManager.window.viewManager.selectedId === this.tabId) {
      windowsManager.window.webContents.send('update-navigation-state', {
        canGoBack: this.webContents.canGoBack(),
        canGoForward: this.webContents.canGoForward(),
      });
    }
  }

  public emitWebNavigationEvent = (name: string, ...data: any[]) => {
    this.webContents.send(`api-emit-event-webNavigation-${name}`, ...data);
  };
}

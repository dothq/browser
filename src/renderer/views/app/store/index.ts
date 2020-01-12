import * as React from 'react';
import { observable, action, computed } from 'mobx';

import { TabsStore } from './tabs';
import { TabGroupsStore } from './tab-groups';
import { AddTabStore } from './add-tab';
import { ipcRenderer, remote, IpcRendererEvent } from 'electron';
import { OverlayStore } from './overlay';
import { HistoryStore } from './history';
import { FaviconsStore } from './favicons';
import { SuggestionsStore } from './suggestions';
import { NotifsStore } from './notifications';
import { extname } from 'path';
import { BookmarksStore } from './bookmarks';
import { DownloadsStore } from './downloads';
import { LocaleStore } from './locale';
import { AutofillStore } from './autofill';
import { AbStore } from './adblockwindow';
import { WeatherStore } from './weather';
import { NewsStore } from './news';
import { UserStore } from './user';
import * as isDev from 'electron-is-dev';
import { DEFAULT_PREFERENCES } from '~/shared/models/default-preferences';
import { OptionsStore } from './settings';
import { getTheme } from '~/shared/utils/themes';
import { PreferencesStore } from './preferences';

export class Store {
  public history = new HistoryStore();
  public bookmarks = new BookmarksStore();
  public suggestions = new SuggestionsStore();
  public favicons = new FaviconsStore();
  public addTab = new AddTabStore();
  public tabGroups = new TabGroupsStore();
  public tabs = new TabsStore();
  public overlay = new OverlayStore();
  public downloads = new DownloadsStore();
  public adblockwindow = new AbStore();
  public weather = new WeatherStore();
  public user = new UserStore();
  public locale = new LocaleStore();
  public news = new NewsStore();
  public notifications = new NotifsStore();
  public autofill = new AutofillStore();
  public options = new OptionsStore();
  public preferences = new PreferencesStore(this);

  public app = require("electron").app;
  public remoteApp = require("electron").remote.app;
  public remote = require("electron").remote;
  public ipcMsg = require("electron").ipcRenderer;
  public ipcRec = require("electron").ipcMain;

  @observable
  public isFullscreen = false;

  @observable
  public isHTMLFullscreen = false;

  @observable
  public quickMenuVisible: boolean = false;

  @observable
  public menuBounds: {} = {};

  @observable
  public updateInfo = {
    available: false,
    version: '',
  };

  @observable
  public navigationState = {
    canGoBack: false,
    canGoForward: false,
  };

  public api: number;

  public loadedAPI: boolean;

  public findInputRef = React.createRef<HTMLInputElement>();

  public canToggleMenu = false;

  @computed
  public get theme() {
    return getTheme(this.preferences.conf.appearance.theme)
  }

  @observable
  public isMaximized: boolean;

  public mouse = {
    x: 0,
    y: 0,
  };

  public loaded: boolean = false;

  public constructor() {
    console.log("App loaded in store")

    ipcRenderer.on(
      'update-navigation-state',
      (e: IpcRendererEvent, data: any) => {
        this.navigationState = data;
      },
    );

    ipcRenderer.once('visible', (e: IpcRendererEvent, flag: any) => {
      this.quickMenuVisible = flag;
    });

    ipcRenderer.on('fullscreen', (e: any, fullscreen: boolean) => {
      this.isFullscreen = fullscreen;
    });

    ipcRenderer.on('html-fullscreen', (e: any, fullscreen: boolean) => {
      this.isHTMLFullscreen = fullscreen;
    });

    ipcRenderer.on(
      'update-available',
      (e: IpcRendererEvent, version: string) => {
        this.updateInfo.version = version;
        this.updateInfo.available = true;
      },
    );

    ipcRenderer.on(
      'url-arguments-applied',
      (e: IpcRendererEvent, url: string) => {
        
        this.tabs.addTab({ url, active: true })
        this.overlay.visible = false;
      },
    );

    ipcRenderer.on('find', () => {
      if (this.tabs.selectedTab) {
        this.tabs.selectedTab.findVisible = true;
      }
    });

    /* @todo Fix update checks */
    // ipcRenderer.send('update-check');

    requestAnimationFrame(() => {
      if (remote.process.argv.length > 1 && isDev == false) {
        const path = remote.process.argv[1];
        const ext = extname(path);

        if (ext === '.html') {
          setTimeout(function(this: any) {
            this.tabs.addTab({ url: `file:///${path}`, active: true });
          }, 4000);
         
        }
      }
    });
  }

}

export default new Store();

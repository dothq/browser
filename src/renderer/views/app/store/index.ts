import * as React from 'react';
import { observable } from 'mobx';

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
import { readFileSync, writeFile } from 'fs';
import { getPath } from '../../../../shared/utils/paths';
import { Settings } from '../models/settings';
import { DownloadsStore } from './downloads';
import { LocaleStore } from './locale';
import { AutofillStore } from './autofill';
import { AbStore } from './adblockwindow';
import { OptionsStore } from './settings';
import { WeatherStore } from './weather';
import { NewsStore } from './news';
import { UserStore } from './user';
import * as isDev from 'electron-is-dev';
import console = require('console');

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
  public options = new OptionsStore();
  public weather = new WeatherStore();
  public user = new UserStore();
  public locale = new LocaleStore();
  public news = new NewsStore();
  public notifications = new NotifsStore();
  public autofill = new AutofillStore();

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

  @observable
  public settings: Settings = {
    dialType: 'top-sites'
  };

  public async init() {
    const data = await fetch('https://api.dotbrowser.me/api/v0/version');
    const json = await data.json();

    this.api = json.api;

    this.weather.load()
    this.news.load();
    this.notifications.loadAll();
    this.notifications.showPermissionWindow();

    this.loadedAPI = true;

    
  }

  public api: number;

  public loadedAPI: boolean;

  public findInputRef = React.createRef<HTMLInputElement>();

  public canToggleMenu = false;

  @observable
  public theme: number = 1 | 0;

  @observable
  public isMaximized: boolean;

  public mouse = {
    x: 0,
    y: 0,
  };

  constructor() {

    this.init()

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

    ipcRenderer.send('update-check');

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

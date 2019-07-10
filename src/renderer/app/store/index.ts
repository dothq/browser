import * as React from 'react';
import { observable, computed, action } from 'mobx';

import { TabsStore } from './tabs';
import { TabGroupsStore } from './tab-groups';
import { AddTabStore } from './add-tab';
import { ipcRenderer, IpcMessageEvent, remote, app } from 'electron';
import { OverlayStore } from './overlay';
import { HistoryStore } from './history';
import { FaviconsStore } from './favicons';
import { SuggestionsStore } from './suggestions';
import { ExtensionsStore } from './extensions';
import { NotifsStore } from './notifications';
import { extname } from 'path';
import { BookmarksStore } from './bookmarks';
import { readFileSync, writeFile } from 'fs';
import { getPath } from '~/shared/utils/paths';
import { Settings } from '../models/settings';
import { SettingsFile } from '~/renderer/app/models/settings';
import { DotOptions } from '~/renderer/app/models/dotoptions';
import { DownloadsStore } from './downloads';
import { LocaleStore } from './locale';
import { AutofillStore } from './autofill';
import { AbStore } from './adblockwindow';
import { OptionsStore } from './settings';
import { WeatherStore } from './weather';
import { NewsStore } from './news';
import { UserStore } from './user';
import { existsSync, writeFileSync } from 'fs';
import console = require('console');

if (!existsSync(getPath('settings.json'))) {
  writeFileSync(
    getPath('settings.json'),
    JSON.stringify({
      dialType: 'top-sites',
      toggleDotLauncher: true,
    } as SettingsFile),
  );
}

if (!existsSync(getPath('dot-options.json'))) {
  writeFileSync(
    getPath('dot-options.json'),
    JSON.stringify({
      toggleDotLauncher: true,
      searchEngine: 'google'
    } as DotOptions),
  );
}

export class Store {
  public history = new HistoryStore();
  public bookmarks = new BookmarksStore();
  public suggestions = new SuggestionsStore();
  public favicons = new FaviconsStore();
  public addTab = new AddTabStore();
  public tabGroups = new TabGroupsStore();
  public tabs = new TabsStore();
  public overlay = new OverlayStore();
  public extensions = new ExtensionsStore();
  public downloads = new DownloadsStore();
  public adblockwindow = new AbStore();
  public options = new OptionsStore();
  public weather = new WeatherStore();
  public user = new UserStore();
  public locale = new LocaleStore();
  public news = new NewsStore();
  public notifications = new NotifsStore();
  public autofill = new AutofillStore();

  // Special stores
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
    const data = await fetch('https://dot.ender.site/api/v0/version');
    const json = await data.json();

    this.api = json.api;

    this.weather.load()
    this.news.load();
    this.notifications.loadAll();
    this.notifications.showPermissionWindow();

    console.log("\x1b[0mdot \x1b[32msuccess \x1b[0m Loaded Dot APIs. API v" + `${this.api} on app v${remote.app.getVersion()}\x1b[0m`)
  }

  public api: number;

  public findInputRef = React.createRef<HTMLInputElement>();

  public canToggleMenu = false;

  @observable
  public theme: number = 1 | 0;

  public mouse = {
    x: 0,
    y: 0,
  };

  constructor() {

    this.init()

    ipcRenderer.on(
      'update-navigation-state',
      (e: IpcMessageEvent, data: any) => {
        this.navigationState = data;
      },
    );

    ipcRenderer.on('fullscreen', (e: any, fullscreen: boolean) => {
      this.isFullscreen = fullscreen;
    });

    ipcRenderer.on('html-fullscreen', (e: any, fullscreen: boolean) => {
      this.isHTMLFullscreen = fullscreen;
    });

    ipcRenderer.on(
      'update-available',
      (e: IpcMessageEvent, version: string) => {
        this.updateInfo.version = version;
        this.updateInfo.available = true;
      },
    );

    ipcRenderer.on(
      'api-tabs-query',
      (e: IpcMessageEvent, webContentsId: number) => {
        const sender = remote.webContents.fromId(webContentsId);

        sender.send(
          'api-tabs-query',
          this.tabs.list.map(tab => tab.getApiTab()),
        );
      },
    );

    ipcRenderer.on(
      'api-browserAction-setBadgeText',
      (
        e: IpcMessageEvent,
        senderId: number,
        extensionId: string,
        details: chrome.browserAction.BadgeTextDetails,
      ) => {
        if (details.tabId) {
          const browserAction = this.extensions.queryBrowserAction({
            extensionId,
            tabId: details.tabId,
          })[0];

          if (browserAction) {
            browserAction.badgeText = details.text;
          }
        } else {
          this.extensions
            .queryBrowserAction({
              extensionId,
            })
            .forEach(item => {
              item.badgeText = details.text;
            });
        }
        const contents = remote.webContents.fromId(senderId);
        contents.send('api-browserAction-setBadgeText');
      },
    );

    ipcRenderer.on('find', () => {
      if (this.tabs.selectedTab) {
        this.tabs.selectedTab.findVisible = true;
      }
    });

    ipcRenderer.send('update-check');

    requestAnimationFrame(() => {
      if (remote.process.argv.length > 1 && remote.process.env.ENV !== 'dev') {
        const path = remote.process.argv[1];
        const ext = extname(path);

        if (ext === '.html') {
          setTimeout(function(this: any) {
            this.tabs.addTab({ url: `file:///${path}`, active: true });
          }, 4000);
         
        }
      }
    });

    this.settings = {
      ...this.settings,
      ...JSON.parse(readFileSync(getPath('settings.json'), 'utf8')),
    };
  }

  public saveSettings() {
    writeFile(getPath('settings.json'), JSON.stringify(this.settings), err => {
      if (err) console.error(err);
    });
  }
}

export default new Store();

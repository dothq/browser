import * as React from 'react';
import { observable, computed } from 'mobx';

import { TabsStore } from './tabs';
import { TabGroupsStore } from './tab-groups';
import { AddTabStore } from './add-tab';
import { ipcRenderer, IpcMessageEvent, remote } from 'electron';
import { OverlayStore } from './overlay';
import { HistoryStore } from './history';
import { FaviconsStore } from './favicons';
import { SuggestionsStore } from './suggestions';
import { ExtensionsStore } from './extensions';
import { extname } from 'path';
import { BookmarksStore } from './bookmarks';
import { readFileSync, writeFile } from 'fs';
import { getPath } from '~/shared/utils/paths';
import { Settings } from '../models/settings';
import { SettingsFile } from '~/renderer/app/models/settings';
import { DotOptions } from '~/renderer/app/models/dotoptions';
import { DownloadsStore } from './downloads';
import { LocaleStore } from './locale';
import { AbStore } from './adblockwindow';
import { OptionsStore } from './settings';
import { WeatherStore } from './weather';
import { NewsStore } from './news';
import { UserStore } from './user';
import { existsSync, writeFileSync } from 'fs';

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

  public findInputRef = React.createRef<HTMLInputElement>();

  public canToggleMenu = false;

  public mouse = {
    x: 0,
    y: 0,
  };

  constructor() {
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

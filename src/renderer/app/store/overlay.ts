import { observable, computed } from 'mobx';
import * as React from 'react';
import { ipcRenderer, remote, webContents } from 'electron';
import store from '.';
import { viewBm } from '../components/Toolbar';
import { ViewManager } from '~/main/view-manager';
import { View } from '../../../main/view';
import console = require('console');
import { defaultTabOptions } from './../constants/tabs';

let lastSuggestion: string;

const autoComplete = (text: string, suggestion: string) => {
  const regex = /(http(s?)):\/\/(www.)?|www./gi;
  const regex2 = /(http(s?)):\/\//gi;

  const start = text.length;

  const input = store.overlay.inputRef.current;

  if (input.selectionStart !== input.value.length) return;

  if (suggestion) {
    if (suggestion.startsWith(text.replace(regex, ''))) {
      input.value = text + suggestion.replace(text.replace(regex, ''), '');
    } else if (`www.${suggestion}`.startsWith(text.replace(regex2, ''))) {
      input.value =
        text + `www.${suggestion}`.replace(text.replace(regex2, ''), '');
    }
    input.setSelectionRange(start, input.value.length);
  }
};

export class OverlayStore {
  public scrollRef = React.createRef<HTMLDivElement>();
  public inputRef = React.createRef<HTMLInputElement>();
  public iconRef = React.createRef<HTMLDivElement>();

  public canSuggest = false;

  @observable
  private _visible = false;

  @observable
  public isNewTab = true;

  @observable
  public isAbOpen: boolean = false;

  @observable
  public abObj: any;

  @observable
  public currentContent:
    | 'default'
    | 'history'
    | 'bookmarks'
    | 'adblock'
    | 'extensions'
    | 'settings'
    | 'preload' = 'default';

  @observable
  public searchingChip: 'google' | 'bing' | 'yahoo' | 'ddg' | 'ecosia';

  @observable
  public dialTypeMenuVisible = false;

  @observable
  public worldTypeMenuVisible = false;

  @observable
  public _searchBoxValue = '';

  @observable
  public screenshot: any;

  @observable
  public panelVisible: boolean = false;

  private timeout: any;

  @computed
  public get searchBoxValue() {
    this.getScreenshot();

    return this._searchBoxValue;
  }

  public getScreenshot() {
    if (store.tabs.selectedTab) {
      ipcRenderer.send('capture-page', store.tabs.selectedTab.id);
    }
  }

  public set searchBoxValue(val: string) {
    this._searchBoxValue = val;

    var cleanURL = encodeURI(
      remote.app.getAppPath().replace(/\\/g, '/') +
        '\\static\\pages'.replace(/\\/g, '/'),
    );
    console.debug(cleanURL);
  }

  constructor() {
    window.addEventListener('keydown', this.onWindowKeyDown);

    setTimeout(() => {
      store.tabs.addTab(defaultTabOptions);
    }, 1000);

    ipcRenderer.on('open-settings', e => {
      this.visible = true;
      this.currentContent = 'settings';
    });
  }

  public onWindowKeyDown = (e: KeyboardEvent) => {
    if (!this._visible || e.keyCode !== 27) return; // Escape

    if (this.currentContent === 'history') {
      return (this.currentContent = 'default');
    }
    if (this.currentContent === 'bookmarks') {
      return (this.currentContent = 'default');
    }
    if (this.currentContent === 'settings') {
      return (this.currentContent = 'default');
    }
    if (this.currentContent === 'extensions') {
      return (this.currentContent = 'default');
    }
    if (this.currentContent === 'adblock') {
      ipcRenderer.send('browserview-hide');
      return (store.overlay.visible = false);
    }
    if (this.currentContent === 'default') {
      if (store.tabs.list.length == 0) return;
      this.visible = false;
    }
  };

  @computed
  public get visible() {
    return this._visible;
  }

  @computed
  public get isBookmarked() {
    if (!store.tabs.selectedTab) return false;

    return !!store.bookmarks.list.find(
      x => x.url === store.tabs.selectedTab.url,
    );
  }

  public async show() {
    clearTimeout(this.timeout);

    if (this.scrollRef.current) {
      this.scrollRef.current.scrollTop = 0;
    }

    ipcRenderer.send('pls-hide');
    ipcRenderer.send('browserview-hide');

    this._visible = true;
  }

  public set visible(val: boolean) {
    if (val === this._visible) return;

    if (!val) {
      clearTimeout(this.timeout);

      setTimeout(function() {
        ipcRenderer.send('browserview-show');
      }, 200);

      // this.timeout = setTimeout(() => {
      //   if (store.tabs.selectedTab) {
      //     if (store.tabs.selectedTab.isWindow) store.tabs.selectedTab.select();
      //     else ipcRenderer.send('browserview-show');
      //   }
      // }, 200);

      store.suggestions.list = [];
      lastSuggestion = undefined;

      this._visible = val;
      this.isNewTab = false;
      this.currentContent = 'default';
    } else {
      this.show();
      ipcRenderer.send('window-focus');

      if (!this.isNewTab) {
        store.tabs.selectedTab
          .callViewMethod('webContents.getURL')
          .then(async (url: string) => {
            this.searchBoxValue = url;
          });
      } else {
      }

      this._visible = val;
    }
  }

  public suggest() {
    const { suggestions } = store;
    // const input = this.inputRef.current;

    // if (this.canSuggest) {
    //   autoComplete(input.value, lastSuggestion);
    // }

    // suggestions.load(input).then(suggestion => {
    //   lastSuggestion = suggestion;
    //   if (this.canSuggest) {
    //     autoComplete(
    //       input.value.substring(0, input.selectionStart),
    //       suggestion,
    //     );
    //     this.canSuggest = false;
    //   }
    // });

    // suggestions.selected = 0;
  }
}

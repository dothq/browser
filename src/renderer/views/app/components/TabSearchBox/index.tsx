import * as React from 'react';

import store from '../../store';
import { isURL } from '~/shared/utils/url';
import { observer } from 'mobx-react';
import { StyledSearchBox, InputContainer, SearchIcon, Input } from './style';
import { Suggestions } from '../Suggestions';
import { icons } from '../../constants';
import ToolbarButton from "../ToolbarButton";
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import UserIcon from '../UserButton';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { Bookmark } from '../../models/bookmark';
import { appWindow } from '../..';
import { ViewManager } from '~/main/view-manager';
import { ipcRenderer } from 'electron';

const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.which === 13) {
    // Enter.
    e.preventDefault();

    ipcRenderer.send('browserview-show');

    const text = e.currentTarget.value;
    let url = text;

    const json = require("edit-json-file");
 
    let file = json(resolve(homedir()) + '/dot/dot-options.json');

    var searchengine = file.get("searchEngine");

    if(searchengine == "google") {
      var searchurl = `https://www.google.com/search?hl=en&q=`;
    }
    if(searchengine == "yahoo") {
      var searchurl = `https://search.yahoo.com/search?p=`;
    }
    if(searchengine == "bing") {
      var searchurl = `https://www.bing.com/search?q=`;
    }
    if(searchengine == "ddg") {
      var searchurl = `https://duckduckgo.com/?q=`;
    }
    if(searchengine == "ecosia") {
      var searchurl = `https://www.ecosia.org/search?q=`;
    }

    e.currentTarget.value = "";

    if (isURL(text) && !text.includes('://')) {
      url = `http://${text}`;
    } else if (!text.includes('://')) {
      url = `${searchurl}${text}`;
    }

    const tab = store.tabs.selectedTab;
    if (!tab || store.overlay.isNewTab) {
      store.tabs.addTab({ url, active: true });
    } else {
      tab.url = url;
      tab.callViewMethod('webContents.loadURL', url);
    }

    store.overlay.visible = false;
  }
};

const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  e.stopPropagation()
};

const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  e.stopPropagation()
  if(e.currentTarget.value.length != 0) {
    e.stopPropagation()
    ipcRenderer.send('pls-hide');
    ipcRenderer.send('browserview-hide');
  }
  else {
    ipcRenderer.send('browserview-show');
  }
};

const onInput = (e: any) => {
  e.stopPropagation()
  if(e.currentTarget.value.length != 0) {
    e.stopPropagation()
    ipcRenderer.send('pls-hide');
    ipcRenderer.send('browserview-hide');
  }
  else {
    ipcRenderer.send('browserview-show');
  }
};

export const TabSearchBox = observer(() => {
  const suggestionsVisible = store.suggestions.list.length !== 0;

  let height = 44;

  for (const s of store.suggestions.list) {
    height += 44;
  }

  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 12) {
    var timeType = "Good morning"
  } else if (curHr < 18) {
    var timeType = "Good afternoon"
  } else {
    var timeType = "Good evening"
  }
  if(store.user.loggedin == true) {
    // Personalized messages

    var sBV = [`Where do you want to go today?`, `What's on your mind ${store.user.username}?`, 'Enter a search term or URL to get started.', `${timeType}, ${store.user.username}`]
    var searchBoxValue = sBV[Math.floor(Math.random() * sBV.length)];    
  }
  else {
    var sBV = [`Where do you want to go today?`, `What's on your mind?`, 'Enter a search term or URL to get started.', `${timeType}`]
    var searchBoxValue = sBV[Math.floor(Math.random() * sBV.length)];
  }


  return (
    <StyledSearchBox visible={store.tabs.ubVisible == true} style={{ height }} onClick={onClick}>
      <InputContainer>
        <SearchIcon />
        <Input
          placeholder={searchBoxValue}
          onKeyPress={onKeyPress}
          onFocus={onInputFocus}
          onChange={onInput}
          onKeyDown={onKeyDown}
        />
      </InputContainer>
    </StyledSearchBox>
  );
});

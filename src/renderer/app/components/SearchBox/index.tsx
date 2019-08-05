import * as React from 'react';

import store from '../../store';
import { isURL } from '~/shared/utils/url';
import { observer } from 'mobx-react';
import { StyledSearchBox, InputContainer, SearchIcon, Input, SearchChip, ChipImage } from './style';
import { Suggestions } from '../Suggestions';
import { icons } from '../../constants';
import ToolbarButton from '../ToolbarButton';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import UserIcon from '../UserButton';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { Bookmark } from '../../models/bookmark';
import { remote } from 'electron';
import { Image } from 'react-native';
import { Dash } from '../Suggestion/style';
import { Title } from '../Overlay/style';

const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
  setInterval(() => {
    store.overlay.inputRef.current.select();
  }, 1)
};

const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {

  const json = require("edit-json-file");
 
  let file = json(resolve(homedir()) + '/dot/dot-options.json');

  var searchengine = file.get("searchEngine");

  var searchurl = `https://www.google.com/search?hl=en&q=`;
  var iconSearchURL = `https://www.google.com/search`;
  if(searchengine == "yahoo") {
    searchurl = `https://search.yahoo.com/search?p=`;
    iconSearchURL = `https://search.yahoo.com/search`;
  }
  if(searchengine == "bing") {
    searchurl = `https://www.bing.com/search?q=`;
    iconSearchURL = `https://www.bing.com/search`;
  }
  if(searchengine == "ddg") {
    searchurl = `https://duckduckgo.com/?q=`;
    iconSearchURL = `https://duckduckgo.com/?q=`;
  }
  if(searchengine == "ecosia") {
    searchurl = `https://www.ecosia.org/search?q=`;
    iconSearchURL = `https://www.ecosia.org/search`;
  }

  if (e.which === 13) {
    // Enter.
    e.preventDefault();

    const text = e.currentTarget.value;
    let url = text;

    var searchurl = `https://www.google.com/search?hl=en&q=`;
    if(searchengine == "yahoo") {
      searchurl = `https://search.yahoo.com/search?p=`;
    }
    if(searchengine == "bing") {
      searchurl = `https://www.bing.com/search?q=`;
    }
    if(searchengine == "ddg") {
      searchurl = `https://duckduckgo.com/?q=`;
    }
    if(searchengine == "ecosia") {
      searchurl = `https://www.ecosia.org/search?q=`;
    }

    var data = store.options.getById(searchengine);
    if(data) {
      if(data.title) {
        searchurl = data.url.split("%s")[0];
      }
    }

    if (isURL(text) && !text.includes('://')) {
      url = `http://${text}`;
    } else if (!text.includes('://')) {
      url = `${searchurl}${text}`;
    }

    e.currentTarget.value = url;

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
  if (store.overlay.inputRef.current) {
    store.overlay.inputRef.current.select();
  }
};

const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const key = e.keyCode;
  const { suggestions } = store;
  const { list } = suggestions;
  const input = store.overlay.inputRef.current;

  const json = require("edit-json-file");
 
  let file = json(resolve(homedir()) + '/dot/dot-options.json');

  var searchengine = file.get("searchEngine");

  var searchurl = `https://www.google.com/search?hl=en&q=`;
  var iconSearchURL = `https://www.google.com/search`;
  if(searchengine == "yahoo") {
    searchurl = `https://search.yahoo.com/search?p=`;
    iconSearchURL = `https://search.yahoo.com/search`;
  }
  if(searchengine == "bing") {
    searchurl = `https://www.bing.com/search?q=`;
    iconSearchURL = `https://www.bing.com/search`;
  }
  if(searchengine == "ddg") {
    searchurl = `https://duckduckgo.com/?q=`;
    iconSearchURL = `https://duckduckgo.com/?q=`;
  }
  if(searchengine == "ecosia") {
    searchurl = `https://www.ecosia.org/search?q=`;
    iconSearchURL = `https://www.ecosia.org/search`;
  }

  if (
    key !== 8 && // backspace
    key !== 13 && // enter
    key !== 17 && // ctrl
    key !== 18 && // alt
    key !== 16 && // shift
    key !== 9 && // tab
    key !== 20 && // capslock
    key !== 46 && // delete
    key !== 32 // space
  ) {
    store.overlay.canSuggest = true;
  } else {
    store.overlay.canSuggest = false;
  }

  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault();
    if (e.keyCode === 40 && suggestions.selected + 1 <= list.length - 1) {
      suggestions.selected++;
    } else if (e.keyCode === 38 && suggestions.selected - 1 >= 0) {
      suggestions.selected--;
    }

    const suggestion = list.find(x => x.id === suggestions.selected);

    input.value = suggestion.primaryText;
  }
};

const onInput = (e: any) => {
  store.overlay.show();
  store.overlay.suggest();
  store.overlay.scrollRef.current.scrollTop = 0;
};

const onStarClick = async () => {
  const { selectedTab } = store.tabs;

  var dotURL = encodeURI(remote.app.getAppPath().replace(/\\/g, "/") + '\\static\\pages'.replace(/\\/g, "/"));

  if(selectedTab.url.includes(dotURL) == false) {
    var foundBkm = store.bookmarks.list.find(
      x => x.url === store.tabs.selectedTab.url,
    );
  
    if(!foundBkm) {
  
      if(store.overlay.inputRef.current.value) {
        await store.bookmarks.addItem({
          title: selectedTab.title,
          url: store.overlay.inputRef.current.value,
          parent: null,
          type: 'item',
          favicon: selectedTab.favicon,
        });
      }
  
    }
  
    else {
  
      // It already exists, so delete it.
      store.bookmarks.removeItem(foundBkm._id)
  
    }
  }

};

const onUserClick = () => {
  if(store.suggestions.list.length <= 1) {
    store.suggestions
  }
  if(store.user.menuVisible == true) {
    store.user.menuVisible = false
  }
  else {
    store.user.menuVisible = true
  }
};

const chipImage = () => {

  const json = require("edit-json-file");

  let file = json(resolve(homedir()) + '/dot/dot-options.json');

  var searchengine = file.get("searchEngine");

  var searchurl = `https://google.com`

  if(searchengine == "yahoo") {
    searchurl = `https://yahoo.com`;
  }
  if(searchengine == "bing") {
    searchurl = `https://bing.com`;
  }
  if(searchengine == "ddg") {
    searchurl = `https://duckduckgo.com/`;
  }
  if(searchengine == "ecosia") {
    searchurl = `https://ecosia.org`;
  }

  return `https://f1.allesedv.com/${searchurl}`
};

export const SearchBox = observer(() => {
  const suggestionsVisible = store.suggestions.list.length !== 0;

  let height = 48;

  for (const s of store.suggestions.list) {
    height += 48;
  }

  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 12) {
    var timeType = store.locale.lang.search_bar[0].timeTypes[0].morning
  } else if (curHr < 18) {
    var timeType = store.locale.lang.search_bar[0].timeTypes[0].afternoon
  } else {
    var timeType = store.locale.lang.search_bar[0].timeTypes[0].evening
  }
  if(store.user.loggedin == true) {
    // Personalized messages

    var sBV = [store.locale.lang.search_bar[0].logged_in[0].message_1, store.locale.lang.search_bar[0].logged_in[0].message_2.replace(/{username}/g, store.user.username), store.locale.lang.search_bar[0].logged_in[0].message_3, store.locale.lang.search_bar[0].logged_in[0].message_4.replace(/{currentTimeType}/g, timeType).replace(/{username}/g, store.user.username)]
    var searchBoxValue = sBV[Math.floor(Math.random() * sBV.length)];    
  }
  else {
    var sBV = [store.locale.lang.search_bar[0].guest[0].message_1, store.locale.lang.search_bar[0].guest[0].message_2, store.locale.lang.search_bar[0].guest[0].message_3, store.locale.lang.search_bar[0].guest[0].message_4.replace(/{currentTimeType}/g, timeType).replace(/{username}/g, store.user.username)]
    var searchBoxValue = sBV[Math.floor(Math.random() * sBV.length)];
  }


  return (
    <StyledSearchBox style={{ height }} onClick={onClick}>
      <InputContainer>
        <SearchIcon ref={store.overlay.iconRef} type={icons.search}></SearchIcon>
        <Input
          autoFocus
          placeholder={searchBoxValue}
          onKeyPress={onKeyPress}
          onFocus={onInputFocus}
          onChange={onInput}
          onKeyDown={onKeyDown}
          ref={store.overlay.inputRef}
        />
        <ToolbarButton
          invert
          icon={store.overlay.isBookmarked ? icons.starFilled : icons.star}
          onClick={onStarClick}
          id="star-bkm"
          style={{
            marginRight: 8,
            display:
              store.tabs.selectedTab &&
              store.tabs.selectedTab.url === store.overlay.searchBoxValue
                ? 'block'
                : 'none',
          }}
        />
        <UserIcon
          icon={store.user.avatar}
          title={`${store.user.username} <${store.user.email}>`}
          onClick={onUserClick}
          visible={store.user.loggedin}
          style={{
            marginRight: 8,
            width: '38px'
          }}
        />
      </InputContainer>
      <Suggestions visible={suggestionsVisible} />
    </StyledSearchBox>
  );
});

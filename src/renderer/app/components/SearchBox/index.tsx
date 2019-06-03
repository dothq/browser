import * as React from 'react';

import store from '../../store';
import { isURL } from '~/shared/utils/url';
import { observer } from 'mobx-react';
import { StyledSearchBox, InputContainer, SearchIcon, Input } from './style';
import { Suggestions } from '../Suggestions';
import { icons } from '../../constants';
import ToolbarButton from '../ToolbarButton';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import UserIcon from '../UserButton';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { Bookmark } from '../../models/bookmark';

const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.which === 13) {
    // Enter.
    e.preventDefault();

    const text = e.currentTarget.value;
    let url = text;

    const editJsonFile = require("edit-json-file");
 
    let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

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

const logout = async () => {
  store.user.loggedin = false;
  store.user.username = "Guest";
  store.user.avatar = icons.user
  store.user.email = null;
  localStorage.removeItem("dot_footprint")
  store.user.menuVisible = false;
}

const onStarClick = async () => {
  const { selectedTab } = store.tabs;

  var foundBkm = store.bookmarks.list.find(
    x => x.url === store.tabs.selectedTab.url,
  );

  if(!foundBkm) {

    // If this check passes, the bookmark doesn't exist yet, so create it.
    await store.bookmarks.addItem({
      title: selectedTab.title,
      url: store.overlay.inputRef.current.value,
      parent: null,
      type: 'item',
      favicon: selectedTab.favicon,
    });

  }

  else {

    // It already exists, so delete it.
    store.bookmarks.removeItem(foundBkm._id)

  }
};

const onUserClick = () => {
  store.user.menuVisible = true;
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
    var timeType = "Good morning"
  } else if (curHr < 18) {
    var timeType = "Good afternoon"
  } else {
    var timeType = "Good evening"
  }
  var sBV = [`Where do you want to go today?`, `What's on your mind ${require("os").userInfo().username}?`, 'Enter a search term or URL to get started.', `${timeType}, ${require("os").userInfo().username}`]
  var searchBoxValue = sBV[Math.floor(Math.random() * sBV.length)];

  return (
    <StyledSearchBox style={{ height }} onClick={onClick}>
      <InputContainer>
        <SearchIcon />
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
          onClick={onUserClick}
          visible={store.user.loggedin}
          style={{
            marginRight: 8,
          }}
        />
        {/* <ContextMenu visible={store.user.menuVisible} style={{ marginLeft: '650px', marginTop: '-24px', position: 'fixed' }}>
          <ContextMenuItem icon={icons.user}>
              My Profile
          </ContextMenuItem>
          <ContextMenuItem icon={icons.close} onClick={logout}>
              Sign out
          </ContextMenuItem>
        </ContextMenu> */}
      </InputContainer>
      <Suggestions visible={suggestionsVisible} />
    </StyledSearchBox>
  );
});

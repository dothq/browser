import * as React from 'react';
import {
  StyledSearchBox,
  SearchContainer,
  SearchIcon,
  Input,
} from './style';
import store from '../../store';
import { callViewMethod } from '~/shared/utils/view';
import { remote, ipcRenderer } from 'electron';
import { isURL } from '~/shared/utils/url';
import { Suggestions } from '../Suggestions';

const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.which === 13) {
    // Enter.
    e.preventDefault();

    const text = e.currentTarget.value;
    let url = text;

    const suggestion = store.suggestions.selectedSuggestion;

    if (suggestion) {
      if (suggestion.isSearch) {
        url = `https://google.com/search?q=${text}`;
      } else if (text.indexOf('://') === -1) {
        url = `http://${text}`;
      }
    }

    console.log(suggestion)

    e.currentTarget.value = url;

    callViewMethod(
      remote.getCurrentWindow().id,
      store.tabId,
      'webContents.loadURL',
      url,
    );

    setTimeout(() => {
      ipcRenderer.send(`hide-${store.id}`);
    });
  }
};

export const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const key = e.keyCode;
  const { suggestions } = store;
  const { list } = suggestions;
  const input = store.inputRef.current;

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
    store.canSuggest = true;
  } else {
    store.canSuggest = false;
  }

  if (e.keyCode === 38 || e.keyCode === 40) {
    e.preventDefault();
    if (
      e.keyCode === 40 &&
      suggestions.selected + 1 <= list.length - 1 + store.history.length
    ) {
      suggestions.selected++;
    } else if (e.keyCode === 38 && suggestions.selected - 1 >= 0) {
      suggestions.selected--;
    }

    let suggestion = list.find(x => x.id === suggestions.selected);

    if (!suggestion) {
      suggestion = store.history.find(x => x.id === suggestions.selected);
    }

    input.value = suggestion.primaryText;
  }
}

const onInput = () => {
  store.suggest()
}

export class Search extends React.Component {
  public props: any = {
    isFixed: false,
    style: '',
    visible: false
  };

  constructor(props: any) {
    super(props);
  }

  public state = {
    focused: false
  };

  onChange(e: any) {
    store.details.url = e.target.value;
  }

  render() {
    const { isFixed, style, visible } = this.props;

    const suggestionsVisible = store.suggestions.list.length !== 0;

    let height = 0;

    if (suggestionsVisible) {
      for (const s of store.suggestions.list) {
        height += 38;
      }

      for (const s of store.history) {
        height += 38;
      }

      if (store.suggestions.list.length > 0) {
        height += 30;
      }

      if (store.history.length > 0) {
        height += 30;
      }
    }

    ipcRenderer.send(`height-${store.id}`, height);

    return (
      <StyledSearchBox isFixed={isFixed} style={style} isFocused={true} visible={visible}>
        <SearchContainer>
          <SearchIcon isFocused={store.details.url == ''} />
          <Input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            onChange={() => this.onChange(event)}
            defaultValue={store.details.url}
            placeholder="Search Google or enter address"
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onInput={onInput}
            ref={store.inputRef}
          />
        </SearchContainer>
        <Suggestions visible={suggestionsVisible}></Suggestions>
      </StyledSearchBox>
    );
  }
}

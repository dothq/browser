import * as React from 'react';
import {
  StyledSearchBox,
  SearchContainer,
  SearchIcon,
  Input,
} from './style';
import store from '../../store';
import { callViewMethod } from '~/shared/utils/view';
import { remote } from 'electron';
import { isURL } from '~/shared/utils/url';

export const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log(store.suggestions.list)

  if(e.keyCode == 13) {
    const text = e.currentTarget.value;
    let url = text;

    if (isURL(text) && !text.includes('://')) {
      url = `http://${text}`;
    } else if (!text.includes('://')) {
      url = `https://google.com/search?q=${text}`;
    }

    setTimeout(() => {
      store.hide()
    })

    callViewMethod(
      remote.getCurrentWindow().id,
      store.tabId,
      'webContents.loadURL',
      url,
    );
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
            onInput={onInput}
            ref={store.inputRef}
          />
        </SearchContainer>
      </StyledSearchBox>
    );
  }
}

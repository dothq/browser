import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { transparency } from '~/renderer/constants';
import {
  StyledSuggestion,
  PrimaryText,
  Dash,
  SecondaryText,
  Icon,
} from './style';

import store from '../../store';
import { remote, ipcRenderer } from 'electron';
import { callViewMethod } from '~/shared/utils/view';
import { icons } from '~/renderer/views/app/constants';

interface Props {
  suggestion: any;
}

const onMouseEnter = (suggestion: any) => () => {
  suggestion.hovered = true;
};

const onMouseLeave = (suggestion: any) => () => {
  suggestion.hovered = false;
};

const onClick = (suggestion: any) => () => {
  let url = suggestion.primaryText;

  if (suggestion.isSearch) {
    url = `https://google.com/search?q=${url}`;
  } else if (url.indexOf('://') === -1) {
    url = `http://${url}`;
  }

  callViewMethod(
    remote.getCurrentWindow().id,
    store.tabId,
    'webContents.loadURL',
    url,
  );

  setTimeout(() => {
    ipcRenderer.send(`hide-${store.id}`);
  });
};

export const Suggestion = observer(({ suggestion }: Props) => {
  const { hovered } = suggestion;
  const { primaryText, secondaryText } = suggestion;

  const selected = store.suggestions.selected === suggestion.id;

  let { favicon } = suggestion;

  if (favicon == null || favicon.trim() === '') {
    favicon = icons.page;
  }

  const customFavicon = favicon !== icons.page && favicon !== icons.search;

  return (
    <StyledSuggestion
      selected={selected}
      hovered={hovered}
      onClick={onClick(suggestion)}
      onMouseEnter={onMouseEnter(suggestion)}
      onMouseLeave={onMouseLeave(suggestion)}
    >
      <Icon
        style={{
          backgroundImage: `url(${favicon})`,
          opacity: customFavicon ? 1 : transparency.icons.inactive,
        }}
      />
      <PrimaryText>{primaryText}</PrimaryText>
      {primaryText != null && secondaryText != null && <Dash>&mdash;</Dash>}
      <SecondaryText>{secondaryText}</SecondaryText>
    </StyledSuggestion>
  );
});

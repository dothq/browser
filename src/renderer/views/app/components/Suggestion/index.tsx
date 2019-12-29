import { observer } from 'mobx-react';
import * as React from 'react';

import { Suggestion } from '../../models';
import store from '../../store';
import { icons } from '../../constants';
import { transparency } from '~/renderer/constants';
import {
  StyledSuggestion,
  PrimaryText,
  Dash,
  SecondaryText,
  Icon,
} from './style';
import { isURL } from '~/shared/utils/url';

interface Props {
  suggestion: Suggestion;
}

const onMouseEnter = (suggestion: Suggestion) => () => {
  suggestion.hovered = true;
};

const onMouseLeave = (suggestion: Suggestion) => () => {
  suggestion.hovered = false;
};

const loadURL = (suggestion: Suggestion) => () => {

  var text = "";

  if(isURL(suggestion.secondaryText)) {
    text = suggestion.secondaryText;
  }
  else {
    text = suggestion.primaryText;
  }

  var url = text;

  if (isURL(text) && !text.includes('://')) {
    url = `http://${text}`;
  } else if (!text.includes('://')) {
    url = `https://google.com/search?q=${text}`;
  }

  store.tabs.addTab({ url, active: true });
  store.overlay.visible = false;
};

export const SuggestionComponent = observer(({ suggestion }: Props) => {
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
      onMouseEnter={onMouseEnter(suggestion)}
      onMouseLeave={onMouseLeave(suggestion)}
      onClick={loadURL(suggestion)}
    >
      <Icon
        style={{
          backgroundImage: `url(${favicon})`,
        }}
        isCustomIcon={customFavicon ? true : false}
      />
      <PrimaryText>{primaryText}</PrimaryText>
      {primaryText != null && secondaryText != null && <Dash>&mdash;</Dash>}
      <SecondaryText>{secondaryText}</SecondaryText>
    </StyledSuggestion>
  );
});

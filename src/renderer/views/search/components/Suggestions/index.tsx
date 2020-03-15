import { observer } from 'mobx-react';
import * as React from 'react';

import { StyledSuggestions, Subheading, SpotlightWrapper, SuggestionsWrapper } from './style';
import store from '../../store';
import { Suggestion } from '../Suggestion';
import { Spotlight } from '../Spotlight';

interface Props {
  visible: boolean;
  style: any;
}

const onMouseDown = (e: React.MouseEvent) => {
  e.stopPropagation();
};

export const Suggestions = observer(({ visible, style }: Props) => {
  return (
    <StyledSuggestions onMouseDown={onMouseDown} style={style}>
      <SuggestionsWrapper visible={visible}>
        {store.suggestions.list.length > 0 && <Subheading>Search</Subheading>}
        {store.suggestions.list.map(suggestion => (
          <Suggestion suggestion={suggestion} key={suggestion.id} />
        ))}
      </SuggestionsWrapper>
      <SpotlightWrapper visible={!visible}>
        <Spotlight />
      </SpotlightWrapper>
    </StyledSuggestions>
  );
});

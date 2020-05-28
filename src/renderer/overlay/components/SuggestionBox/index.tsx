import React from 'react';
import { observer } from 'mobx-react';

import { StyledSuggestionBox } from './style';
import { Suggestion } from './Suggestion';
import { SuggestionIcon } from './SuggestionIcon';


export const SuggestionBox = observer(() => (
  <StyledSuggestionBox>
    <SuggestionIcon />
    <Suggestion suggestion={"What are you searching for?"} suggestionType={"search"} />
  </StyledSuggestionBox>
))
import React from 'react';
import { observer } from 'mobx-react';

import { StyledSuggestionBox } from './style';
import { Suggestion } from './Suggestion';


export const SuggestionBox = observer(() => (
  <StyledSuggestionBox>
    <Suggestion suggestion={"What are you searching for?"} suggestionType={"search"} icon={"search"} size={14}/>
  </StyledSuggestionBox>
))
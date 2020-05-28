import React from "react";
import { StyledSuggestion, SuggestionText } from "./style";
import { Icon } from "../../Icon"

export const Suggestion = ({ suggestion, suggestionType }: { suggestion: any, suggestionType?: any }) => (
    <StyledSuggestion>
      <SuggestionText>{suggestion}</SuggestionText>
    </StyledSuggestion>
)
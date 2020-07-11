import React from "react";
import { StyledSuggestion, SuggestionText } from "./style";

export const Suggestion = ({ suggestion }: { suggestion: any }) => (
    <StyledSuggestion>
      <SuggestionText>{suggestion}</SuggestionText>
    </StyledSuggestion>
)
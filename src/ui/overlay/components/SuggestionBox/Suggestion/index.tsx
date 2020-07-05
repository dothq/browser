import React from "react";
import { StyledSuggestion, SuggestionText } from "./style";
import { Icon } from "@dothq/icon"

export const Suggestion = ({ suggestion }: { suggestion: any }) => (
    <StyledSuggestion>
      <SuggestionText>{suggestion}</SuggestionText>
    </StyledSuggestion>
)
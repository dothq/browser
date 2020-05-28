import React from "react";
import { StyledSuggestion, SuggestionText } from "./style";
import { Icon } from "../../Icon"

export const Suggestion = ({ suggestion, suggestionType, icon, size, iconStyle}: { suggestion: any, suggestionType?: any, icon: any, size?: number, iconStyle?: any }) => (
    <StyledSuggestion>
      <Icon icon={icon} size={size} style={iconStyle} />
      <SuggestionText>suggestion</SuggestionText>
    </StyledSuggestion>
)
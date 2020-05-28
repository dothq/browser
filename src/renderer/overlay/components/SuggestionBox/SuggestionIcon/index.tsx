import React from "react";

import { StyledSuggestionIcon } from "./style";
import { Icon } from "../../Icon";

import { observer } from "mobx-react";

export const SuggestionIcon = ({ icon }: { icon: string }) => (
        <StyledSuggestionIcon>
            <Icon icon={icon} size={14} />
        </StyledSuggestionIcon>
)
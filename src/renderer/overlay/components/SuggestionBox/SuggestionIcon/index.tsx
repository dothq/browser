import React from "react";

import { StyledSuggestionIcon } from "./style";
import { Icon } from "../../Icon";

import { observer } from "mobx-react";

export const SuggestionIcon = observer(() => {

    return (
        <StyledSuggestionIcon>
            <Icon icon={"search"} size={14} />
        </StyledSuggestionIcon>
    )
})
import React from "react";

import { StyledFavouriteIcon } from "./style";
import { Icon } from "@dothq/icon";

import dot from '../../../store';
import { observer } from "mobx-react";

export const FavouriteIcon = observer(() => {
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;

    return (
        <StyledFavouriteIcon>
            <Icon icon={"star"} size={15} />
        </StyledFavouriteIcon>
    )
})
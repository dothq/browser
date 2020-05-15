import React from "react";

import { StyledSearchIcon } from "./style";
import { Icon } from "../../Icon";

import dot from '../../../store';
import { observer } from "mobx-react";
import { NEWTAB_URL } from "../../../../constants/web";

export const SearchIcon = observer(() => {
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    let icon = "search";

    if(dot.tabs.selectedTab) {
        if(url.startsWith("http")) icon = "alert-circle"
        if(url.startsWith("https")) icon = "lock"
        if(url == NEWTAB_URL) icon = "search"
    }

    return (
        <StyledSearchIcon>
            <Icon icon={icon} size={14} />
        </StyledSearchIcon>
    )
})
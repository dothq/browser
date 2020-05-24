import React from "react";

import { StyledSearchIcon, SearchIconText } from "./style";
import { Icon } from "../../Icon";

import dot from '../../../store';
import { observer } from "mobx-react";
import { NEWTAB_URL, EXPO_URL } from "../../../../constants/web";

export const SearchIcon = observer(() => {
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    const isFocused = dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused
    let icon = "search";

    if(dot.tabs.selectedTab) {
        if(url.startsWith("http")) icon = "alert-circle"
        if(url.startsWith("https")) icon = "lock"
        if(url == NEWTAB_URL) icon = "search"
        if(url.startsWith(EXPO_URL)) icon = "circle"
    }

    return (
        <StyledSearchIcon isNTP={url == NEWTAB_URL} isDotPage={url && url.startsWith(EXPO_URL)} isFocused={isFocused}>
            <Icon icon={icon} size={14} />
            <SearchIconText visible={url && url.startsWith(EXPO_URL)}>Dot Browser</SearchIconText>
        </StyledSearchIcon>
    )
})
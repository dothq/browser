import React from "react";

import { StyledSearchIcon, SearchIconText } from "./style";
import { Icon } from "../../Icon";

import dot from '../../../store';
import { observer } from "mobx-react";
import { NEWTAB_URL, EXPO_PREFIX, EXPO_SUFFIX } from "../../../../constants/web";

export const SearchIcon = observer(() => {
    const tab = dot.tabs.selectedTab && dot.tabs.selectedTab;
    
    const isFocused = dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused
    let icon = "search";

    if(dot.tabs.selectedTab) {
        if(tab && tab.url.startsWith("http")) icon = "alert-circle"
        if(tab && tab.url.startsWith("https")) icon = "lock"
        if(tab && tab.url == NEWTAB_URL) icon = "search"
        if(tab && tab.url.startsWith(EXPO_PREFIX)) icon = "circle"
        if(tab && tab.isError) icon = "alert-circle"
    }

    return (
        <StyledSearchIcon 
            isNTP={tab && tab.url == NEWTAB_URL} 
            searchWidth={tab && tab.url && tab && tab.url.startsWith(EXPO_PREFIX) ? 108 : tab && tab.url && tab && tab.status == "idle" ? tab.isError ? 0 : tab.url.startsWith("http://") : 0 ? 102 : 0} 
            showSearchText={tab && tab.url && tab && tab.url.startsWith(EXPO_PREFIX) || tab && tab.url && tab && tab && tab.status == "idle" ? tab.isError ? false : tab.url.startsWith("http://") : false} 
            isFocused={isFocused}
        >
            <Icon icon={icon} size={icon == "alert-circle" ? 16 : 14} />
            <SearchIconText 
                visible={
                    tab && tab.url && tab && tab.url.startsWith(EXPO_PREFIX) 
                        ? tab && tab.url && tab && tab.url.startsWith(EXPO_PREFIX) 
                        : tab && tab.url && tab && tab && tab.status == "idle" 
                            ? tab.url.startsWith("http://")
                                ? tab.isError
                                    ? false
                                    : true
                                : false
                            : false
                } 
                textWidth={
                    tab && tab.url && tab && tab.url.startsWith(EXPO_PREFIX) 
                        ? 65 
                        : tab && tab.status == "idle" ? tab.isError ? 0 : 58 : 0
                }
            >
                {tab && tab.url && tab && tab.url.startsWith(EXPO_PREFIX) ? "Dot Browser" : tab && tab.status == "idle" ? tab.isError ? "" : "Not secure" : ""}
            </SearchIconText>
        </StyledSearchIcon>
    )
})
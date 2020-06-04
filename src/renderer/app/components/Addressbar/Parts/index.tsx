import React from "react";
import { StyledParts, Part } from "./style";

import dot from '../../../store';
import { observer } from "mobx-react";
import { EXPO_PREFIX } from "../../../../constants/web";

export const Parts = observer(({ showSearchText, searchWidth }: { showSearchText: boolean; searchWidth: number }) => {
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    const isFocused = dot.tabs.selectedTab && !dot.tabs.selectedTab.inputFocused

    return (
        <StyledParts
            visible={isFocused}
            showSearchText={showSearchText}
            searchWidth={searchWidth}
        >
            {dot.addressbar.urlParts(url).map(part => ( 
                <Part key={part.id} opacity={part.opacity} style={{ display: part.hide ? "none" : "" }}>{part.value}</Part> 
            ))}
        </StyledParts>
    )
})
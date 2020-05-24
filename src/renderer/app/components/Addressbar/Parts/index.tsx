import React from "react";
import { StyledParts, Part } from "./style";

import dot from '../../../store';
import { observer } from "mobx-react";

export const Parts = observer(({ isDotPage }: { isDotPage: boolean }) => {
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    const isFocused = dot.tabs.selectedTab && !dot.tabs.selectedTab.inputFocused

    return (
        <StyledParts
            visible={isFocused}
            isDotPage={isDotPage}
        >
            {dot.addressbar.urlParts(url).map(part => ( 
                <Part key={part.id} opacity={part.opacity}>{part.value}</Part> 
            ))}
        </StyledParts>
    )
})
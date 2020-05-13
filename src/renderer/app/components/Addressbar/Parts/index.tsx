import React from "react";
import { StyledParts, Part } from "./style";

import dot from '../../../store';

export const Parts = () => {
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    const isFocused = dot.tabs.selectedTab && !dot.tabs.selectedTab.inputFocused

    return (
        <StyledParts
            visible={isFocused}
        >
            {dot.addressbar.urlParts(url).map(part => ( 
                <Part key={part.id} opacity={part.opacity}>{part.value}</Part> 
            ))}
        </StyledParts>
    )
}
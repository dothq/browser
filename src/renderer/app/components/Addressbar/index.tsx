import React from 'react';
import { StyledAddressbar, Input } from "./style"
import { observer } from 'mobx-react';

import dot from '../../store'
import { Parts } from './Parts';
import { SearchIcon } from './SearchIcon';
import { FavouriteIcon } from './FavouriteIcon';
import { EXPO_PREFIX } from '../../../constants/web';

export const Addressbar = observer(() => {
    const events = dot.events;
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    const isIdle = dot.tabs.selectedTab && dot.tabs.selectedTab.status == "idle";
    const isError = dot.tabs.selectedTab && dot.tabs.selectedTab.isError;
    const isFocused = dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused

    const searchWidth = url && url.startsWith(EXPO_PREFIX) ? 118 : url && isIdle ? isError ? 0 : url.startsWith("http://") ? 114 : 0 : 0;
    const showSearchText = url && url.startsWith(EXPO_PREFIX) || url && isIdle ? isError ? false : url.startsWith("http://") : false;

    return (
        <StyledAddressbar>
            <SearchIcon />
            <Input 
                ref={dot.searchRef} 
                onBlur={() => events.inputOnBlur()} 
                onMouseDown={() => events.inputOnMouseDown()}
                onClick={() => events.inputOnClick()} 
                onInput={() => events.inputOnInput()}
                onKeyUp={(event) => events.inputOnKeyUp(event)}
                onChange={(event) => events.inputOnChange(event)}
                value={dot.addressbar.inputValue()}
                searchWidth={searchWidth}
                autoComplete={"off"}
                autoCorrect={"off"} 
                autoCapitalize={"off"} 
                spellCheck={"false"}
            />
            {/* <Parts searchWidth={searchWidth} showSearchText={showSearchText} /> */}
            <FavouriteIcon />
        </StyledAddressbar>
    )
})
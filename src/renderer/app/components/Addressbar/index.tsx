import React from 'react';
import { StyledAddressbar, Input } from "./style"
import { observer } from 'mobx-react';

import dot from '../../store'
import { Parts } from './Parts';
import { SearchIcon } from './SearchIcon';
import { FavouriteIcon } from './FavouriteIcon';
import { EXPO_URL } from '../../../constants/web';

export const Addressbar = observer(() => {
    const events = dot.events;
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    const isFocused = dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused

    const searchWidth = url && url.startsWith(EXPO_URL) ? 118 : url && url.startsWith("http://") ? 114 : 0;
    const showSearchText = url && url.startsWith(EXPO_URL) || url && url.startsWith("http://");

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
                showSearchText={showSearchText}
                searchWidth={searchWidth}
                isFocused={isFocused}
            />
            <Parts searchWidth={searchWidth} showSearchText={showSearchText} />
            <FavouriteIcon />
        </StyledAddressbar>
    )
})
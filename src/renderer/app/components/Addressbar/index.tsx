import React from 'react';
import { StyledAddressbar, Input, StyledFavouriteIcon, StyledSearchIcon, SearchIconText,  StyledParts, Part, PadlockIcon } from "./style"
import { observer } from 'mobx-react';
import { Icon } from "@dothq/icon";
import { BLUE_1 } from '../../../constants/colors';

export const Addressbar = observer(({ EXPO_PREFIX, NEWTAB_URL, EXPO_SUFFIX, dot }: { EXPO_PREFIX: string;  NEWTAB_URL: string; EXPO_SUFFIX?: string; dot: any }) => {
    const events = dot.events;
    const url = dot.tabs.selectedTab && dot.tabs.selectedTab.url;
    const isIdle = dot.tabs.selectedTab && dot.tabs.selectedTab.status == "idle";
    const isError = dot.tabs.selectedTab && dot.tabs.selectedTab.isError;
    const isFocused = dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused

    const searchWidth = url && url.startsWith(EXPO_PREFIX) ? 118 : url && isIdle ? isError ? 0 : url.startsWith("http://") ? 114 : 0 : 0;
    const showSearchText = url && url.startsWith(EXPO_PREFIX) || url && isIdle ? isError ? false : url.startsWith("http://") : false;

    return (
        <StyledAddressbar>
            <SearchIcon EXPO_PREFIX={EXPO_PREFIX} EXPO_SUFFIX={EXPO_SUFFIX} NEWTAB_URL={NEWTAB_URL} dot={dot}/>
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
                placeholder={"Search Google or enter website address"}
            />
            {/* <Parts searchWidth={searchWidth} showSearchText={showSearchText} dot={dot}/> */}
            <FavouriteIcon dot={dot}/>
        </StyledAddressbar>
    )
})

const FavouriteIcon = observer(({ dot }: { dot: any }) => {
    const isBookmarked = dot.tabs.selectedTab && dot.tabs.selectedTab.isBookmarked;

    return (
        <StyledFavouriteIcon title={isBookmarked ? `Edit bookmark for this tab` : `Bookmark this tab`} onClick={() => dot.tabs.selectedTab.bookmark()}>
            <Icon icon={"star"} size={15} stroke={isBookmarked ? BLUE_1 : "currentColor"} fill={isBookmarked ? BLUE_1 : ""} />
        </StyledFavouriteIcon>
    )
})

const SearchIcon = observer(({ EXPO_PREFIX, NEWTAB_URL, EXPO_SUFFIX, dot }: { EXPO_PREFIX: string; NEWTAB_URL: string; EXPO_SUFFIX?: string; dot: any }) => {
    const tab = dot.tabs.selectedTab && dot.tabs.selectedTab;
    
    const isFocused = dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused
    let icon = "search";

    if(dot.tabs.selectedTab) {
        if(tab && tab.url.startsWith("http")) icon = "alert-circle"
        if(tab && tab.url.startsWith("https")) icon = "lock"
        if(tab && tab.url == NEWTAB_URL) icon = "search"
        // if(tab && tab.url.startsWith(EXPO_PREFIX)) icon = "circle"
        // if(tab && tab.isError) icon = "alert-circle"
    }

    return (
        <StyledSearchIcon 
            isNTP={tab && tab.url == NEWTAB_URL} 
            searchWidth={0} 
            showSearchText={false} 
            isFocused={isFocused}
            title={icon !== "search" ? "View site information" : ""}
        >
            {icon !== "lock" && <Icon icon={icon} size={icon == "alert-circle" ? 16 : 14} />}
            {icon == "lock" && <PadlockIcon />}
        </StyledSearchIcon>
    )
})

const Parts = observer(({ showSearchText, searchWidth, dot }: { showSearchText: boolean; searchWidth: number; dot: any }) => {
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
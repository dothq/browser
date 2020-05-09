import React from 'react';
import { StyledAddressbar, SearchIcon, Input, InputPlaceholder } from "./style"
import { Icon } from '../Icon';
import { observer } from 'mobx-react-lite';

import dot from '../../store'
import { ipcRenderer } from 'electron';
import { PROTOCOL_REGEX, NAKED_DOMAIN_REGEX } from '../../../constants/url';

export const Addressbar = observer(() => {
    const [inputFocused, setInputFocused] = React.useState(true);
    const [placeholderVisible, setPlaceholderVisibility] = React.useState(true);

    const onSearchBlur = () => {
        window.getSelection().removeAllRanges()

        if(dot.searchRef.current.value.length == 0) {
            dot.searchRef.current.blur()
            dot.tabs.selectedTab.showInputPlaceholder = true;
            dot.tabs.selectedTab.inputFocused = false;
        }
    }

    const onClick = () => {
        dot.searchRef.current.focus();
        dot.searchRef.current.select();
    }

    const onChange = (e) => {
        dot.addressbar.rawValue = e.target.value;
        dot.addressbar.isEditing = true;
    }

    const onMouseDown = () => {
        if(dot.searchRef.current.value.length == 0 && dot.tabs.selectedTab.inputFocused == false) {
            dot.tabs.selectedTab.inputFocused = !dot.tabs.selectedTab.inputFocused
        }
    }

    const onInput = () => {
        if(dot.searchRef.current.value.length !== 0) {
            dot.tabs.selectedTab.showInputPlaceholder = false;
        } else {
            dot.tabs.selectedTab.showInputPlaceholder = true;
        }
    }

    const onKeyUp = (e) => {
        if(e.keyCode == 13) {
            let url = dot.searchRef.current.value;
            let text = url;

            if(url.match(NAKED_DOMAIN_REGEX)) {
                url = "http://" + text;
            }

            if(!url.match(PROTOCOL_REGEX)) {
                url = `https://duckduckgo.com/${encodeURIComponent(text)}`
            }

            dot.addressbar.isEditing = false;
            dot.tabs.selectedTab.url = url;

            ipcRenderer.send('view-navigate', dot.tabs.selectedTab.id, url)

            dot.searchRef.current.blur();
        }
    }

    return (
        <StyledAddressbar>
            <SearchIcon focused={dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused}>
                <Icon icon={"search"} size={14} />
            </SearchIcon>
            <Input 
                placeholder={""} 
                ref={dot.searchRef} 
                onBlur={onSearchBlur} 
                onMouseDown={onMouseDown}
                onClick={onClick} 
                onInput={onInput}
                onKeyUp={(event) => onKeyUp(event)}
                onChange={(event) => onChange(event)}
                value={dot.addressbar.value}
            />
            {dot.tabs.selectedTab && dot.tabs.selectedTab.showInputPlaceholder && <InputPlaceholder focused={dot.tabs.selectedTab && dot.tabs.selectedTab.inputFocused}>Search Google or type a URL</InputPlaceholder>}
        </StyledAddressbar>
    )
})
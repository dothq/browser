import React from 'react';
import { StyledAddressbar, SearchIcon, Input } from "./style"
import { Icon } from '../Icon';
import { observer } from 'mobx-react';

import dot from '../../store'
import { ipcRenderer } from 'electron';

export const Addressbar = observer(() => {
    const onSearchBlur = () => {
        window.getSelection().removeAllRanges()
    }

    const onClick = () => {
        dot.searchRef.current.focus();
        dot.searchRef.current.select();
    }

    const onKeyUp = (e) => {
        if(e.keyCode == 13) {
            const url = dot.searchRef.current.value;

            ipcRenderer.send('view-navigate', dot.tabs.selectedTab.id, url)

            dot.searchRef.current.blur();
        }
    }

    return (
        <StyledAddressbar>
            <SearchIcon>
                <Icon icon={"search"} size={14} />
            </SearchIcon>
            <Input 
                placeholder={"Search or enter address"} 
                ref={dot.searchRef} 
                onBlur={onSearchBlur} 
                onClick={onClick} 
                onKeyUp={(event) => onKeyUp(event)}
            />
        </StyledAddressbar>
    )
})
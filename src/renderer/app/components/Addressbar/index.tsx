import React from 'react';
import { StyledAddressbar, Input } from "./style"
import { observer } from 'mobx-react';

import dot from '../../store'
import { Parts } from './Parts';
import { SearchIcon } from './SearchIcon';

export const Addressbar = observer(() => {
    const events = dot.events;

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
            />
            <Parts />
        </StyledAddressbar>
    )
})
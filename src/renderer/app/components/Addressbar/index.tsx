import React from 'react';
import { StyledAddressbar, Input } from "./style"
import { observer } from 'mobx-react';

import dot from '../../store'
import { Parts } from './Parts';
import { SearchIcon } from './SearchIcon';

export const Addressbar = observer(() => {
    const { 
        inputOnBlur, 
        inputOnMouseDown, 
        inputOnClick, 
        inputOnInput, 
        inputOnKeyUp, 
        inputOnChange
    } = dot.events;

    return (
        <StyledAddressbar>
            <SearchIcon />
            <Input 
                ref={dot.searchRef} 
                onBlur={inputOnBlur} 
                onMouseDown={inputOnMouseDown}
                onClick={inputOnClick} 
                onInput={inputOnInput}
                onKeyUp={(event) => inputOnKeyUp(event)}
                onChange={(event) => inputOnChange(event)}
                value={dot.addressbar.inputValue()}
            />
            <Parts />
        </StyledAddressbar>
    )
})
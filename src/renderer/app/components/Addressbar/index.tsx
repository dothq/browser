import React from 'react';
import { StyledAddressbar, SearchIcon, Input } from "./style"
import { Icon } from '../Icon';

export const Addressbar = () => {
    return (
        <StyledAddressbar>
            <SearchIcon>
                <Icon icon={"search"} size={14} />
            </SearchIcon>
            <Input placeholder={"Search or enter address"} />
        </StyledAddressbar>
    )
}
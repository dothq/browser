import React from 'react';
import { StyledSearchbox, Input } from "./style";

import { observer } from 'mobx-react';

import { Icon } from '@dothq/icon';

export const Searchbox = observer(() => (
    <StyledSearchbox>
        <Icon icon={"search"} size={20} color={"#5E5E5E"} strokeWidth={2} />
        <Input placeholder={"Search Dot Browser Settings"} spellCheck={false} />
    </StyledSearchbox>
))
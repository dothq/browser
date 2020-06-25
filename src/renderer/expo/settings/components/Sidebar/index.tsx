import React from 'react';
import { StyledSidebar, Container } from "./style";

import { observer } from 'mobx-react';

import { Icon } from '@dothq/icon'
import { IconButton } from '../IconButton';
import { H1 } from '../Typography';

export const Sidebar = observer(() => (
    <StyledSidebar>
        <Container>
            <IconButton icon={"user"} size={24} noFill className={"sb-tab-item"} />
            <IconButton icon={"shield"} size={24} noFill className={"sb-tab-item"} />
            <IconButton icon={"droplet"} size={24} noFill className={"sb-tab-item"} />
            <IconButton icon={"search"} size={24} noFill className={"sb-tab-item"} />
            <IconButton icon={"lock"} size={24} noFill className={"sb-tab-item"} /> {/* @todo replace lock with key in settings */}
            <IconButton icon={"chevron-down"} size={24} noFill className={"sb-tab-item"} />
        </Container>
    </StyledSidebar>
))
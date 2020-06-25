import React from 'react';
import { StyledToolbar, Container } from "./style";

import { observer } from 'mobx-react';

import { Icon } from '@dothq/icon'
import { IconButton } from '../IconButton';
import { H1 } from '../Typography';

export const Toolbar = observer(() => (
    <StyledToolbar>
        <Container>
            <IconButton icon={"menu"} size={24} />
            <H1 className={"tb-tpgrpy-center"}>Settings</H1>
        </Container>
    </StyledToolbar>
))
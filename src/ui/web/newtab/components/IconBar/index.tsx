import React from "react";

import { observer } from "mobx-react";
import { StyledIconBar, IconButton, IBEnd } from "./style";

import { Icon } from '@dothq/icon';

export const IconBar = observer(() => (
    <StyledIconBar>
        <IconButton style={{ alignSelf: 'center' }}>
            <Icon icon={"settings"} size={20} color={"#fff"} />
        </IconButton>
        <IBEnd>
            <IconButton>
                <img src={"https://cdn.dothq.co/avatars/47fe3dc1-094e-474e-9c16-fc20dbf0e728.png"} width={32} style={{ borderRadius: '100%' }} />
            </IconButton>
        </IBEnd>
    </StyledIconBar>
))
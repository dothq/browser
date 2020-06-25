import React from 'react';
import { StyledIconButton } from "./style";

import { observer } from 'mobx-react';

import { Icon } from '@dothq/icon'

export const IconButton = observer(({ icon, size, onClick, noFill, className }: { icon: string, size?: number; onClick?: any; noFill?: boolean; className?: any }) => (
    <StyledIconButton onClick={onClick} noFill={noFill} className={className}>
        <Icon icon={icon} size={size} />
    </StyledIconButton>
))
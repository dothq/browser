import * as React from 'react';

import { observer } from 'mobx-react';
import { StyledBubble, Icon } from './style';

export const Bubble = observer(({ icon, style, href }: { icon: any; style?: any; href?: string }) => (
    <StyledBubble style={style} href={href}>
        <Icon 
            icon={icon}
            size={52}
        />
    </StyledBubble>
))
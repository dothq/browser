import { observer } from 'mobx-react';
import { StyledSpotlight, StyledBubbleContainer, Copyright, Bubble } from './style';
import React from 'react';
import { icons } from '~/renderer/views/app/constants';
import { remote } from 'electron';

console.log("process.env.__DOT_UPDATE_AVAILABLE", process.env.__DOT_UPDATE_AVAILABLE)

export const Spotlight = observer(() => (
    <StyledSpotlight>
        <StyledBubbleContainer>
            <Bubble icon={icons.history} />
            <Bubble icon={icons.bookmarks} />
            <Bubble icon={icons.download} />
            <Bubble icon={icons.settings} hasBadge={process.env.__DOT_UPDATE_AVAILABLE == "true" ? true : false} />
            <Bubble icon={icons.extensions} style={{ marginRight: 0 }} />
        </StyledBubbleContainer>
    </StyledSpotlight>
))
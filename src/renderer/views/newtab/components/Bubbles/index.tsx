import * as React from 'react';

import { observer } from 'mobx-react';

import { StyledBubbles, Container } from './style';
import { Bubble } from '../Bubble';
import { icons } from '~/renderer/views/app/constants';

export const Bubbles = observer(() => (
    <StyledBubbles>
        <Container>
            <Bubble icon={icons.touch.google} style={{ marginLeft: 0 }} href={"https://google.com"} />
            <Bubble icon={icons.touch.gmail} href={"https://mail.google.com"} />
            <Bubble icon={icons.touch.youtube} href={"https://youtube.com"} />
            <Bubble icon={icons.touch.amazon} href={"https://amazon.com"} />
            <Bubble icon={icons.touch.twitter} href={"https://twitter.com"} />
        </Container>
    </StyledBubbles>
))
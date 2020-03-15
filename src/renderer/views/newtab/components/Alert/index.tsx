import * as React from 'react';

import { observer } from 'mobx-react';

import { StyledAlert, Container, Title, Text, Flexy } from './style';
import { Icon } from '../../app/style';
import { StyledComponent } from 'styled-components';

export const Alert = observer(({ title, text, children, visible, icon }: { title?: string; text?: string; children?: any[]; visible: boolean; icon: any }) => (
    <StyledAlert visible={visible}>
        <Container>
            <Flexy left style={{ flex: 3 }}>
                <Icon
                    icon={icon}
                    size={24}
                    centered
                    style={{ height: "auto" }}
                />
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Flexy>
            <Flexy right style={{ margin: "10px 0", height: "auto" }}>
                {children}
            </Flexy>
        </Container>
    </StyledAlert>
))
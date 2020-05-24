import React from "react";

import { StyledView, Container, Content, ViewTitle, ViewHeader, ViewSearch, ViewSearchContainer, ViewSubtitle } from "./style";
import { Icon } from "../../../../app/components/Icon";

import dot from '../../store';

export const View = ({ selectedView }: { selectedView: any }) => (
    <StyledView>
        <Container>
            <Content>
                <ViewHeader>
                    <ViewTitle>Settings</ViewTitle>
                    <ViewSubtitle>{dot.sectionName}</ViewSubtitle>
                    <ViewSearchContainer>
                        <ViewSearch placeholder={"Search Settings"} />
                        <Icon icon={"search"} style={{ stroke: 'gray' }}/>
                    </ViewSearchContainer>
                </ViewHeader>
            </Content>
        </Container>
    </StyledView>
)
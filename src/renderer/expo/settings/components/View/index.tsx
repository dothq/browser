import React from "react";

import { StyledView, Container, Content, ViewTitle, ViewHeader, ViewSearch, ViewSearchContainer, ViewSubtitle, ViewContent } from "./style";
import { Icon } from "@dothq/icon";

import dot from '../../store';
import { router } from "../../router";

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
                <ViewContent>
                    {router[dot.selectedSection]}
                </ViewContent>
            </Content>
        </Container>
    </StyledView>
)
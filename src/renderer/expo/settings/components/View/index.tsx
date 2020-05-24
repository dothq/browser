import React from "react";

import { StyledView, Container, Content, ViewTitle, ViewHeader, ViewSearch, ViewSearchContainer } from "./style";
import { Icon } from "../../../../app/components/Icon";

import dot from '../../store';

export const View = ({ selectedView }: { selectedView: any }) => (
    <StyledView>
        <Container>
            <Content>
                <ViewHeader>
                    <ViewTitle>{dot.sectionName}</ViewTitle>
                    <ViewSearchContainer>
                        <ViewSearch placeholder={"Search"} />
                        <Icon icon={"search"} style={{ stroke: 'gray' }}/>
                    </ViewSearchContainer>
                </ViewHeader>
            </Content>
        </Container>
    </StyledView>
)
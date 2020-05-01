import React from "react";
import { StyledTabs, TabsContainer } from "./style";
import { WindowsButtons } from "../WindowsButtons";
import { Tab } from "../Tab";

export const Tabs = () => (
    <StyledTabs>
        <TabsContainer>
            <Tab />
        </TabsContainer>
        <WindowsButtons />
    </StyledTabs>
)
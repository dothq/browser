import React from "react";
import { StyledTabs, TabsContainer } from "./style";
import { WindowsButtons } from "../WindowsButtons";
import { Tab } from "../Tab";
import { platform } from 'os'

import dot from '../../store'
import { NavigationButton } from "../NavigationButton";

const AddTab = () => {
    const onAddTabClick = () => {

    }

    return (
        <NavigationButton icon={"plus"} onClick={onAddTabClick} size={18} />
    )
}

export const Tabs = () => (
    <StyledTabs>
        <TabsContainer>
            {dot.tabs.list.map((tab: any) => (
                <Tab tab={tab} />
            ))}
            <AddTab />
        </TabsContainer>
        {platform() !== "darwin" && <WindowsButtons />}
    </StyledTabs>
)
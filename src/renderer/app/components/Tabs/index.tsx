import React from "react";
import { StyledTabs, TabsContainer, AddTab } from "./style";
import { WindowsButtons } from "../WindowsButtons";
import { Tab } from "../Tab";
import { platform } from 'os'

import dot from '../../store'
import { observer } from "mobx-react";

const onAddTabClick = () => {
    dot.tabs.add({ url: "https://web.tabliss.io/", active: true })
}

export const Tabs = observer(() => {
    window.addEventListener('keyup', (e) => {
        if(e.ctrlKey && e.shiftKey && e.which == 199) {
            dot.debugMode = !!dot.debugMode;
        }
    })

    return (
        <StyledTabs>
            <TabsContainer>
                {dot.tabs.list.map(tab => (
                    <Tab tab={tab} key={tab.id} />
                ))}
                <AddTab onClick={onAddTabClick} />
            </TabsContainer>
            {dot.debugMode && <div>
                
            </div>}
            {platform() !== "darwin" && <WindowsButtons />}
        </StyledTabs>
    )
})
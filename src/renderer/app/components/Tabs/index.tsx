import React from "react";
import { StyledTabs, TabsContainer, AddTab } from "./style";
import { WindowsButtons } from "../WindowsButtons";
import { Tab } from "../Tab";
import { platform } from 'os'

import dot from '../../store'
import { observer } from "mobx-react";
import { remote } from "electron";

const onAddTabClick = () => {
    dot.tabs.add({ url: "https://web.tabliss.io/", active: true })
}

export const Tabs = observer(() => {
    remote.globalShortcut.register('CmdOrCtrl+Alt+Shift+]', () => {
        dot.debugMode = !dot.debugMode;
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
                <p>{dot.tabs.selectedTab.url}</p>
                <p>{dot.tabs.selectedId}</p>
            </div>}
            {platform() !== "darwin" && <WindowsButtons />}
        </StyledTabs>
    )
})
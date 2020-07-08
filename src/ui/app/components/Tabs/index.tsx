import React from "react";
import { StyledTabs, TabsContainer, AddTab } from "./style";
import { Tab } from "../Tab";
import { platform } from 'os'

import dot from '../../store'
import { observer } from "mobx-react";
import { remote } from "electron";
import { AnimatePresence } from "framer-motion";
import { NEWTAB_URL } from "../../../constants/web";

import { WindowsButtons } from '@dothq/system-buttons'

export const Tabs = observer(() => {
    const tabsRef = React.createRef<HTMLDivElement>();

    remote.globalShortcut.register('CmdOrCtrl+Alt+Shift+]', () => {
        dot.debugMode = !dot.debugMode;
    })

    const onAddTabClick = () => {
        dot.tabs.add({ url: NEWTAB_URL, active: true })
    }

    return (
        <StyledTabs>
            <TabsContainer ref={tabsRef}>
                <AnimatePresence>
                    {dot.tabs.list.map(tab => (
                        <Tab tab={tab} key={tab.id} />
                    ))}
                </AnimatePresence>
            </TabsContainer>
            <AddTab onClick={() => onAddTabClick()} left={tabsRef.current && tabsRef.current.getBoundingClientRect().width} />
            {dot.debugMode && <div>
                <p>{dot.tabs.selectedTab.url}</p>
                <p>{dot.tabs.selectedId}</p>
            </div>}
            {platform() !== "darwin" && <div className={"windows-buttons"} >
                <WindowsButtons 
                    ipcPrefix={"app"}
                />
            </div>}
        </StyledTabs>
    )
})
import React from "react"
import { StyledTab, StyledTabContent, TabTitle, TabSeparator } from "./style"
import { Tab as ITab } from "../../mixins/tab"
import { NavigationButton } from "../NavigationButton"
import { observer } from "mobx-react"

import dot from '../../store'
import { ipcRenderer } from "electron"

const onTabMouseDown = (tab: ITab) => {
    if(tab.id !== dot.tabs.selectedId) {
        ipcRenderer.send('view-select', tab.id);
        dot.tabs.selectedId = tab.id;
    }
}

const onTabCloseClick = (id: string) => {
    dot.tabs.close(id);
}

const TabContent = ({ tab }: { tab: ITab }) => (
    <StyledTabContent>
        <TabTitle>New Tab</TabTitle>
    </StyledTabContent>
)

const Close = ({ tab }: { tab: ITab }) => (
    <NavigationButton icon={"x"} size={15} buttonSize={24} onClick={() => onTabCloseClick(tab.id)} />
)

export const Tab = observer(({ tab }: { tab: ITab }) => {
    console.log(dot.tabs.list.findIndex(tab => tab.id == dot.tabs.selectedId), dot.tabs.list.length)

    return (
        <>
            <StyledTab selected={tab.id == dot.tabs.selectedId} onMouseDown={() => onTabMouseDown(tab)}>
                <TabContent tab={tab} />
                <Close tab={tab} />
            </StyledTab>
            <TabSeparator tab={tab} />
        </>
    )
})
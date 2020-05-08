import React from "react"
import { StyledTab, StyledTabContent, TabTitle, Close, TabMotion } from "./style"
import { Tab as ITab } from "../../mixins/tab"
import { observer } from "mobx-react-lite"

import { TAB_WIDTH } from '../../constants/tab'

import dot from '../../store'
import { ipcRenderer } from "electron"

const onTabMouseDown = (tab: ITab) => {
    if(tab.id !== dot.tabs.selectedId) {
        ipcRenderer.send('view-select', tab.id);
        dot.tabs.selectedId = tab.id;
    }
}

const TabContent = ({ tab, onMouseDown }: { tab: ITab; onMouseDown: any }) => (
    <StyledTabContent onMouseDown={onMouseDown}>
        <TabTitle>{tab.title}</TabTitle>
    </StyledTabContent>
)

export const Tab = observer(({ tab }: { tab: ITab }) => {
		const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        if(visible == false) {
            dot.tabs.list = dot.tabs.list.splice(0, dot.tabs.list.findIndex(dotTab => dotTab == tab))
            dot.tabs.selectedId = dot.tabs.replacingId;

            ipcRenderer.send('view-destroy', tab.id)
            ipcRenderer.send('view-select', dot.tabs.replacingId)
        }
    }, [visible])

    const variants = {
        opening: {
            x: 0, 
            opacity: 1, 
            width: TAB_WIDTH, 
            display: 'flex'
        },
        closing: {
            x: -20, 
            opacity: 0, 
            width: 0, 
            minWidth: 0,
            display: 'flex'
        }
    }

    return (
        <TabMotion
            initial={{ x: -TAB_WIDTH, opacity: 0, width: 0 }}
            animate={visible ? 'opening' : 'closing'}
            variants={variants}
            transition={{ duration: 0.2, type: "tween" }}
        >
            <StyledTab selected={tab.id == dot.tabs.selectedId} tab={tab}>
                <TabContent tab={tab} onMouseDown={() => onTabMouseDown(tab)} />
                <Close tab={tab} hook={setVisible} />
            </StyledTab>
        </TabMotion>
    )
})
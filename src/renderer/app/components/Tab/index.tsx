import React from "react"
import { StyledTab, StyledTabContent, TabTitle, Close, TabMotion } from "./style"
import { Tab as ITab } from "../../mixins/tab"
import { observer } from "mobx-react-lite"

import { motion, AnimatePresence} from 'framer-motion';

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
        <TabTitle>{tab.url}</TabTitle>
    </StyledTabContent>
)

export const Tab = observer(({ tab }: { tab: ITab }) => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        if(visible == false) {
            dot.tabs.list = dot.tabs.list.filter(ctab => ctab.id !== tab.id);
            dot.tabs.selectedId = dot.tabs.replacingId;
        }
    }, [visible])

    const variants = {
        opening: {
            x: 0, 
            opacity: 1, 
            width: 218, 
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
        <AnimatePresence>
            <TabMotion
                initial={{ x: -218, opacity: 0, width: 0 }}
                animate={visible ? 'opening' : 'closing'}
                variants={variants}
                transition={{ duration: 0.2, type: "tween" }}
            >
                <StyledTab selected={tab.id == dot.tabs.selectedId}>
                    <TabContent tab={tab} onMouseDown={() => onTabMouseDown(tab)} />
                    <Close tab={tab} hook={setVisible} />
                </StyledTab>
            </TabMotion>
        </AnimatePresence>
    )
})
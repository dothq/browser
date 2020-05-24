import React from "react"
import { StyledTab, StyledTabContent, TabTitle, Close, TabMotion, TabFavicon, TabThrobber } from "./style"
import { Tab as ITab } from "../../models/tab"
import { observer } from "mobx-react-lite"

import { TAB_WIDTH } from '../../constants/tab'

import dot from '../../store'
import { ipcRenderer } from "electron"

const TabContent = observer(({ tab, onMouseDown }: { tab: ITab; onMouseDown: any }) => (
    <StyledTabContent onMouseDown={onMouseDown} title={tab.title}>
        {tab.status == "loading" && !tab.isNTP && <TabThrobber color={tab.themeColor} />}
        {tab.status == "idle" && <TabFavicon style={{ width: !tab.favicon ? '0px' : '', minWidth: !tab.favicon ? '0px' : '' }} src={tab.favicon} />}
        <TabTitle>{tab.title}</TabTitle>
    </StyledTabContent>
))

export const Tab = observer(({ tab }: { tab: ITab }) => {
    const [visible, setVisible] = React.useState(true);
    const [killed, setKilled] = React.useState(false);

    React.useEffect(() => {
        if(visible == false) {
            dot.tabs.close(tab.id)

            setTimeout(() => {
                setKilled(true)
            }, 200);
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
        }
    }

    const events = dot.events;

    return (
        <>
            {!killed && (
                <TabMotion
                    initial={{ x: -TAB_WIDTH, opacity: 0, width: 0 }}
                    animate={visible ? 'opening' : 'closing'}
                    variants={variants}
                    transition={{ duration: 0.2, type: "tween" }}
                >
                    <StyledTab selected={tab.id == dot.tabs.selectedId} themeColor={tab.themeColor} tab={tab}>
                        <TabContent tab={tab} onMouseDown={() => events.tabOnMouseDown(tab)} />
                        <Close tab={tab} hook={setVisible} />
                    </StyledTab>
                </TabMotion>
            )}
        </>
    )
})
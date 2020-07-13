import React from "react"
import { StyledTab, StyledTabContent, TabTitle, Close, TabMotion, TabFavicon, TabThrobber, StyledAction } from "./style"
import { Tab as ITab } from "../../models/tab"
import { observer } from "mobx-react-lite"

import { TAB_WIDTH } from '../../constants/tab'

import dot from '../../store'

import blank from '../../../resources/icons/blank.svg'
import { NavigationButton } from "../NavigationButton"

const TabContent = observer(({ tab }: { tab: ITab }) => (
    <StyledTabContent title={`${tab.title}${tab.isBookmarked ? ` ⭐` : ''}\n${tab.url}`}>
        <TabThrobber 
            visible={tab.status == "loading"} 
            isNTP={!tab.isNTP}
            color={tab.themeColor} 
        />
        <TabFavicon visible={!tab.isNTP} isCached={tab.status == "loading" && true} src={tab.isNTP ? '' : (tab.favicon && tab.favicon.favicon) || ''} />
        <TabTitle>{tab.title || (tab.status == "loading" ? tab.isNTP ? "New Tab" : "Loading..." : tab.url)}</TabTitle>
    </StyledTabContent>
))

const Action = observer(({ tab, action, onClick, visible }: { tab: ITab; action: 'close' | 'mediaPlaying' | 'mediaPaused'; onClick?: any; visible?: boolean; }) => {
    const icons = {
        close: 'x',
        mediaPlaying: 'volume-2',
        mediaPaused: 'pause'
    }

    const icon = icons[action]

    return (
        <StyledAction
            icon={icon} 
            onClick={() => onClick()}
            visible={visible}
            size={15} 
            buttonSize={24}
            iconStyle={{ strokeWidth: 1 }}
            style={{ transition: '0.8s opacity cubic-bezier(0.33, 1, 0.68, 1), 0s width 0.8s' }}
        />
    )
});

export const Tab = observer(({ tab }: { tab: ITab }) => {
    const onCloseClick = () => {
        tab.visible = !tab.visible;

        const length = dot.tabs.list.length;

        length >= 2 && dot.tabs.close(tab.id);

        setTimeout(() => {
            tab.killed = true;
            length == 1 && dot.tabs.close(tab.id);
        }, 200);

    }

    const variants = {
        opening: {
            opacity: 1, 
            width: TAB_WIDTH, 
            display: 'flex'
        },
        closing: {
            opacity: 0, 
            width: 0, 
            minWidth: 0,
        }
    }

    const events = dot.events;

    return (
        <>
            {!tab.killed && (
                <TabMotion
                    initial={{ x: 0, opacity: 0, width: 0 }}
                    animate={tab.visible ? 'opening' : 'closing'}
                    variants={variants}
                    transition={{ duration: 0.2, type: "tween" }}
                    onMouseDown={(e) => events.tabOnMouseDown(e, tab)}
                >
                    <StyledTab selected={tab.id == dot.tabs.selectedId} themeColor={tab.themeColor} tab={tab}>
                        <TabContent tab={tab} />

                        <Action visible={tab.mediaState == 'playing'} tab={tab} action={"mediaPlaying"} />

                        <Action tab={tab} action={"close"} onClick={onCloseClick} />
                    </StyledTab>
                </TabMotion>
            )}
        </>
    )
})
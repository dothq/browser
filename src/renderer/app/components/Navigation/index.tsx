import React from "react";
import { StyledNavigation } from "./style";
import { NavigationButtons } from "../NavigationButtons";
import { NavigationButton } from '../NavigationButton'
import { Addressbar } from "../Addressbar";
import { WindowsButtons } from "../WindowsButtons";
import { ExtensionButtons } from "../ExtensionButtons";
import { Separator, Badge } from "../NavigationButtons/style";
import { observer } from "mobx-react-lite";

import dot from '../../store'

export const Navigation = observer(() => {
    const isLoading = dot.tabs.selectedTab && dot.tabs.selectedTab.status == "loading"
    const navStatus = dot.tabs.selectedTab && dot.tabs.selectedTab.navigationStatus
    const isNTP = dot.tabs.selectedTab && dot.tabs.selectedTab.isNTP

    const events = dot.events;

    return (
        <StyledNavigation>
            <NavigationButtons>
                <NavigationButton 
                    icon={"arrow-left"} 
                    size={18} 
                    disabled={navStatus && !navStatus.canGoBack} 
                    onClick={() => events.navigationOnBackClick()}
                    style={{ transform: 'none' }}
                />
                <NavigationButton 
                    icon={"arrow-right"} 
                    size={18} 
                    disabled={navStatus && !navStatus.canGoForward}
                    onClick={() => events.navigationOnForwardClick()}
                    style={{ transform: 'none' }}
                />
                <NavigationButton icon={
                    isLoading ? 
                        !isNTP 
                            ? "x" 
                            : "rotate-cw" 
                    : "rotate-cw"
                } size={isLoading ? !isNTP ? 18 : 16 : 16} onClick={() => events.navigationOnRefreshClick()} />
            </NavigationButtons>
            <Addressbar />
            <ExtensionButtons>
                <NavigationButton icon={"shield"} size={18} />
                <Separator />
                <NavigationButton icon={"user"} size={18} />
                <NavigationButton icon={"more-horizontal"} size={18} />
            </ExtensionButtons>
        </StyledNavigation>
    )
})
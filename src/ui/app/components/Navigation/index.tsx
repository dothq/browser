import React from "react";
import { StyledNavigation } from "./style";
import { NavigationButtons } from "../NavigationButtons";
import { NavigationButton } from '../NavigationButton'
import { Addressbar } from "../Addressbar"; // @todo swap out the dev addressbar for the prod addressbar
import { ExtensionButtons } from "../ExtensionButtons";
import { Separator } from "../NavigationButtons/style";
import { observer } from "mobx-react-lite";

import dot from '../../store'
import { Badge } from "../NavigationButton/style";
import { WEBUI_PREFIX, WEBUI_SUFFIX, NEWTAB_URL } from "../../../constants/web";

// remove this. 
import { Icon } from "../../../overlay/components/Icon";
import { StyledNavigationButton } from "../NavigationButton/style"

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
                    title={"Click to go back"}
                />
                <NavigationButton 
                    icon={"arrow-right"} 
                    size={18} 
                    disabled={navStatus && !navStatus.canGoForward}
                    onClick={() => events.navigationOnForwardClick()}
                    title={"Click to go forward"}
                />
                <NavigationButton 
                    icon={
                        isLoading ? 
                            !isNTP 
                                ? "x" 
                                : "rotate-cw" 
                        : "rotate-cw"
                    } 
                    size={isLoading ? !isNTP ? 18 : 16 : 16} 
                    onClick={() => events.navigationOnRefreshClick()}
                    title={"Reload this page"}
                />
                <NavigationButton 
                    icon={"home"} 
                    size={16} 
                    visible={dot.dbReady ? dot.db.settings.appearance.showHomeButton : false}
                    onClick={() => events.navigationOnHomeClick()}
                    title={"Open the homepage"}
                />
            </NavigationButtons>
            <Addressbar WEBUI_PREFIX={WEBUI_PREFIX} WEBUI_SUFFIX={WEBUI_SUFFIX} NEWTAB_URL={NEWTAB_URL} dot={dot}/>
            <ExtensionButtons>
                <NavigationButton icon={"shield"} size={18} title={"Adblock"}>
                    {dot.tabs.selectedTab && dot.tabs.selectedTab.blockedAds !== 0 && <Badge>{dot.tabs.selectedTab.blockedAds.toString()}</Badge>}
                </NavigationButton>
                <Separator />
                <NavigationButton icon={"user"} size={18} title={"People"} />
                
                <StyledNavigationButton onClick={dot.events.menuOnClick} ref={dot.menuButtonRef} visible={true} title={"Customise and control Dot Browser"}>
                    <Icon icon={"more-horizontal"} size={18} />
                </StyledNavigationButton>
            </ExtensionButtons>
        </StyledNavigation>
    )
})
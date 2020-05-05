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
    const [refreshAnimStarted, setRefreshAnimStarted] = React.useState(false)

    const onRefreshClick = () => {
        dot.tabs.selectedTab.refresh()
    }

    return (
        <StyledNavigation>
            <NavigationButtons>
                <NavigationButton icon={"arrow-left"} size={18} />
                <NavigationButton icon={"arrow-right"} size={18} />
                <NavigationButton icon={"rotate-cw"} size={16} onClick={onRefreshClick} />
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
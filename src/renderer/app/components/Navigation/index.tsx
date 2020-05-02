import React from "react";
import { StyledNavigation } from "./style";
import { NavigationButtons } from "../NavigationButtons";
import { NavigationButton } from '../NavigationButton'
import { Addressbar } from "../Addressbar";
import { WindowsButtons } from "../WindowsButtons";
import { ExtensionButtons } from "../ExtensionButtons";
import { Seperator, Badge } from "../NavigationButtons/style";

export const Navigation = () => {
    const [refreshAnimStarted, setRefreshAnimStarted] = React.useState(false)

    const onRefreshClick = () => {
        setRefreshAnimStarted(true)

        setTimeout(() => {
            setRefreshAnimStarted(false);
        }, 200);
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
                <Seperator />
                <NavigationButton icon={"user"} size={18} />
                <NavigationButton icon={"more-horizontal"} size={18} />
            </ExtensionButtons>
        </StyledNavigation>
    )
}
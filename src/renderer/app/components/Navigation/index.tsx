import React from "react";
import { StyledNavigation } from "./style";
import { NavigationButtons } from "../NavigationButtons";
import { NavigationButton } from '../NavigationButton'
import { Addressbar } from "../Addressbar";

export const Navigation = () => (
    <StyledNavigation>
        <NavigationButtons>
            <NavigationButton icon={"arrow-left"} size={18} />
            <NavigationButton icon={"arrow-right"} size={18} />
            <NavigationButton icon={"rotate-cw"} size={16} />
        </NavigationButtons>
        <Addressbar />
    </StyledNavigation>
)
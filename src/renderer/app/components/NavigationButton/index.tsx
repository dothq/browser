import React from "react";
import { StyledNavigationButton } from "./style";
import { Icon } from '../Icon'

export const NavigationButton = ({ icon, size }: { icon: any, size?: number }) => {
    return (
        <StyledNavigationButton>
            <Icon icon={icon} size={size} />
        </StyledNavigationButton>
    )
}
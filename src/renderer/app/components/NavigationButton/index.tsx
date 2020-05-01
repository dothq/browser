import React from "react";
import { StyledNavigationButton } from "./style";
import { Icon } from '../Icon'

export const NavigationButton = ({ icon, size, onClick, iconStyle }: { icon: any, size?: number; onClick?: any; iconStyle?: any }) => {
    return (
        <StyledNavigationButton onClick={onClick}>
            <Icon icon={icon} size={size} style={iconStyle} />
        </StyledNavigationButton>
    )
}
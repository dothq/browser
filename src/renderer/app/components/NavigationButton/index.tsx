import React from "react";
import { StyledNavigationButton } from "./style";
import { Icon } from '../Icon'

export const NavigationButton = ({ icon, size, buttonSize, onClick, iconStyle, children, style }: { icon: any, size?: number; buttonSize?: number; onClick?: any; iconStyle?: any; children?: any; style?: any }) => {
    return (
        <StyledNavigationButton onClick={onClick} style={style} size={buttonSize}>
            <Icon icon={icon} size={size} style={iconStyle} />
            {children}
        </StyledNavigationButton>
    )
}
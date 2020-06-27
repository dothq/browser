import React from "react";
import { StyledNavigationButton } from "./style";
import { Icon } from '@dothq/icon'

export const NavigationButton = ({ icon, size, buttonSize, onClick, iconStyle, children, style, disabled, visible }: { icon: any, size?: number; buttonSize?: number; onClick?: any; iconStyle?: any; children?: any; style?: any; disabled?: boolean; visible?: boolean; }) => {
    return (
        <StyledNavigationButton onClick={onClick} style={style} size={buttonSize} disabled={disabled} visible={visible || true}>
            <Icon icon={icon} size={size} style={iconStyle}/>
            {children}
        </StyledNavigationButton>
    )
}
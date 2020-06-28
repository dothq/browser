import React from "react";
import { StyledNavigationButton } from "./style";
import { Icon } from '@dothq/icon'
import { observer } from "mobx-react";

export const NavigationButton = observer(({ icon, size, buttonSize, onClick, iconStyle, children, style, disabled, visible }: { icon: any, size?: number; buttonSize?: number; onClick?: any; iconStyle?: any; children?: any; style?: any; disabled?: boolean; visible?: boolean; }) => {
    return (
        <StyledNavigationButton onClick={onClick} style={style} size={buttonSize} disabled={disabled} visible={typeof(visible) == "undefined" ? true : visible}>
            <Icon icon={icon} size={size} style={iconStyle}/>
            {children}
        </StyledNavigationButton>
    )
})
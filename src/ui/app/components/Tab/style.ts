import styled, { css } from "styled-components";
import { Tab } from '../../models/tab';
import { NavigationButton } from "../NavigationButton";
import { motion } from "framer-motion";

import throbber from '../../../resources/icons/throbber.svg'
import tab_corner_left from '../../../resources/icons/tab_corner_left.svg'
import tab_corner_right from '../../../resources/icons/tab_corner_right.svg'

export const TabMotion = styled(motion.div)`
    min-width: 93px;
    display: flex;
`;

export const StyledTab = styled.div`
    width: -webkit-fill-available;
    height: calc(100%);
    display: flex;
    align-self: flex-end;
    -webkit-app-region: no-drag;
    padding-right: 4px;
    position: relative;
    border-radius: ${props => props.theme.tab.borderRadius.map(b => b + "px").join(" ")};
    border-bottom: none;

    ${({ selected, themeColor, tab }: { selected: boolean; themeColor: string; tab: Tab }) => css`
        background-color: ${selected ? props => props.theme.tab.backgroundColor : props => props.theme.tab.defaultBackgroundColor};
        z-index: ${selected ? 2 : 1};
        opacity: ${selected ? props => props.theme.tab.selectedOpacity : props => props.theme.tab.defaultOpacity};

        &:before {
            content: "";
            position: absolute;
            width: 8.5px;
            height: 8px;
            mask-image: url(${tab_corner_left});
            bottom: 0;
            left: -8px;
            background-color: ${
                props => props.theme.tab.cornerPieces.left
                    ? props => props.theme.tab.cornerPieces.backgroundColor
                    : 'transparent'
            };
            opacity: ${
                props => props.theme.tab.cornerPieces.left 
                    ? selected
                        ? 1
                        : 0
                    : 0
            };

        }

        &:after {
            content: "";
            position: absolute;
            width: 8.5px;
            height: 8px;
            mask-image: url(${tab_corner_right});
            bottom: 0px;
            right: -8.9px;
            background-color: ${
                props => props.theme.tab.cornerPieces.right
                    ? props => props.theme.tab.cornerPieces.backgroundColor
                    : 'transparent'
            };
            opacity: ${
                props => props.theme.tab.cornerPieces.right
                    ? selected
                        ? 1
                        : 0
                    : 0
            };
        }

        &:hover {
            background-color: ${selected ? props => props.theme.tab.hover.selected : props => props.theme.tab.hover.default};
            opacity: ${selected ? '' : props => props.theme.tab.hover.opacity};
        }
    `};
`;

export const StyledTabContent = styled.div`
    width: 100%;
    overflow: hidden;
    padding-left: 12px;
    max-width: 214px;
    display: flex;
`;

export const TabTitle = styled.div`
    font-size: ${props => props.theme.tab.textSize};
    line-height: 16px;
    font-weight: 400;
    white-space: nowrap;
    display: flex;
    height: 100%;
    align-items: center;
    color: ${props => props.theme.tab.textColor};
    font-family: ${
        props => props.theme.tab.font == "inherit" 
            ? props => props.theme.global.font == "default"
                ? "system-ui"
                : props => props.theme.global.font
            : props => props.theme.tab.font == "default"
                ? "system-ui"
                : props => props.theme.tab.font
    };

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 32px;
        height: 100%;
        width: 50px;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
    }
`;

const TabIcon = styled.div`
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    display: flex;
    align-self: center;
    transition: 0.3s margin-right;
`;

export const TabFavicon = styled(TabIcon)`
    ${({ src }: { src: any }) => css`
        background-image: url(${src});
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: ${src ? '8px' : '0px'};
    `}
`;

export const TabThrobber = styled(TabIcon)`
    mask-image: url(${throbber});
    background-color: ${props => props.theme.tab.throbber.backgroundColor};
    margin-right: 8px;
`;

export const Close = styled(NavigationButton).attrs(() => ({
    icon: 'x',
    size: 15,
    buttonSize: 24,
    iconStyle: { strokeWidth: 1 },
    style: { position: 'absolute', right: '4px', zIndex: '100000' },
    className: 'close'
}))``;
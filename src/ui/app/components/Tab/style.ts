import styled, { css } from "styled-components";
import { Tab } from '../../models/tab';
import { NavigationButton } from "../NavigationButton";
import { motion } from "framer-motion";

import throbber from '../../../resources/icons/throbber.svg'
import tab_corner_left from '../../../resources/icons/tab_corner_left.svg'
import tab_corner_right from '../../../resources/icons/tab_corner_right.svg'
import { TAB_WIDTH } from "../../constants/tab";

export const TabMotion = styled(motion.div)`
    min-width: 38px;
    display: flex;

    ${({ isPinned }: { isPinned: boolean }) => css`
        transition: ${isPinned ? '0.3s width' : ''};
        width: ${isPinned ? '38px !important' : ''};
    `};
`;

export const StyledTab = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-self: flex-end;
    -webkit-app-region: no-drag;
    padding-right: 4px;
    position: relative;
    border-radius: ${props => props.theme.tab.borderRadius.map(b => b + "px").join(" ")};
    border-bottom: none;
    transition: 0.2s ease-in-out background-color, 0.3s width;
    overflow: hidden;

    ${({ selected, themeColor, tab }: { selected: boolean; themeColor: string; tab: Tab }) => css`
        background-color: ${selected ? props => props.theme.tab.backgroundColor : props => props.theme.tab.defaultBackgroundColor};
        z-index: ${selected ? 2 : 1};
        opacity: ${selected ? props => props.theme.tab.selectedOpacity : props => props.theme.tab.defaultOpacity};

        width: ${tab.isPinned ? 38 : ''}px;

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
                    ? 1
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
                    ? 1
                    : 0
            };
        }

        &:after {
            opacity: ${selected ? 1 : 0};
        }

        &:before {
            opacity: ${selected ? 1 : 0};
            background-color: ${selected ? props => props.theme.tab.hover.selected : props => props.theme.tab.hover.default};
        }

        &:hover {
            background-color: ${selected ? props => props.theme.tab.hover.selected : props => props.theme.tab.hover.default};
            opacity: ${selected ? '' : props => props.theme.tab.hover.opacity};

            &:after {
                opacity: 1;
                background-color: ${selected ? props => props.theme.tab.hover.selected : props => props.theme.tab.hover.default};
            }

            &:before {
                opacity: 1;
                background-color: ${selected ? props => props.theme.tab.hover.selected : props => props.theme.tab.hover.default};
            }
        }
    `};
`;

export const StyledTabContent = styled.div`
    width: 100%;
    overflow: hidden;
    padding-left: 12px;
    max-width: 220px;
    display: flex;
`;

export const TabTitle = styled.div`
    font-size: ${props => props.theme.tab.textSize};
    line-height: 34px;
    font-weight: 400;
    white-space: nowrap;
    display: block;
    height: 100%;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ visible }: { visible: boolean }) => css`
        transition: 0.3s opacity;
        opacity: ${visible ? 1 : 0};
    `};
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
    ${({ src, visible, isCached }: { src: any; visible: boolean; isCached: boolean }) => css`
        width: ${visible ? '' : 0}px;
        min-width: ${visible ? '' : 0}px;

        transform: scale(${isCached ? 0.55 : 1});
        border-radius: ${isCached ? 36 : 2}px;

        position: absolute;

        background-image: url(${src});
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: ${src ? '8px' : '0px'};

        transition: 0.15s transform, 0.15s border-radius;
    `}
`;

export const TabThrobber = styled(TabIcon)`
    mask-image: url(${throbber});
    background-color: ${props => props.theme.tab.throbber.backgroundColor};

    ${({ visible, isNTP }: { visible: boolean; isNTP: boolean }) => css`
        width: ${isNTP ? '' : 0}px;
        min-width: ${isNTP ? '' : 0}px;

        margin-right: ${isNTP ? 8 : 0}px;

        opacity: ${visible ? 1 : 0};
        transition: 0.3s opacity, 0.3s width;
    `}
`;

export const Close = styled(NavigationButton).attrs(() => ({
    icon: 'x',
    size: 15,
    buttonSize: 24,
    iconStyle: { strokeWidth: 1 },
    style: { position: 'absolute', right: '4px', zIndex: '100000' },
    className: 'close'
}))``;

export const StyledAction = styled(NavigationButton)`
    transition: 0.8s opacity cubic-bezier(0.33, 1, 0.68, 1), 0s width 0.8s;

    ${({ visible }: { visible: boolean; }) => css`
        width: ${visible ? '' : 0}px;
        min-width: ${visible ? '' : 0}px;

        opacity: ${visible ? 1 : 0};
    `}
`;

export const ActionContainer = styled.div`
    display: flex;
`;
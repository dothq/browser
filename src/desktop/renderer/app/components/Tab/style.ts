import styled, { css } from "styled-components";
import { Separator } from "../NavigationButtons/style";

import dot from '../../store';
import { Tab } from '../../models/tab';
import { NavigationButton } from "../NavigationButton";
import { motion } from "framer-motion";

import { TAB_WIDTH } from '../../constants/tab'

import throbber from '../../../../../resources/icons/throbber.svg'
import tab_corner_left from '../../../../../resources/icons/tab_corner_left.svg'
import tab_corner_right from '../../../../../resources/icons/tab_corner_right.svg'

export const TabMotion = styled(motion.div)`
    min-width: 93px;
    display: flex;
`;

export const StyledTab = styled.div`
    width: ${TAB_WIDTH}px;
    height: calc(100%);
    display: flex;
    align-self: flex-end;
    -webkit-app-region: no-drag;
    padding-right: 4px;
    position: relative;
    border-radius: 6px 6px 0 0;
    border-bottom: none;
    top: 1px;
    box-shadow: 0 1px white;

    ${({ selected, themeColor, tab }: { selected: boolean; themeColor: string; tab: Tab }) => css`
        background-color: ${selected ? 'white' : '#ffffff00'};
        z-index: ${selected ? 2 : 1};
        opacity: ${selected ? 1 : 0.7};

        &:before {
            content: "";
            position: absolute;
            width: 8.5px;
            height: 8px;
            background-image: url(${tab_corner_left});
            bottom: -1px;
            left: -7px;
            opacity: ${selected ? 1 : 0};
        }

        &:after {
            content: "";
            position: absolute;
            width: 8.5px;
            height: 8px;
            background-image: url(${tab_corner_right});
            bottom: -1px;
            right: -8px;
            opacity: ${selected ? 1 : 0};
        }

        &:hover {
            background-color: ${selected ? '' : '#e0e0e0'};
            opacity: ${selected ? '' : 1};
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
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    white-space: nowrap;
    display: flex;
    height: 100%;
    align-items: center;
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

    ${({ color }: { color: any }) => css`
        background-color: ${color};
        margin-right: ${color ? '8px' : '0px'};
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
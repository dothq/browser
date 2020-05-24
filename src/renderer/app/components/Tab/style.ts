import styled, { css } from "styled-components";
import { Separator } from "../NavigationButtons/style";

import dot from '../../store';
import { Tab } from '../../models/tab';
import { NavigationButton } from "../NavigationButton";
import { motion } from "framer-motion";

import { TAB_WIDTH } from '../../constants/tab'

import throbber from '../../../../resources/icons/throbber.svg'

export const TabMotion = styled(motion.div)`
    min-width: 93px;
    display: flex;
`;

export const StyledTab = styled.div`
    width: ${TAB_WIDTH}px;
    height: calc(100% - 4px);
    display: flex;
    align-self: flex-end;
    -webkit-app-region: no-drag;
    padding-right: 4px;
    overflow: hidden;
    position: relative;
    border-radius: 6px 6px 0 0;
    transition: 0.2s background-color, 0.2s box-shadow; 

    ${({ selected, themeColor, tab }: { selected: boolean; themeColor: string; tab: Tab }) => css`
        background-color: ${selected ? 'white' : '#ffffff00'};
        box-shadow: ${selected ? `0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108), inset 0px -3px 0px ${themeColor}` : ''};

        &:hover {
            background-color: ${selected ? '' : '#0000000d'};
            box-shadow: ${selected ? '' : 'inset 0px -3px 0px #e1dfdd'}
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
    style: { position: 'absolute', right: '4px' }
}))``;
import styled, { css } from "styled-components";
import { Separator } from "../NavigationButtons/style";

import dot from '../../store';
import { Tab } from '../../mixins/tab';
import { NavigationButton } from "../NavigationButton";
import { motion } from "framer-motion";

import { TAB_WIDTH } from '../../constants/tab'

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

    ${({ selected, tab }: { selected: boolean; tab: Tab }) => css`
        background-color: ${selected ? 'white' : '#ffffff00'};
        box-shadow: ${selected ? '0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108), inset 0px -3px 0px #0070F3' : ''};

        &:hover {
            background-color: ${selected ? '' : '#0000000d'};
            box-shadow: ${selected ? '' : 'inset 0px -3px 0px rgba(0, 0, 0, 0.15)'}
        }
    `};
`;

export const StyledTabContent = styled.div`
    width: 100%;
    overflow: hidden;
    padding-left: 12px;
`;

export const TabTitle = styled.div`
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
    display: flex;
    height: 100%;
    align-items: center;
`;

export const Close = styled(NavigationButton).attrs((props: { tab: Tab, hook: any }) => ({
    icon: 'x',
    size: 15,
    buttonSize: 24,
    iconStyle: { strokeWidth: 1 },
    style: { position: 'absolute', right: '4px' },
    onClick: () => { 
        props.hook(a => !a);
        dot.tabs.close(props.tab.id) ;
    }
}))`
    ${({ tab, hook }: { tab: Tab; hook: any }) => css`
        position: absolute;
        right: 4px;
    `}
`;
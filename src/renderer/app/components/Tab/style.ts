import styled, { css } from "styled-components";
import { Separator } from "../NavigationButtons/style";

import dot from '../../store';
import { Tab } from '../../mixins/tab';
import { NavigationButton } from "../NavigationButton";
import { motion } from "framer-motion";

export const TabMotion = styled(motion.div)`
    min-width: 93px;
    display: flex;
`;

export const StyledTab = styled.div`
    width: 218px;
    height: calc(100% - 4px);
    display: flex;
    align-self: flex-end;
    border-radius: 6px 6px 0 0;
    -webkit-app-region: no-drag;
    padding-right: 4px;
    margin: 0 0.5px;
    overflow: hidden;
    position: relative;
    transition: 0.2s background-color;

    ${({ selected }: { selected: boolean }) => css`
        background-color: ${selected ? 'white' : '#ffffff00'};
        
        &:hover {
            background-color: ${selected ? '' : '#0000000d'};
        }
    `};
`;

export const StyledTabContent = styled.div`
    width: 100%;
    overflow: hidden;
    padding-left: 12px;
`;

export const TabTitle = styled.div`
    font-size: 14px;
    white-space: nowrap;
    display: flex;
    height: 100%;
    align-items: center;
`;

export const Close = styled(NavigationButton).attrs((props: { tab: Tab, hook: any }) => ({
    icon: 'x',
    size: 15,
    buttonSize: 24,
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
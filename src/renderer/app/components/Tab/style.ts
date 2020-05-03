import styled, { css } from "styled-components";
import { Separator } from "../NavigationButtons/style";

import dot from '../../store';
import { Tab } from '../../mixins/tab';

export const TabSeparator = styled(Separator)`
    margin: 0;
    background-color: #bbbbbb;
    height: calc(100% - 24px);
    margin-top: 4px;
    opacity: 1;
    transition: 0.3s opacity;

    ${({ tab }: { tab: Tab }) => css`
        // opacity: ${dot.tabs.list.findIndex(tab => tab.id == dot.tabs.selectedId) !== dot.tabs.list.length - 1 ? 1 : 0};
    `};
`;

export const StyledTab = styled.div`
    width: 218px;
    height: calc(100% - 4px);
    display: flex;
    align-self: flex-end;
    border-radius: 6px 6px 0 0;
    -webkit-app-region: no-drag;
    padding-left: 12px;
    padding-right: 4px;
    margin: 0 0.5px;
    opacity: 0;
    max-width: 0px;
    transition: 0.6s max-width, 0.4s opacity, 0.3s background-color;

    animation: slidein 0.2s forwards;
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
    animation-play-state: running;

    @keyframes slidein {
        0% {
            max-width: 0px;
            opacity: 0;
        }
        5% {
            transform: matrix(1, 0, 0, 1, -240, 0);
        }
        40% {
            opacity: 1;
        }
        100% {
            transform: matrix(1, 0, 0, 1, 0, 0) !important;
            max-width: 218px;
            opacity: 1;
        }
    }

    ${({ selected }: { selected: boolean }) => css`
        background-color: ${selected ? 'white' : '#ffffff00'};
        
        &:hover {
            background-color: ${selected ? '' : '#0000000d'};

            &:${TabSeparator} {
                opacity: 0;
            }
        }
    `};
`;

export const StyledTabContent = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const TabTitle = styled.div`
    font-size: 14px;
    white-space: nowrap;
    display: flex;
    height: 100%;
    align-items: center;
`;
import styled, { css } from "styled-components";

import dot from '../../store';

export const Style = css`
    body {
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.global.font == "default" ? "system-ui" : props => props.theme.global.font};
        background-color: transparent;
        overflow: hidden;
    }

    *::selection {
        background-color: ${props => props.theme.global.selection.backgroundColor};
        color: ${props => props.theme.global.selection.color};
    }
    
    * {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }

    *:not(input) {
        user-select: none;
    }

    .windows-buttons {
        display: flex;
        justify-content: flex-end;
        flex: 1;
    }

    .windows-buttons div {
        background-color: ${props => props.theme.tabsBar.backgroundColor};
        flex: unset;
    }

    .windows-buttons div:hover {
        --c: ${props => props.theme.windowsButtons.invert ? 255 : 0};
        background-color: rgba(var(--c), var(--c), var(--c), 0.025);
        flex: unset;
    }

    .windows-buttons div div:last-of-type:hover {
        background-color: #e81123;
        flex: unset;
    }

    .windows-buttons svg {
        filter: ${props => props.theme.windowsButtons.invert ? 'invert(1)' : 'invert(0)'}; 
    }
`;

export const StyledApp = styled.div`
    height: 100vh;

    transition: 0.3s margin-top;

    ${({ isFullscreen }: { isFullscreen: boolean }) => css`
        margin-top: ${isFullscreen ? `-${dot.navigationHeight}px` : ``};
    `};
`;

export const Line = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.line.backgroundColor};
    
    ${({ fromTop }: { fromTop: number }) => css`
        top: ${fromTop - 1}px;
    `};
`;
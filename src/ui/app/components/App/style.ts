import styled, { css } from "styled-components";

import dot from '../../store';

export const Style = css`
    body {
        margin: 0;
        padding: 0;
        font-family: system-ui;
        background-color: transparent;
        overflow: hidden;
    }

    *::selection {
        background-color: #0078d4;
        color: white;
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
    background-color: #eaeaea;
    
    ${({ fromTop }: { fromTop: number }) => css`
        top: ${fromTop - 1}px;
    `};
`;
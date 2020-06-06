import styled, { css } from "styled-components";

export const Style = css`
    body {
        margin: 0;
        padding: 0;
        font-family: system-ui;
        background-color: white;
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
`;
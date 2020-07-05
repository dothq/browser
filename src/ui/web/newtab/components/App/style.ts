import styled, { css } from "styled-components";

export const Style = css`
    body {
        margin: 0;
        padding: 0;
        font-family: system-ui;
        background-color: white;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    *::selection {
        background-color: rgba(190, 215, 248, 0.4)	
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
    display: flex;
    flex-direction: column;

    animation: fadein .5s ease 0s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;
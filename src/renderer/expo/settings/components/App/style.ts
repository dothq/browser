import styled, { css } from "styled-components";

export const Style = css`
    body {
        margin: 0;
        padding: 0;
        font-family: system-ui;
        background-color: transparent;
        overflow: hidden;
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

    .tb-tpgrpy-center {
        height: 64px;
        display: flex;
        align-items: center;

        padding-left: 20px;
        margin-top: -2.5px;
    }

    .sb-tab-item {
        width: 100%;
        height: 64px;
        min-height: 64px;
    }

    .sb-end {
        display: flex;
        flex-direction: column;
        place-content: flex-end;
        flex: 1;
    }

    .sb-tab-selected svg {
        stroke: #0075FF !important;
    }
`;

export const StyledApp = styled.div`
    height: 100vh;
    display: flex;
`;

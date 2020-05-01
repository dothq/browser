import styled, { css } from "styled-components";

export const Style = css`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Inter", system-ui;
    }

    *::selection {
        background-color: rgb(190, 215, 248)	
    }
`;

export const StyledApp = styled.div`
    height: 100vh;
`;
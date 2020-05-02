import styled, { css } from "styled-components";
import { fonts } from "../../../constants/fonts";

export const Style = css`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Inter", system-ui;
        background-color: white;
    }

    *::selection {
        background-color: rgb(190, 215, 248)	
    }
    
    * {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url(${fonts.inter.thin.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url(${fonts.inter.extralight.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(${fonts.inter.light.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${fonts.inter.regular.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(${fonts.inter.medium.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(${fonts.inter.semibold.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(${fonts.inter.bold.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url(${fonts.inter.extrabold.font}) format("woff2");
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(${fonts.inter.black.font}) format("woff2");
    }
`;

export const StyledApp = styled.div`
    height: 100vh;
`;
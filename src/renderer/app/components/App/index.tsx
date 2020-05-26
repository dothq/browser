import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { Tabs } from '../Tabs';
import { Navigation } from '../Navigation';

import dot from '../../store'
import { observer } from 'mobx-react';

import { fonts } from "../../../constants/fonts";
import { remote } from 'electron';

const GlobalStyle = createGlobalStyle`${Style}`;

const style = document.createElement('style')

style.textContent = `
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
`

document.head.appendChild(style)

Array.from(Array(9).keys()).forEach(n => {
    remote.globalShortcut.register(`CmdOrCtrl+${n+1}`, () => {
        if(!dot.tabs.list[n]) return;
        dot.tabs.select(dot.tabs.list[n].id)
    }) 
});

remote.globalShortcut.register(`CmdOrCtrl+0`, () => {
    if(!dot.tabs.list[9]) return;
    dot.tabs.select(dot.tabs.list[9].id)
}) 

export const App = observer(() => (
    <StyledApp>
        <GlobalStyle />
        <Tabs />
        <Navigation />
    </StyledApp>
))
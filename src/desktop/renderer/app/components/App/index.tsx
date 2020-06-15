import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { Tabs } from '../Tabs';
import { Navigation } from '../Navigation';

import dot from '../../store'
import { observer } from 'mobx-react';

import { remote } from 'electron';

const GlobalStyle = createGlobalStyle`${Style}`;

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
    <StyledApp isFullscreen={dot.fullscreen}>
        <GlobalStyle />
        <Tabs />
        <Navigation />
    </StyledApp>
))
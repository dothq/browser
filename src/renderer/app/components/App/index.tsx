import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { Tabs } from '../Tabs';
import { Navigation } from '../Navigation';

import dot from '../../store'

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = () => (
    <StyledApp>
        <GlobalStyle />
        <Tabs />
        <Navigation />
    </StyledApp>
)

dot.tabs.add({ id: 4, url: "https://google.com" })
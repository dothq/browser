import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { Tabs } from '../Tabs';
import { Navigation } from '../Navigation';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = () => (
    <StyledApp>
        <GlobalStyle />
        <Tabs />
        <Navigation />
    </StyledApp>
)
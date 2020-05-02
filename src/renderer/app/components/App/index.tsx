import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { Tabs } from '../Tabs';
import { Navigation } from '../Navigation';

import dot from '../../store'
import { observer } from 'mobx-react';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => (
    <StyledApp>
        <GlobalStyle />
        <Tabs />
        <Navigation />
    </StyledApp>
))
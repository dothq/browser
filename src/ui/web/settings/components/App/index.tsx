import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { observer } from 'mobx-react';

import dot from '../../store';

import { Toolbar } from '../Toolbar';
import { Sidebar } from '../Sidebar';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => (
    <StyledApp>
        <GlobalStyle />
        <Toolbar />
        <Sidebar />
    </StyledApp>
))
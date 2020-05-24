import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { observer } from 'mobx-react';

import { Sidebar } from '../Sidebar';
import { View } from '../View';

import dot from '../../store';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => (
    <StyledApp>
        <GlobalStyle />
        <Sidebar />
        <View selectedView={dot.selectedSection} />
    </StyledApp>
))
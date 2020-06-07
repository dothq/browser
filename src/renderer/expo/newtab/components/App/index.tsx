import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { observer } from 'mobx-react';
import { Hero } from '../Hero';
import { News } from '../News';

import dot from '../../store'

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => (
    <StyledApp>
        <GlobalStyle />
        <Hero />
        {dot.news && <News />}
    </StyledApp>
))
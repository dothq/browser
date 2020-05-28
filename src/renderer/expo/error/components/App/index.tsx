import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

import { observer } from 'mobx-react';

import { Error } from '../Error'
import { Support } from '../Support'

import dot from '../../store';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => (
    <StyledApp>
        <GlobalStyle />
        <Error />
        <Support />
    </StyledApp>
))
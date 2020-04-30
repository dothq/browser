import React from 'react';
import { StyledApp, Style } from "./style";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = () => (
    <StyledApp>
        <GlobalStyle />
    </StyledApp>
)
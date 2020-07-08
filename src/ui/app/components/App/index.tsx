import React from 'react';
import { StyledApp, Style, Line } from "./style";
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Tabs } from '../Tabs';
import { Navigation } from '../Navigation';
import { Bookmarks } from '../Bookmarks';

import dot from '../../store'
import { observer } from 'mobx-react';

const GlobalStyle = createGlobalStyle`${Style}`;

export const App = observer(() => (
    <ThemeProvider theme={dot.themeData}>
        <StyledApp isFullscreen={dot.fullscreen}>
            <GlobalStyle />
            <Tabs />
            <Navigation />
            {/* {dot.dbReady && dot.db.settings.appearance.showBookmarksBar && <Bookmarks />} */}
            <Line fromTop={dot.navigationHeight} />
        </StyledApp>
    </ThemeProvider>
))
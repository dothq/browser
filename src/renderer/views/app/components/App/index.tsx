import { observer } from 'mobx-react';
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Style } from '../../style';
import { Toolbar } from '../Toolbar';
import { Line, StyledApp } from './style';
import { WindowsButtons } from '../WindowsButtons';

import store from '../../store';
import { platform } from 'os';

const GlobalStyle = createGlobalStyle`${Style}`;

const App = observer(() => {
  return (
    <ThemeProvider theme={store.theme}>
      <StyledApp >
        <GlobalStyle />
        <Toolbar />
        <Line />
        {platform() !== 'darwin' && <WindowsButtons />}
      </StyledApp>
    </ThemeProvider>
  );
});

export default App;

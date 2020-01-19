import { observer } from 'mobx-react';
import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Style } from '../../style';
import { Toolbar } from '../Toolbar';
import { Overlay } from '../Overlay';
import { Line, StyledApp, Screenshot } from './style';
import { WindowsButtons } from '../WindowsButtons';

import store from '../../store';
import { platform } from 'os';

const GlobalStyle = createGlobalStyle`${Style}`;

store.tabGroups.addGroup();

const App = observer(() => {
  return (
    <ThemeProvider theme={store.theme}>
      <StyledApp >
        <GlobalStyle />
        <Toolbar />
        <Line />
        <Screenshot img={store.overlay.screenshot} />
        <Overlay />
        {platform() !== 'darwin' && <WindowsButtons />}
      </StyledApp>
    </ThemeProvider>
  );
});

export default App;

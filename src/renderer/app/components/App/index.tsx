import { observer } from 'mobx-react';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Style } from '~/renderer/app/style';
import { Toolbar } from '../Toolbar';
import { ipcRenderer } from 'electron';
import { Line, StyledApp, Screenshot } from './style';
import { WindowsButtons } from '../WindowsButtons';
import store from '../../store';
import { platform } from 'os';
import { Overlay } from '../Overlay';

const GlobalStyle = createGlobalStyle`${Style}`;

window.onbeforeunload = () => {
  ipcRenderer.send('browserview-clear');
};

export const App = observer(() => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Toolbar />
      <Line />
      <Screenshot
        style={{
          backgroundImage: `url(${store.tabs.selectedTab &&
            store.tabs.selectedTab.screenshot})`,
          opacity: store.overlay.screenshotVisible ? 1 : 0,
        }}
      />
      <Overlay />
      {platform() !== 'darwin' && <WindowsButtons />}
    </StyledApp>
  );
});

import { observer } from 'mobx-react';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Style } from '~/renderer/app/style';
import { Toolbar } from '../Toolbar';
import { ipcRenderer } from 'electron';
import { Line, StyledApp, Screenshot} from './style';
import { WindowsButtons } from '../WindowsButtons';
import store from '../../store';
import { platform } from 'os';
import { Overlay } from '../Overlay';
import { icons } from '../../constants'

const GlobalStyle = createGlobalStyle`${Style}`;

store.weather.load()

window.onbeforeunload = () => {
  ipcRenderer.send('browserview-clear');
};

export const App = observer(() => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Toolbar />
      <Line />
      <Screenshot/>
      <Overlay />
      {platform() !== 'darwin' && <WindowsButtons />}
    </StyledApp>
  );
});

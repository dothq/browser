import * as React from 'react';
import { observer } from 'mobx-react';
import { createGlobalStyle } from 'styled-components';

import { Style } from '../../style';
import { StyledApp } from './style';
import { URL } from '../URL';
import store from '../../store';


const GlobalStyle = createGlobalStyle`${Style}`;

const App = observer(() => {
  return (
    <StyledApp visible={store.visible}>
      <URL />
      <GlobalStyle />
    </StyledApp>
  );
})

export default App;
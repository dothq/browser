import * as React from 'react';

import * as ReactDOM from 'react-dom';
import NewTab from './app/index';
import { Style } from './app/style';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`${Style}`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <NewTab />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

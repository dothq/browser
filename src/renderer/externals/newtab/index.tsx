import * as React from 'react';

import * as ReactDOM from 'react-dom';
import NewTab from './app/index';
import { Style } from './app/style';
import { createGlobalStyle } from 'styled-components';

const App = () => {
  return <NewTab />;
};

ReactDOM.render(<App />, document.getElementById('app'));

import * as React from 'react';

import * as ReactDOM from 'react-dom';
import Search from './app/index';

const App = ({ style }: { style: any }) => {
  return <Search style={style} />;
};

ReactDOM.render(
  <App style={{ overflow: 'hidden', margin: '0px', width: 'auto' }} />,
  document.getElementById('app'),
);

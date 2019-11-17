import * as React from 'react';

import * as ReactDOM from 'react-dom';
import Search from './app/index';
import { fonts } from '../../constants';

const styleElement = document.createElement('style');

styleElement.textContent = `
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${fonts.robotoRegular}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(${fonts.robotoMedium}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url(${fonts.robotoLight}) format('woff2');
}
`;

document.head.appendChild(styleElement);

const App = ({ style }: { style: any }) => {
  return <Search style={style} />;
};

ReactDOM.render(
  <App style={{ overflow: 'hidden', margin: '0px', width: 'auto', boxShadow: '0 0 0px 2px #b3cefb', fontFamily: 'Roboto' }} />,
  document.getElementById('app'),
);

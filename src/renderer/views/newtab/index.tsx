import * as React from 'react';

import * as ReactDOM from 'react-dom';
import { App } from './app';
import { fonts } from '../app/constants/fonts';
import { createMount } from '~/shared/utils/webui';

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

@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 600;
  src: url(${fonts.slabBold}) format('woff2');
}
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  src: url(${fonts.slabMedium}) format('woff2');
}
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  src: url(${fonts.slabRegular}) format('woff2');
}
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 300;
  src: url(${fonts.slabLight}) format('woff2');
}
@font-face {
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 200;
  src: url(${fonts.slabThin}) format('woff2');
}

*::selection {
  background-color: #1a73e845;
}
`;

document.head.appendChild(styleElement);

createMount(document);

ReactDOM.render(<App />, document.getElementById("app"));
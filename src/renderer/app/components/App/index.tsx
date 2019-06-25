import { observer } from 'mobx-react';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';


import { Style } from '~/renderer/app/style';
import { Toolbar } from '../Toolbar';
import { ipcRenderer, remote } from 'electron';
import { Line, StyledApp, Screenshot} from './style';
import { WindowsButtons } from '../WindowsButtons';
import store from '../../store';
import { platform } from 'os';
import { Overlay } from '../Overlay';
import console = require('console');
import { writeFileSync, readFileSync, existsSync, appendFile } from 'fs';
import { getPath } from '~/shared/utils/paths';
import { ViewManager } from '~/main/view-manager';

const GlobalStyle = createGlobalStyle`${Style}`;

store.weather.load()
store.news.load();

// Locale loader

store.locale.loadUK()

window.onbeforeunload = () => {
  ipcRenderer.send('browserview-clear');
};

const errorLogPath = getPath('dot-errors.log');

var time = new Date().toUTCString();

if (existsSync(errorLogPath)) {
  appendFile(errorLogPath, `// Error log effective of 2.1.0, ${time}. Running ${platform()}, started renderer app.\n`, function(err) {

  });
}

var oldConsole = console.log;
console.log = function(msg: any) {
  appendFile(errorLogPath, `[${time}] [Renderer] [DEBUG] ` + msg + '\n', function(err) {
    if(err) {
        return oldConsole(err);
    }
  });
};

var oldError = console.error;
console.error = function(msg: any) {
  appendFile(errorLogPath, `[${time}] [Renderer] [ERROR] ` + msg + '\n', function(err) {
    if(err) {
        return oldError(err);
    }
  });
};

var oldInfo = console.info;
console.info = function(msg: any) {
  appendFile(errorLogPath, `[${time}] [Renderer] [INFO] ` + msg + '\n', function(err) {
    if(err) {
        return oldInfo(err);
    }
  });
};

var oldWarn = console.warn;
console.warn = function(msg: any) {
  appendFile(errorLogPath, `[${time}] [Renderer] [WARN] ` + msg + '\n', function(err) {
    if(err) {
        return oldWarn(err);
    }
  });
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

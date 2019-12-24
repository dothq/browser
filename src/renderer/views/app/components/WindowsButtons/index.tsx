import * as React from 'react';

import { icons } from '~/renderer/views/app/constants';
import { WindowsButton } from '../WindowsButton';
import {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
  isMaximized,
} from '~/renderer/views/app/utils';
import { Buttons } from './style';
import { observer } from 'mobx-react';
import store from '../../store';

isMaximized()

export const WindowsButtons = observer(() => {
  return (
    <Buttons isHTMLFullscreen={store.isHTMLFullscreen}>
      <WindowsButton
        visible={true}
        icon={icons.windowsMinimize}
        onClick={minimizeWindow}
      />
      <WindowsButton
        visible={store.isMaximized == true}
        icon={icons.windowsMaximize}
        onClick={maximizeWindow}
      />
      <WindowsButton
        visible={store.isMaximized == false}
        icon={icons.windowsRestore}
        onClick={maximizeWindow}
      />
      <WindowsButton
        visible={true}
        icon={icons.windowsClose}
        onClick={closeWindow}
        isClose
      />
    </Buttons>
  );
});

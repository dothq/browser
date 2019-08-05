import * as React from 'react';

import { icons } from '~/renderer/app/constants';
import { WindowsButton } from '../WindowsButton';
import {
  minimizeWindow,
  maximizeWindow,
  closeWindow,
  isMaximized,
} from '~/renderer/app/utils';
import { Buttons } from './style';
import { observer } from 'mobx-react';
import store from '../../store';

isMaximized()

export const WindowsButtons = observer(() => {
  return (
    <Buttons isHTMLFullscreen={store.isHTMLFullscreen}>
      <WindowsButton
        isDark={store.overlay.visible}
        visible={true}
        icon={icons.windowsMinimize}
        onClick={minimizeWindow}
      />
      <WindowsButton
        isDark={store.overlay.visible}
        visible={store.isMaximized == true}
        icon={icons.windowsMaximize}
        onClick={maximizeWindow}
      />
      <WindowsButton
        isDark={store.overlay.visible}
        visible={store.isMaximized == false}
        icon={icons.windowsRestore}
        onClick={maximizeWindow}
      />
      <WindowsButton
        isDark={store.overlay.visible}
        visible={true}
        icon={icons.windowsClose}
        onClick={closeWindow}
        isClose
      />
    </Buttons>
  );
});

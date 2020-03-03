import { observer } from 'mobx-react';
import * as React from 'react';

import store from '~/renderer/views/app/store';
import ToolbarButton from '~/renderer/views/app/components/ToolbarButton';
import { icons } from '~/renderer/views/app/constants/icons';
import { StyledContainer, DotLauncher, DotLauncherWrapper } from './style';
import { Button } from 'react-native';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { ipcRenderer, remote, MenuItem } from 'electron';
import { HistoryItem } from '../../models/history-item';
import { NEWTAB_URL } from '../../constants';


const onBackClick = () => {
  store.tabs.selectedTab.callViewMethod('webContents.goBack');
};

const onForwardClick = () => {
  store.tabs.selectedTab.callViewMethod('webContents.goForward');
};

const onRefreshClick = () => {
  if (store.tabs.selectedTab && store.tabs.selectedTab.loading) {
    store.tabs.selectedTab.callViewMethod('webContents.stop');
  } else {
    store.tabs.selectedTab.callViewMethod('webContents.reload');
  }
};

const refreshContextMenu = () => {
  const menu = remote.Menu.buildFromTemplate([
    {
      label: 'Normal reload',
      accelerator: 'F5',
      click: () => {
        store.tabs.selectedTab.callViewMethod('webContents.reload');
      },
    },
    {
      label: 'Hard reload',
      click: () => {
        store.tabs.selectedTab.callViewMethod('webContents.reloadIgnoringCache');
      },
    },
  ]);

  menu.popup();
};

const onHomeClick = () => {
  store.tabs.selectedTab.callViewMethod('webContents.loadURL', NEWTAB_URL);
}

export const NavigationButtons = observer(() => {
  return (
    <StyledContainer isFullscreen={store.isFullscreen}>
      <ToolbarButton
        disabled={
          store.tabs.list.length == 0 ||
          !store.navigationState.canGoBack
        }
        size={24}
        icon={icons.back}
        title={store.locale.lang.window[0].navigate_back}
        style={{
          marginLeft: 8,
          height: '42px',
        }}
        onClick={onBackClick}
      />
      <ToolbarButton
        disabled={
          store.tabs.list.length == 0 ||
          !store.navigationState.canGoForward
        }
        size={24}
        icon={icons.forward}
        onClick={onForwardClick}
        title={store.locale.lang.window[0].navigate_forward}
        style={{ height: '42px' }}
      />
      <ToolbarButton
        size={20}
        disabled={store.tabs.list.length == 0}
        title={store.locale.lang.window[0].navigate_refresh}
        icon={
          store.tabs.selectedTab && store.tabs.selectedTab.loading
            ? icons.close
            : icons.refresh
        }
        onContextMenu={refreshContextMenu}
        onClick={onRefreshClick}
        style={{ height: '42px' }}
      />
      <ToolbarButton
        size={20}
        disabled={store.tabs.list.length == 0}
        title={'Home'}
        icon={icons.home}
        onClick={onHomeClick}
        style={{ height: '42px' }}
      />
    </StyledContainer>
  );
});

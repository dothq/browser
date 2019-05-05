import { observer } from 'mobx-react';
import * as React from 'react';

import store from '~/renderer/app/store';
import ToolbarButton from '~/renderer/app/components/ToolbarButton';
import { icons } from '~/renderer/app/constants/icons';
import { StyledContainer, DotLauncher, DotLauncherWrapper } from './style';
import { Button } from 'react-native';
import { resolve } from 'path';
import { platform, homedir } from 'os';

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

const launcherOpen = () => {
  store.overlay.visible = true;
}

const editJsonFile = require("edit-json-file");
 
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

var tdl = file.get("toggleDotLauncher");

export const NavigationButtons = observer(() => {
  return (
    <StyledContainer isFullscreen={store.isFullscreen}>
      <DotLauncherWrapper title="Open Dot Launcher" id="dot" onClick={launcherOpen} visible={tdl} style={{ height: '42px' }}>
        <DotLauncher src={icons.logo}></DotLauncher>
      </DotLauncherWrapper>
      <ToolbarButton
        disabled={!store.navigationState.canGoBack}
        size={24}
        icon={icons.back}
        style={{ marginLeft: 8, height: '42px' }}
        onClick={onBackClick}
      />
      <ToolbarButton
        disabled={!store.navigationState.canGoForward}
        size={24}
        icon={icons.forward}
        onClick={onForwardClick}
        style={{ height: '42px' }}
      />
      <ToolbarButton
        size={20}
        icon={
          store.tabs.selectedTab && store.tabs.selectedTab.loading
            ? icons.close
            : icons.refresh
        }
        onClick={onRefreshClick}
        style={{ height: '42px' }}
      />
    </StyledContainer>
  );
});

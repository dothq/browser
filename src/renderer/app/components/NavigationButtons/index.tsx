import { observer } from 'mobx-react';
import * as React from 'react';

import store from '~/renderer/app/store';
import ToolbarButton from '~/renderer/app/components/ToolbarButton';
import { icons } from '~/renderer/app/constants/icons';
import { StyledContainer, DotLauncher, DotLauncherWrapper } from './style';
import { Button } from 'react-native';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { ipcRenderer, remote } from 'electron';

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

const dotLauncherCtm = () => () => {

  const menu = remote.Menu.buildFromTemplate([
    { label: `Dot ${remote.app.getVersion()}`, type: 'normal', enabled: false, icon: resolve(remote.app.getAppPath(), 'static/app-icons/tray-icon.png') },
    { type: 'separator' },
    { label: 'History', type: 'normal', click() {
        ipcRenderer.send('window-focus');
        store.overlay.visible = true;
        store.overlay.currentContent = "history";
        store.overlay.scrollRef.current.scrollTop = 0;   
    } },
    { label: 'Bookmarks', type: 'normal', click() {
      ipcRenderer.send('window-focus');
      store.overlay.visible = true;
      store.overlay.currentContent = "bookmarks";
      store.overlay.scrollRef.current.scrollTop = 0;   
    } },
    { label: 'Settings', type: 'normal', click() {
      ipcRenderer.send('window-focus');
      store.overlay.visible = true;
      store.overlay.currentContent = "settings";
      store.overlay.scrollRef.current.scrollTop = 0;   
    } },
    { type: 'separator' },
    { label: `Quit Dot ${remote.app.getVersion()}`, type: 'normal', role: 'quit', icon: resolve(remote.app.getAppPath(), 'static/app-icons/tray-close.png') },
  ]);

  menu.popup();
};

const editJsonFile = require("edit-json-file");
 
let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

var tdl = file.get("toggleDotLauncher");

export const NavigationButtons = observer(() => {
  return (
    <StyledContainer isFullscreen={store.isFullscreen}>
      <DotLauncherWrapper title="Open Dot Launcher" id="dot" onClick={launcherOpen} onContextMenu={dotLauncherCtm()} visible={tdl} style={{ height: '42px' }}>
        <DotLauncher src={icons.logo}></DotLauncher>
      </DotLauncherWrapper>
      <ToolbarButton
        disabled={!store.navigationState.canGoBack}
        size={24}
        icon={icons.back}
        title="Back"
        style={{ marginLeft: 8, height: '42px' }}
        onClick={onBackClick}
      />
      <ToolbarButton
        disabled={!store.navigationState.canGoForward}
        size={24}
        icon={icons.forward}
        onClick={onForwardClick}
        title="Forward"
        style={{ height: '42px' }}
      />
      <ToolbarButton
        size={20}
        title="Refresh (F5)"
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

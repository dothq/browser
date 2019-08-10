import { observer } from 'mobx-react';
import * as React from 'react';

import store from '~/renderer/app/store';
import ToolbarButton from "~/renderer/app/components/ToolbarButton";
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
    { label: store.locale.lang.standard[0].dot_with_version.replace(/{appVersion}/g, remote.app.getVersion()), type: 'normal', enabled: false, icon: resolve(remote.app.getAppPath(), 'static/app-icons/tray-icon.png') },
    { type: 'separator' },
    { label: store.locale.lang.history[0].title, type: 'normal', click() {
        ipcRenderer.send('window-focus');
        store.overlay.visible = true;
        store.overlay.currentContent = "history";
        store.overlay.scrollRef.current.scrollTop = 0;   
    } },
    { label: store.locale.lang.bookmarks[0].title, type: 'normal', click() {
      ipcRenderer.send('window-focus');
      store.overlay.visible = true;
      store.overlay.currentContent = "bookmarks";
      store.overlay.scrollRef.current.scrollTop = 0;   
    } },
    { label: store.locale.lang.settings[0].title, type: 'normal', click() {
      ipcRenderer.send('window-focus');
      store.overlay.visible = true;
      store.overlay.currentContent = "settings";
      store.overlay.scrollRef.current.scrollTop = 0;   
    } },
    { type: 'separator' },
    { label: store.locale.lang.standard[0].quit_dot_with_version.replace(/{appVersion}/g, remote.app.getVersion()), type: 'normal', role: 'quit', icon: resolve(remote.app.getAppPath(), 'static/app-icons/tray-close.png') },
  ]);

  menu.popup();
};

const json = require("edit-json-file");
 
let file = json(resolve(homedir()) + '/dot/dot-options.json');

var tdl = file.get("toggleDotLauncher");

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
        var url = store.tabs.selectedTab.url;
        store.tabs.addTab({ url, active: true });
        store.tabs.selectedTab.close()
      },
    },
  ]);

  menu.popup();
};

export const NavigationButtons = observer(() => {
  return (
    <StyledContainer isFullscreen={store.isFullscreen}>
      <DotLauncherWrapper title={store.locale.lang.window[0].open_dot} id="dot" onClick={launcherOpen} onContextMenu={dotLauncherCtm()} visible={tdl} style={{ height: '42px' }}>
        <DotLauncher src={icons.logo}></DotLauncher>
      </DotLauncherWrapper>
      <ToolbarButton
        disabled={!store.navigationState.canGoBack}
        size={24}
        icon={icons.back}
        title={store.locale.lang.window[0].navigate_back}
        style={{ marginLeft: 8, height: '42px' }}
        onClick={onBackClick}
      />
      <ToolbarButton
        disabled={!store.navigationState.canGoForward}
        size={24}
        icon={icons.forward}
        onClick={onForwardClick}
        title={store.locale.lang.window[0].navigate_forward}
        style={{ height: '42px' }}
      />
      <ToolbarButton
        size={20}
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
    </StyledContainer>
  );
});

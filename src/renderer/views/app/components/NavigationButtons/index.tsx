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

const onBackMouseDown = () => {
  // setTimeout(() => {
  //   const menu = remote.Menu.buildFromTemplate([]);
  //   store.history.items.reverse().some((i: HistoryItem, index: any) => {
  //     if (index == 12) return true;
  //     var menuItem = new remote.MenuItem({
  //       label: i.title,
  //       type: 'normal',
  //       click() {
  //         store.tabs.selectedTab.url = i.url;
  //       },
  //     });
  //     menu.append(menuItem);
  //   });
  //   const sep = new remote.MenuItem({ type: 'separator' });
  //   const history = new remote.MenuItem({
  //     label: store.locale.lang.history[0].title,
  //     type: 'normal',
  //     click() {
  //       ipcRenderer.send('window-focus');
  //       store.overlay.visible = true;
  //       store.overlay.currentContent = 'history';
  //       store.overlay.scrollRef.current.scrollTop = 0;
  //     },
  //   });
  //   menu.append(sep);
  //   menu.append(history);
  //   menu.popup({ y: 40, x: 62 });
  // }, 400);
};

const launcherOpen = () => {
  store.overlay.visible = true;
};

const dotLauncherCtm = () => () => {
  const menu = remote.Menu.buildFromTemplate([
    {
      label: store.locale.lang.standard[0].dot_with_version.replace(
        /{appVersion}/g,
        remote.app.getVersion(),
      ),
      type: 'normal',
      enabled: false,
      icon: resolve(__dirname.split("build/renderer")[0], 'static/app-icons/tray-icon.png'),
    },
    { type: 'separator' },
    {
      label: store.locale.lang.history[0].title,
      type: 'normal',
      click() {
        ipcRenderer.send('window-focus');
        store.overlay.visible = true;
        store.overlay.currentContent = 'history';
        store.overlay.scrollRef.current.scrollTop = 0;
      },
    },
    {
      label: store.locale.lang.bookmarks[0].title,
      type: 'normal',
      click() {
        ipcRenderer.send('window-focus');
        store.overlay.visible = true;
        store.overlay.currentContent = 'bookmarks';
        store.overlay.scrollRef.current.scrollTop = 0;
      },
    },
    {
      label: store.locale.lang.settings[0].title,
      type: 'normal',
      click() {
        ipcRenderer.send('window-focus');
        store.overlay.visible = true;
        store.overlay.currentContent = 'settings';
        store.overlay.scrollRef.current.scrollTop = 0;
      },
    },
    { type: 'separator' },
    {
      label: store.locale.lang.standard[0].quit_dot_with_version.replace(
        /{appVersion}/g,
        remote.app.getVersion(),
      ),
      type: 'normal',
      role: 'quit',
    },
  ]);

  menu.popup();
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
        var url = store.tabs.selectedTab.url;
        store.tabs.addTab({ url, active: true });
        store.tabs.selectedTab.close();
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
      <DotLauncherWrapper
        title={store.locale.lang.window[0].open_dot}
        id="dot"
        onContextMenu={dotLauncherCtm()}
        style={{ height: '42px' }}
      >
        <DotLauncher src={icons.logo} />
      </DotLauncherWrapper>
      <ToolbarButton
        disabled={
          store.tabs.list.length == 0 ||
          store.overlay.visible == true ||
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
        onMouseDown={onBackMouseDown}
      />
      <ToolbarButton
        disabled={
          store.tabs.list.length == 0 ||
          store.overlay.visible == true ||
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
        disabled={store.tabs.list.length == 0 || store.overlay.visible == true}
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
        disabled={store.tabs.list.length == 0 || store.overlay.visible == true}
        title={'Home'}
        icon={icons.home}
        onClick={onHomeClick}
        style={{ height: '42px' }}
      />
    </StyledContainer>
  );
});

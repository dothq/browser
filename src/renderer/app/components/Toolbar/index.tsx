import { observer } from 'mobx-react';
import * as React from 'react';
import { platform } from 'os';

import store from '~/renderer/app/store';
import { StyledToolbar, Buttons, Separator } from './style';
import { NavigationButtons } from '../NavigationButtons';
import { Tabbar } from '../Tabbar';
import ToolbarButton from '../ToolbarButton';
import { icons } from '../../constants';
import { ipcRenderer, Menu, remote } from 'electron';
import BrowserAction from '../BrowserAction';
import { Find } from '../Find';
import { AbButton } from '../ToolbarButton/style';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import console = require('console');
import { TabSearchBox } from '../TabSearchBox';
import { resolve } from 'path';

const modal = require('electron-modal');

const onUpdateClick = () => {
  ipcRenderer.send('update-install');
};

@observer
class BrowserActions extends React.Component {
  public render() {
    const { selectedTabId } = store.tabGroups.currentGroup;

    return (
      <>
        {selectedTabId &&
          store.extensions.browserActions.map(item => {
            if (item.tabId === selectedTabId) {
              return <BrowserAction data={item} key={item.extensionId} />;
            }
            return null;
          })}
      </>
    );
  }
}

const adBlockRef = React.createRef<HTMLDivElement>();

export const toggleAdBlockWindow = () => {
  // if(store.overlay.isAbOpen == false) {
  //   var rect = document.getElementById("dab").getBoundingClientRect()
  //   var ab = modal.open(resolve(remote.app.getAppPath() + '/static/pages/adblock.html'), {
  //     width: 300,
  //     height: 400,
  //     x: rect.left-260,
  //     y: rect.top+40,
  //     frame: false,
  //     resizable: false,
  //     movable: false,
  //     alwaysOnTop: false,
  //     modal: false
  //   }, {
  //     totalAdsBlocked: store.tabs.selectedTab.blockedAds.toString()
  //   })
  //   store.overlay.isAbOpen = true;
  //   store.overlay.abObj = ab;
  //   ab.on('close', () => {
  //     store.overlay.isAbOpen = false;
  //     store.overlay.abObj = null;
  //   })
  //   ab.on('hide', () => {
  //     store.overlay.isAbOpen = false;
  //     store.overlay.abObj = null;
  //   })
  // }
  // else {
  //   store.overlay.abObj.hide()
  //   store.overlay.isAbOpen = false;
  // }
}

export const viewLauncher = () => {
  store.overlay.visible = true;
  store.overlay.scrollRef.current.scrollTop = 0;
}

export const viewHistory = () => {
  store.overlay.visible = true;
  store.overlay.currentContent = "history";
}

export const viewBm = () => {
  store.overlay.visible = true;
  store.overlay.currentContent = "bookmarks";
}

export const viewPrefs = () => {
  store.overlay.visible = true;
  store.overlay.currentContent = "settings";
}

export const audioPlaying = () => {
  if(store.tabs.selectedTab) {
    if(store.tabs.selectedTab.audioPlaying == true) {
      return "This tab is playing audio."
    }
    else {
      return "This tab is not playing audio or has been pasued."
    }
  }
  else {
    return ""
  }
}

export const audioVisible = () => {
  if(store.tabs.selectedTab) {
    if(store.tabs.selectedTab.audioPlaying == true) {
      return true
    }
    if(store.tabs.selectedTab.audioPlaying == false) {
      return false
    }
  }
  else {
    return false
  }
}

export const onMoreClick = () => {
  const contextMenu = remote.Menu.buildFromTemplate([
    { label: 'New tab            ', accelerator: 'CmdOrCtrl+T', type: 'normal' },
    { label: 'New window         ', accelerator: 'CmdOrCtrl+N', type: 'normal' },
    { type: 'separator' },
    { label: 'History             ', type: 'normal' },
    { label: 'Downloads                ', accelerator: 'CmdOrCtrl+J', type: 'normal' },
    { label: 'Bookmarks                   ', type: 'normal' },
    { type: 'separator' },
    { label: 'Zoom in', role: 'zoomin', accelerator: 'CmdOrCtrl+Shift+=', type: 'normal' },
    { label: 'Zoom out', role: 'zoomout', accelerator: 'CmdOrCtrl+Shift+-', type: 'normal' },
    { type: 'separator' },
    { label: 'Print', accelerator: 'CmdOrCtrl+P', type: 'normal' },
    { label: 'Find', accelerator: 'CmdOrCtrl+F', type: 'normal' },
    { label: 'More tools', submenu: [
      { label: 'Task Manager', accelerator: 'Shift+Esc', type: 'normal' },
      { type: 'separator' },
      { label: 'Developer Tools', accelerator: 'F12', role: 'toggledevtools', type: 'normal' }
    ] },
    { type: 'separator' },
    { label: 'Edit', submenu: [
      { label: 'Cut', role: 'cut', type: 'normal' },
      { label: 'Copy', role: 'copy', type: 'normal' },
      { label: 'Paste', role: 'paste', type: 'normal' },
      { label: 'Fullscreen', role: 'togglefullscreen', type: 'normal' }
    ] },
    { type: 'separator' },
    { label: 'Settings', type: 'normal' },
    { label: 'Send feedback', type: 'normal' },
    { label: 'About Dot', role: 'about', type: 'normal' },
    { type: 'separator' },
    { label: 'Quit', role: 'close' },
  ]);

  contextMenu.popup()
}

export const Toolbar = observer(() => {
  return (
    <StyledToolbar isHTMLFullscreen={store.isHTMLFullscreen}>
      <NavigationButtons />
      <Tabbar />
      <Find />
      <Buttons>
        <BrowserActions />
        {store.updateInfo.available && (
          <ToolbarButton icon={icons.download} onClick={onUpdateClick} />
        )}
        {store.extensions.browserActions.length > 0 && <Separator />}
        <AbButton title={audioPlaying()}>
          <BrowserAction
            size={18}
            style={{ marginLeft: 0 }}
            opacity={0.54}
            title="This tab is playing audio."
            visible={audioVisible()}
            data={{
              badgeBackgroundColor: 'gray',
              badgeText: store.tabs.selectedTab
              ? store.tabs.selectedTab.audioPlaying
                ? ''
                : ''
              : '',
              icon: icons.music,
              badgeTextColor: 'white',
            }}
          />          
        </AbButton>
        <AbButton onClick={viewLauncher}>
          <BrowserAction
            size={18}
            style={{ marginLeft: 0 }}
            opacity={0.54}
            title="Dot Downloads"
            visible={store.downloads.list.length > 0}
            data={{
              badgeBackgroundColor: 'gray',
              badgeText: store.tabs.selectedTab
                ? store.downloads.list.length > 0
                  ? store.downloads.list.length.toString()
                  : ''
                : '',
              icon: icons.download,
              badgeTextColor: 'white',
            }}
          />          
        </AbButton>
        { store.downloads.list.length > 0 && <Separator />}
        <AbButton onClick={toggleAdBlockWindow} title="Dot Ad-Blocker" id="dab">
          <BrowserAction
            size={18}
            style={{ marginLeft: 0 }}
            opacity={0.54}
            title="Dot Ad-Blocker"
            visible={true}
            data={{
              badgeBackgroundColor: 'gray',
              badgeText: store.tabs.selectedTab
                ? store.tabs.selectedTab.blockedAds > 0
                  ? store.tabs.selectedTab.blockedAds.toString()
                  : ''
                : '',
              icon: icons.shield,
              badgeTextColor: 'white',
            }}
          />
        </AbButton>
        <Separator />
        <AbButton title="View more options" onClick={onMoreClick}>
          <BrowserAction
            size={21}
            style={{ marginLeft: 0 }}
            opacity={0.54}
            title="View more options"
            visible={true}
            data={{
              badgeBackgroundColor: 'gray',
              badgeText: store.tabs.selectedTab
                ? ''
                  ? ''
                  : ''
                : '',
              icon: icons.more,
              badgeTextColor: 'white',
            }}
          />
        </AbButton>
      </Buttons>
    </StyledToolbar>
  );
});

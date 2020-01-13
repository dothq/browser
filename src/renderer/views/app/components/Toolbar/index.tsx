import { observer } from 'mobx-react';
import * as React from 'react';
import { platform } from 'os';

import store from '~/renderer/views/app/store';
import { StyledToolbar, Buttons, Separator, ToolbarWrap } from './style';
import { NavigationButtons } from '../NavigationButtons';
import { Tabbar } from '../Tabbar';
import ToolbarButton from "../ToolbarButton";
import { icons } from '../../constants';
import { ipcRenderer, Menu, remote } from 'electron';
import BrowserAction from '../BrowserAction';
import { Find } from '../Find';
import { AbButton } from '../ToolbarButton/style';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import console = require('console');
import { TabSearchBox } from '../TabSearchBox';
import { resolve } from 'path';
import { tskManager, openDeveloperTools } from '../..';
import { shadeBlendConvert } from '../../utils';
import { colors } from '~/renderer/constants';

const modal = require('electron-modal');

const onUpdateClick = () => {
  ipcRenderer.send('update-install');
};

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

export const onMoreClick = (event: MouseEvent) => {
  ipcRenderer.send('show-dialog', 'menu');
}

export const Toolbar = observer(() => {
  return (
    <StyledToolbar isHTMLFullscreen={store.isHTMLFullscreen} isDisabled={store.overlay.currentContent == 'default'}>
      <ToolbarWrap isDisabled={store.overlay.currentContent == 'default'}>
        <NavigationButtons />
        <Tabbar />
        <Find />
        <Buttons>
          {store.updateInfo.available && (
            <ToolbarButton icon={icons.download} onClick={onUpdateClick} />
          )}
          <AbButton title={audioPlaying()}>
            <BrowserAction
              size={16}
              style={{ marginLeft: 0 }}
              opacity={0.8}
              title="This tab is playing audio."
              visible={audioVisible()}
              data={{
                badgeBackgroundColor: store.tabs.selectedTab
                  ? store.tabs.selectedTab.background
                  : 'transparent',
                badgeText: store.tabs.selectedTab
                ? store.tabs.selectedTab.audioPlaying
                  ? ''
                  : ''
                : '',
                icon: icons.music,
                badgeTextColor: store.tabs.selectedTab
                  ? shadeBlendConvert(store.preferences.conf.appearance.theme == 'light' ? 0.85 : 0.3, store.tabs.selectedTab.background)
                  : 'transparent',
              }}
            />          
          </AbButton>
          <AbButton onClick={viewLauncher}>
            <BrowserAction
              size={16}
              style={{ marginLeft: 0 }}
              opacity={0.8}
              title="Dot Downloads"
              visible={store.downloads.list.length > 0}
              data={{
                badgeBackgroundColor: store.tabs.selectedTab
                  ? store.tabs.selectedTab.background
                  : 'transparent',
                badgeText: store.tabs.selectedTab
                  ? store.downloads.list.length > 0
                    ? store.downloads.list.length.toString()
                    : ''
                  : '',
                icon: icons.download,
                badgeTextColor: store.tabs.selectedTab
                  ? shadeBlendConvert(store.preferences.conf.appearance.theme == 'light' ? 0.85 : 0.3, store.tabs.selectedTab.background)
                  : 'transparent',
              }}
            />          
          </AbButton>
          { store.downloads.list.length > 0 && <Separator />}
          <AbButton title="Dot Ad-Blocker" id="dab">
            <BrowserAction
              size={16}
              style={{ marginLeft: 0 }}
              opacity={0.8}
              title="Dot Ad-Blocker"
              visible={true}
              data={{
                badgeBackgroundColor: store.tabs.selectedTab
                  ? store.preferences.conf.appearance.theme == 'light'
                    ? store.tabs.selectedTab.background
                    : shadeBlendConvert(store.preferences.conf.appearance.theme !== 'dark' && store.preferences.conf.appearance.theme !== 'oled' ? 0.85 : 0.3, store.tabs.selectedTab.background)
                  : 'transparent',
                badgeText: store.tabs.selectedTab
                  ? store.tabs.selectedTab.blockedAds > 0
                    ? store.tabs.selectedTab.blockedAds.toString()
                    : ''
                  : '',
                icon: icons.shield,
                badgeTextColor: colors.grey['100']
              }}
            />
          </AbButton>
          <Separator />
          <AbButton title="View more options" onClick={() => onMoreClick}>
            <BrowserAction
              size={17}
              style={{ marginLeft: 0 }}
              opacity={0.8}
              title="View more options"
              visible={true}
              data={{
                badgeBackgroundColor: store.tabs.selectedTab
                  ? store.tabs.selectedTab.background
                  : 'transparent',
                badgeText: store.tabs.selectedTab
                  ? ''
                    ? ''
                    : ''
                  : '',
                icon: icons.more,
                badgeTextColor: store.tabs.selectedTab
                  ? shadeBlendConvert(store.preferences.conf.appearance.theme == 'light' ? 0.85 : 0.3, store.tabs.selectedTab.background)
                  : 'transparent',
              }}
            />
          </AbButton>
        </Buttons>
      </ToolbarWrap>
    </StyledToolbar>
  );
});

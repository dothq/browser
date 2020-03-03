import { observer } from 'mobx-react';
import * as React from 'react';

import store from '~/renderer/views/app/store';
import { StyledToolbar, Buttons, Separator, ToolbarWrap } from './style';
import { NavigationButtons } from '../NavigationButtons';
import { Tabbar } from '../Tabbar';
import ToolbarButton from "../ToolbarButton";
import { icons } from '../../constants';
import { ipcRenderer } from 'electron';
import BrowserAction from '../BrowserAction';
import { Find } from '../Find';
import { AbButton } from '../ToolbarButton/style';
import { shadeBlendConvert } from '../../utils';
import { colors } from '~/renderer/constants';

const onUpdateClick = () => {
  ipcRenderer.send('update-install');
};

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
    <StyledToolbar isHTMLFullscreen={store.isHTMLFullscreen}>
      <ToolbarWrap>
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
          <AbButton>
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

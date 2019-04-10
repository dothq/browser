import { observer } from 'mobx-react';
import * as React from 'react';

import store from '~/renderer/app/store';
import ToolbarButton from '~/renderer/app/components/ToolbarButton';
import { icons } from '~/renderer/app/constants/icons';
import { StyledContainer } from './style';
import { callBrowserViewMethod } from '~/shared/utils/browser-view';

const onBackClick = () => {
  callBrowserViewMethod('webContents.goBack');
};

const onForwardClick = () => {
  callBrowserViewMethod('webContents.goForward');
};

const onRefreshClick = () => {
  if (store.tabsStore.selectedTab && store.tabsStore.selectedTab.loading) {
    callBrowserViewMethod('webContents.stop');
  } else {
    callBrowserViewMethod('webContents.reload');
  }
};

const onAddTabClick = () => {
  store.overlayStore.isNewTab = true;
  store.overlayStore.visible = true;
};

export const NavigationButtons = observer(() => {
  return (
    <StyledContainer isFullscreen={store.isFullscreen}>
      <a onClick={onAddTabClick} title="Dot" style={{ width: '20px', display: 'contents', cursor: 'pointer' }}>
        <img 
          src={icons.logo}
          style={{ filter: 'invert(100%)', width: '60px' }}
        ></img>
      </a>
      <ToolbarButton
        disabled={!store.navigationState.canGoBack}
        size={24}
        icon={icons.back}
        style={{ marginLeft: 8 }}
        onClick={onBackClick}
      />
      <ToolbarButton
        disabled={!store.navigationState.canGoForward}
        size={24}
        icon={icons.forward}
        onClick={onForwardClick}
      />
      <ToolbarButton
        size={20}
        icon={
          store.tabsStore.selectedTab && store.tabsStore.selectedTab.loading
            ? icons.close
            : icons.refresh
        }
        onClick={onRefreshClick}
      />
    </StyledContainer>
  );
});

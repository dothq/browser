import { observer } from 'mobx-react';
import * as React from 'react';

import { Preloader } from '~/renderer/components/Preloader';
import { Tab } from '~/renderer/app/models';
import store from '~/renderer/app/store';
const emote = require("react-easy-emoji");
const emoji = require("node-emoji");
import {
  StyledTab,
  StyledContent,
  StyledIcon,
  StyledTitle,
  StyledClose,
  StyledBorder,
  StyledOverlay,
  TabContainer,
  SearchInput,
  Image,
} from './style';
import { shadeBlendConvert } from '../../utils';
import { transparency } from '~/renderer/constants';
import { ipcRenderer, remote } from 'electron';
import Ripple from '~/renderer/components/Ripple';
import { resolve } from 'path';
import console = require('console');
import { icons } from '../../constants/icons';

const removeTab = (tab: Tab) => () => {
  tab.close();
};

const onCloseMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const onDblClick = (tab: Tab) => (e: React.MouseEvent<HTMLDivElement>) => {
  store.tabs.showUB()
  console.log(store.tabs.ubVisible)
  console.log("Toggled UB")
}

const onMouseDown = (tab: Tab) => (e: React.MouseEvent<HTMLDivElement>) => {

  if(tab.isUrlVisible == false){
    const { pageX } = e;

    tab.select();
  
    store.tabs.lastMouseX = 0;
    store.tabs.isDragging = true;
    store.tabs.mouseStartX = pageX;
    store.tabs.tabStartX = tab.left;
  
    store.tabs.lastScrollLeft = store.tabs.containerRef.current.scrollLeft;
  
    if(e.button == 1) {
      tab.close()
    } 
  }

};

const onMouseEnter = (tab: Tab) => () => {
  if (!store.tabs.isDragging) {
    store.tabs.hoveredTabId = tab.id;
  }
};

const onMouseLeave = () => {
  store.tabs.hoveredTabId = -1;
};

const onClick = () => {
  if (store.canToggleMenu) {
    store.overlay.visible = true;
  }
};

const contextMenu = (tab: Tab) => () => {
  const { tabs } = store.tabGroups.currentGroup;

  const menu = remote.Menu.buildFromTemplate([
    {
      label: 'New tab',
      accelerator: 'Ctrl+T',
      icon: resolve(remote.app.getAppPath(), 'static/app-icons/add.png'),
      click: () => {
        store.overlay.isNewTab = true;
        store.overlay.visible = true;
      },
    },
    {
      label: 'Navigate here',
      icon: resolve(remote.app.getAppPath(), 'static/app-icons/search.png'),
      click: () => {
        store.overlay.show()
        store.overlay.inputRef.current.focus();
        store.overlay.inputRef.current.select();
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Reload',
      accelerator: 'F5',
      icon: resolve(remote.app.getAppPath(), 'static/app-icons/refresh.png'),
      click: () => {
        tab.callViewMethod('webContents.reload');
      },
    },
    {
      label: 'Duplicate',
      click: () => {
        store.tabs.addTab({ active: true, url: tab.url });
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Close tab',
      accelerator: 'Ctrl+W',
      icon: resolve(remote.app.getAppPath(), 'static/app-icons/close.png'),
      click: () => {
        tab.close();
      },
    },
    {
      label: 'Close other tabs',
      click: () => {
        for (const t of tabs) {
          if (t !== tab) {
            t.close();
          }
        }
      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Close tabs from left',
      enabled: store.tabs.list.length != 1,
      icon: resolve(remote.app.getAppPath(), 'static/app-icons/left.png'),
      click: () => {
        for (let i = tabs.indexOf(tab) - 1; i >= 0; i--) {
          tabs[i].close();
        }
      },
    },
    {
      label: 'Close tabs from right',
      enabled: store.tabs.list.length != 1,
      icon: resolve(remote.app.getAppPath(), 'static/app-icons/right.png'),
      click: () => {
        for (let i = tabs.length - 1; i > tabs.indexOf(tab); i--) {
          tabs[i].close();
        }
      },
    },
    {
      label: 'Reopen last closed tab',
      accelerator: 'Ctrl+Shift+T',
      enabled: store.tabs.lastUrl != "",
      click: () => {
        var url = store.tabs.lastUrl[store.tabs.lastUrl.length-1];
        if(url != "") {
          store.tabs.addTab({ url, active: true });
          store.tabs.lastUrl.splice(-1,1)
        }
      },
    },
    {
      type: 'separator',
    },
  ]);

  menu.popup();
};

const Content = observer(({ tab }: { tab: Tab }) => {

  var title = tab.title

  var url = tab.url

  return (
    <StyledContent collapsed={tab.isExpanded}>
      {!tab.loading && tab.favicon !== '' && (
        <StyledIcon
          isIconSet={tab.favicon !== ''}
          style={{ backgroundImage: `url(${tab.favicon})` }}
        />
      )}
      {tab.audioPlaying == true && (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ height: '24px', width: '24px', marginLeft: '7px' }}><path fill="none" d="M0 0h24v24H0z"></path><path fill={tab.isSelected ? tab.background : `rgba(0, 0, 0, ${transparency.text.high})`} d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>
      )}
      {tab.loading && (
        <Preloader
          color={tab.background}
          thickness={6}
          size={16}
          style={{ minWidth: 16 }}
        />
      )}
      <StyledTitle
        isIcon={tab.isIconSet}
        style={{
          color: tab.isSelected
            ? tab.background
            : `rgba(0, 0, 0, ${transparency.text.high})`,
        }}
      >
        {title}
      </StyledTitle>
    </StyledContent>
  );
});

const Close = observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledClose
      onMouseDown={onCloseMouseDown}
      onClick={removeTab(tab)}
      visible={tab.isExpanded}
      title="Close tab (Ctrl+W)"
    />
  );
});

const Border = observer(({ tab }: { tab: Tab }) => {
  return <StyledBorder visible={tab.borderVisible} />;
});

const onMouseHover = () => {
  
};

const Overlay = observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledOverlay
      hovered={tab.isHovered}
      style={{
        backgroundColor: tab.isSelected
          ? shadeBlendConvert(0.8, tab.background)
          : 'rgba(0, 0, 0, 0.04)',
      }}
    />
  );
});

export default observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledTab
      selected={tab.isSelected}
      onMouseDown={onMouseDown(tab)}
      onMouseEnter={onMouseEnter(tab)}
      onContextMenu={contextMenu(tab)}
      onClick={onClick}
      title={tab.title}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseHover}
      visible={tab.tabGroupId === store.tabGroups.currentGroupId}
      ref={tab.ref}
    >
      <TabContainer
        selected={tab.isSelected}
        style={{
          backgroundColor: tab.isSelected
            ? shadeBlendConvert(0.85, tab.background)
            : 'transparent',
        }}
      >
        <Content tab={tab} />
        <Close tab={tab}/>

        <Overlay tab={tab} />
        <Ripple
          rippleTime={0.6}
          opacity={0.15}
          color={tab.background}
          style={{ zIndex: 9 }}
        />
      </TabContainer>
      <Border tab={tab} />
    </StyledTab>
  );
});

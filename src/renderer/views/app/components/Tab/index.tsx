import { observer } from 'mobx-react';
import * as React from 'react';

import { Preloader } from '../../../../components/Preloader';
import { Tab } from '../../models/tab';
import store from '../../store';
import {
  StyledTab,
  StyledContent,
  StyledIcon,
  StyledTitle,
  StyledClose,
  StyledBorder,
  StyledOverlay,
  TabContainer,
} from './style';
import { shadeBlendConvert } from '../../utils';
import { remote, ipcRenderer } from 'electron';
import Ripple from '../../../../components/Ripple';
import { colors } from '../../../../constants';

const removeTab = (tab: Tab) => () => {
  tab.close();
};

const onCloseMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const onMouseDown = (tab: Tab) => (e: React.MouseEvent<HTMLDivElement>) => {
  if (tab.isUrlVisible == false) {
    const { pageX } = e;

    tab.select();

    store.tabs.lastMouseX = 0;
    store.tabs.isDragging = true;
    store.tabs.mouseStartX = pageX;
    store.tabs.tabStartX = tab.left;

    store.tabs.lastScrollLeft = store.tabs.containerRef.current.scrollLeft;

    if (e.button == 1) {
      tab.close();
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

const onClick = (tab: Tab) => (e: React.MouseEvent<HTMLDivElement>) => {
  if(store.canToggleMenu) {
    store.canToggleMenu = false;
    ipcRenderer.send('open-omnibox');
  }
}

const contextMenu = (tab: Tab) => () => {
  const { tabs } = store.tabGroups.currentGroup;

  const menu = remote.Menu.buildFromTemplate([
    {
      label: 'New tab',
      accelerator: 'CmdOrCtrl+T',
      click: () => {

      },
    },
    {
      label: 'Navigate here',
      click: () => {

      },
    },
    {
      type: 'separator',
    },
    {
      label: 'Reload',
      accelerator: 'F5',
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
      accelerator: 'CmdOrCtrl+W',
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
      click: () => {
        for (let i = tabs.indexOf(tab) - 1; i >= 0; i--) {
          tabs[i].close();
        }
      },
    },
    {
      label: 'Close tabs from right',
      enabled: store.tabs.list.length != 1,
      click: () => {
        for (let i = tabs.length - 1; i > tabs.indexOf(tab); i--) {
          tabs[i].close();
        }
      },
    },
    {
      label: 'Reopen last closed tab',
      accelerator: 'CmdOrCtrl+Shift+T',
      enabled: store.tabs.lastUrl != '',
      click: () => {
        var url = store.tabs.lastUrl[store.tabs.lastUrl.length - 1];
        if (url != '') {
          store.tabs.addTab({ url, active: true });
          store.tabs.lastUrl.splice(-1, 1);
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
  return (
    <StyledContent collapsed={tab.isExpanded}>
      {!tab.loading && tab.favicon !== undefined && (
        <StyledIcon
          isIconSet={true}
          favicon={tab.favicon}
        />
      )}
      {tab.loading && (
        <Preloader
          color={shadeBlendConvert(
            store.theme['tab-preloader-vibrant-opacity'],
            tab.background,
          )}
          thickness={6}
          size={16}
          style={{ minWidth: 16, marginLeft: '12px' }}
        />
      )}
      <StyledTitle
        isIcon={tab.isIconSet}
        tab={tab}
        style={{ 
          color: tab.isSelected ?
            tab.background
          : store.theme["tab-text-color"]
        }}
      >
        <span>{tab.title}</span>
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
      title={store.locale.lang.window[0].navigate_close}
    />
  );
});

const Border = observer(({ tab }: { tab: Tab }) => {
  return <StyledBorder visible={tab.borderVisible} />;
});

const onMouseHover = () => {};

const Overlay = observer(({ tab }: { tab: Tab }) => {
  return (
    <StyledOverlay
      hovered={tab.isHovered}
      style={{
        backgroundColor: tab.isSelected
          ? shadeBlendConvert(
              store.preferences.conf.appearance.theme == 'light' ? 0.6 : 0.3,
              tab.background,
            )
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
      onClick={onClick(tab)}
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
          ? shadeBlendConvert(
            store.theme['tab-vibrant-opacity']+0.3,
            tab.background,
          ) : store.theme['tab-inactive-color']
        }}
      >
        <Content tab={tab} />
        <Close tab={tab} />

        <Overlay tab={tab} />
        <Ripple
          rippleTime={0.4}
          opacity={0.15}
          color={tab.background}
          style={{ zIndex: 9 }}
        />
      </TabContainer>
      <Border tab={tab} />
    </StyledTab>
  );
});

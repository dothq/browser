import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import HistorySection from '../HistorySection';
import { QuickRange } from '../../store/history';
import { Button } from '~/renderer/components/Button';
import { Sections, DeletionDialog, DeletionDialogLabel } from './style';
import { NavigationDrawer } from '../NavigationDrawer';
import { Content, Container, Scrollable } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { icons } from '../../constants';

const deleteFolder = require('folder-delete');
const remote = require('electron').remote;
const path = require("path");
const scrollRef = React.createRef<HTMLDivElement>();

const preventHiding = (e: any) => {
  e.stopPropagation();
};

const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;

  if (scrollPos >= scrollMax) {
    store.history.itemsLoaded += store.history.getDefaultLoaded();
  }
};

const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  store.history.search(e.currentTarget.value);
};

const onCancelClick = (e: React.MouseEvent) => {
  e.stopPropagation();
  store.history.selectedItems = [];
};

const onDeleteClick = (e: React.MouseEvent) => {
  e.stopPropagation();
  store.history.deleteSelected();
};

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  store.history.resetLoadedItems();
};

const HistorySections = observer(() => {
  return (
    <Sections>
      <Content>
        {store.history.sections.map(data => (
          <HistorySection data={data} key={data.date.getTime()} />
        ))}
      </Content>
    </Sections>
  );
});

const MenuItem = observer(
  ({ range, children }: { range: QuickRange; children: any }) => (
    <NavigationDrawer.Item
      onClick={() => (store.history.selectedRange = range)}
      selected={store.history.selectedRange === range}
    >
      {children}
    </NavigationDrawer.Item>
  ),
);

const onClearClick = () => {
  const app = remote.app;
  const data = app.getPath('userData');
  var deletePath: any = path.join(data, 'storage');
  deleteFolder(deletePath);
  store.history.resetLoadedItems()
  store.history.load();
}

const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  e.stopPropagation();
  if(e.keyCode == 27) {
    if(store.tabGroups.list.length == 0) {
      return;
    }
    else {
      store.overlay.currentContent = "default";
    }
  }
};

export const History = observer(() => {
  const { length } = store.history.selectedItems;

  return (
    <Container
      right
      onClick={preventHiding}
      onKeyDown={keyDown}
      visible={
        store.overlay.currentContent === 'history' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef}>
        <NavigationDrawer
          title={store.locale.lang.history[0].title}
          search
          onSearchInput={onInput}
          onBackClick={onBackClick}
        >
          <MenuItem range="all">{store.locale.lang.history[0].sort[0].range_all}</MenuItem>
          <MenuItem range="today">{store.locale.lang.history[0].sort[0].range_today}</MenuItem>
          <MenuItem range="yesterday">{store.locale.lang.history[0].sort[0].range_yesterday}</MenuItem>
          <MenuItem range="last-week">{store.locale.lang.history[0].sort[0].range_last_week}</MenuItem>
          <MenuItem range="last-month">{store.locale.lang.history[0].sort[0].range_last_month}</MenuItem>
          <MenuItem range="older">{store.locale.lang.history[0].sort[0].range_older}</MenuItem>
          <NavigationDrawer.Item icon={icons.trash} style={{ bottom: 0, position: 'absolute', marginBottom: '16px' }} onClick={onClearClick}>
            {store.locale.lang.history[0].clear_browsing_history}
          </NavigationDrawer.Item>
        </NavigationDrawer>
        <HistorySections />
        <SelectionDialog
          visible={length > 0}
          amount={length}
          onDeleteClick={onDeleteClick}
          onCancelClick={onCancelClick}
        />
      </Scrollable>
    </Container>
  );
});

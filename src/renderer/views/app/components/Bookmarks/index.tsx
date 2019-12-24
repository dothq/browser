import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Button } from '~/renderer/components/Button';
import { Sections, BookmarkSection, Input } from './style';
import BookmarkC from '../Bookmark';
import { Bookmark } from '../../models/bookmark';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import { Content, Container, Scrollable, Title } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { preventHiding } from '../Overlay';
import { ListItem, Buttons } from '../Settings/style';
import { Textfield } from '~/renderer/components/Textfield';
import { Inputfield } from '~/renderer/components/Input';
import Dialog from '@material-ui/core/Dialog';
import { Select } from '@material-ui/core';

const MenuItem = observer(
  ({ selected, children, display }: { selected: any; children: any; display: any }) => (
    <NavigationDrawer.Item
      onClick={() => (store.bookmarks.currentDisplay = display)}
      selected={selected}
    >
      {children}
    </NavigationDrawer.Item>
  ),
);

const scrollRef = React.createRef<HTMLDivElement>();

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  store.bookmarks.resetLoadedItems();
  store.bookmarks.menuVisible = false;
};


const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;

  if (scrollPos >= scrollMax) {
    store.bookmarks.itemsLoaded += store.bookmarks.getDefaultLoaded();
  }
};

const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  store.bookmarks.search(e.currentTarget.value);
};

const onCancelClick = (e: React.MouseEvent) => {
  store.bookmarks.selectedItems = [];
};

const onDeleteClick = (e: React.MouseEvent) => {
  store.bookmarks.deleteSelected();
};

const onRemoveClick = (item: Bookmark) => () => {
  store.bookmarks.removeItem(item._id);
};

const BookmarksList = observer(() => {
  return (
    <Sections>
      <Content>
        <BookmarkSection style={{ marginTop: 56 }}>
          {store.bookmarks.visibleItems.map(data => (
            <BookmarkC data={data} key={data._id} />
          ))}
        </BookmarkSection>
      </Content>
    </Sections>
  );
});

export const NewBookmark = observer(() => {
  return (
        <BookmarkSection>
          <ListItem>

          </ListItem>
        </BookmarkSection>
  )
});

export const ImportDialog = observer(() => {
  return (
    <BookmarkSection>
      <ListItem>
        <Title>Import from</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Select>
            
          </Select>
        </Buttons>
      </ListItem>
    </BookmarkSection>
  );
});

export const Bookmarks = observer(() => {
  const { length } = store.bookmarks.selectedItems;

  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'bookmarks' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef}>
        <NavigationDrawer
          title={store.locale.lang.bookmarks[0].title}
          search
          onSearchInput={onInput}
          onBackClick={onBackClick}
        >
          <MenuItem selected={store.bookmarks.currentDisplay == 'default'} display="default">{store.locale.lang.bookmarks[0].title}</MenuItem>
          {/* <MenuItem selected={store.bookmarks.currentDisplay == 'new_bookmark'} display="new_bookmark">{store.locale.lang.bookmarks[0].add_bookmark}</MenuItem>
          <MenuItem selected={store.bookmarks.currentDisplay == 'import'} display="import">{store.locale.lang.bookmarks[0].import}</MenuItem>
          <MenuItem selected={store.bookmarks.currentDisplay == 'export'} display="export">{store.locale.lang.bookmarks[0].export}</MenuItem> */}
        </NavigationDrawer>
        {store.bookmarks.currentDisplay == 'default' && store.bookmarks.visibleItems.length > 0 && <BookmarksList />}
        <SelectionDialog
          visible={length > 0}
          amount={length}
          onDeleteClick={onDeleteClick}
          onCancelClick={onCancelClick}
        />
        <ContextMenu
          style={{
            top: store.bookmarks.menuTop,
            left: store.bookmarks.menuLeft - 130,
          }}
          visible={store.bookmarks.menuVisible}
        >
          <ContextMenuItem
            onClick={onRemoveClick(store.bookmarks.currentBookmark)}
            icon={icons.trash}
          >
            Remove
          </ContextMenuItem>
        </ContextMenu>
        <Sections>
          <Content>

          {store.bookmarks.currentDisplay == 'new_bookmark' && (<Title style={{ margin: '75px -30px -25px -30px' }}>{store.locale.lang.bookmarks[0].add_bookmark}</Title>)}
          {store.bookmarks.currentDisplay == 'new_bookmark' && (<NewBookmark />)}

          {store.bookmarks.currentDisplay == 'import' && (<ImportDialog />)}

          </Content>
        </Sections>
      </Scrollable>
    </Container>
  );
});

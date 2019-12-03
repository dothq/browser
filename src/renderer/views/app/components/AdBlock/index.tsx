import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Button } from '~/renderer/components/Button';
import { Sections, Image } from './style';
import BookmarkC from '../Bookmark';
import { Bookmark } from '../../models/bookmark';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import { Content, Container, Scrollable } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { preventHiding } from '../Overlay';
import { ListItem } from '../ListItem';

const scrollRef = React.createRef<HTMLDivElement>();

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  store.overlay.visible = false;
};

const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;
};

export const AdBlock = observer(() => {
  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'adblock' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef}>
        <NavigationDrawer title="Ad Blocker" onBackClick={onBackClick} />
        <Sections>
          <Content
            style={{
              margin: '100px',
            }}
          />
        </Sections>
      </Scrollable>
    </Container>
  );
});

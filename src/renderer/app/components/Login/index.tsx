import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Button } from '~/renderer/components/Button';
import { Sections, Image } from './style';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import { Content, Container, Scrollable, Title } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { preventHiding } from '../Overlay';
import { ListItem } from '../ListItem';
import { Input } from '@material-ui/core';

const scrollRef = React.createRef<HTMLDivElement>();

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  store.overlay.visible = false;
};

const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;
};

export const LoginModal = observer(() => {
  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'login' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef}>
        <Content style={{ position: 'absolute', top: '50%', left: '50%', marginRight:  '-50%', transform: 'translate(-50%, -50%)', padding: '20px' }}>
          <Title>Log into your Dot account</Title>
          <Input placeholder="Email"></Input>
        </Content>
      </Scrollable>
    </Container>
  );
});

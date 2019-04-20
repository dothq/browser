import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { Button } from '~/renderer/components/Button';
import { Sections, Image, SettingsSection, ListItem, StyledNavigationDrawerItem, NavDILine_Profile, Title, Buttons } from './style';
import BookmarkC from '../Bookmark';
import { Bookmark } from '../../models/bookmark';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import { Content, Container, Scrollable } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { preventHiding } from '../Overlay';
import console = require('console');

const scrollRef = React.createRef<HTMLDivElement>();

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
};

const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;
};

const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  
};

const YourProfile = observer(() => {
  return (
    <SettingsSection>
      <ListItem>
        <Image src={icons.user} style={{ filter: 'invert(100%)', width: '30px' }}></Image>
        <Title>{require("os").userInfo().username}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button disabled style={{ backgroundColor: '#f3f3f3', color: '#1e1e1e' }}>
            Sign out
          </Button>
        </Buttons>
      </ListItem>
    </SettingsSection>
  );
});


const showProfile = () => {
}


export const Settings = observer(() => {

  return (
    <Container
      onClick={preventHiding}
      right
      visible={
        store.overlay.currentContent === 'settings' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef}>
        <NavigationDrawer
          title="Settings"
          onBackClick={onBackClick}
        >
        </NavigationDrawer>
        <Sections>
          <Content>
             <Title style={{ margin: '75px -30px -25px -30px' }}>My Profile</Title>
             <YourProfile />

             <Title style={{ margin: '75px -30px -25px -30px' }}>Appearance</Title>

          </Content>
        </Sections>
      </Scrollable>
    </Container>
  );
});

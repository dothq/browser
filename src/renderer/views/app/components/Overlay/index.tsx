import { observer } from 'mobx-react';
import * as React from 'react';

import store from '../../store';

import {
  StyledOverlay,
  HeaderText,
  HeaderArrow,
  Scrollable,
  Content,
  Container,
  Image,
} from './style';
import { History } from '../History';
import { Bookmarks } from '../Bookmarks';
import { AdBlock } from '../AdBlock';
import { Snackbar } from '../Snackbar';
import { icons } from '../../constants';

store.downloads.load();

export const Header = ({ children, clickable }: any) => {
  return (
    <HeaderText clickable={clickable}>
      {children}
      {clickable && <HeaderArrow />}
    </HeaderText>
  );
};

const onClick = () => {
  if (store.tabGroups.currentGroup.tabs.length > 0) {
    store.overlay.visible = false;
  }
  store.overlay.dialTypeMenuVisible = false;
  store.user.menuVisible = false;
};

store.user.loadProfile();

const onInputKeyUp = (e) => {
  if(e.which == 13) {
    var url = e.target.value;
    store.tabs.addTab({ url, active: true })
  }
}

export const Overlay = observer(() => {
  return (
    <StyledOverlay visible={store.overlay.visible} onClick={onClick}>
      <Container
        visible={
          store.overlay.currentContent === 'default' && store.overlay.visible
        }
      >
        <Scrollable ref={store.overlay.scrollRef} id="home">
          <Content onClick={onClick}>
            <Image
              src={icons.logo}
              center
              style={{ width: '250px', filter: 'var(--overlay-logo-filter)' }}
            />
            <input id="url" onKeyUp={onInputKeyUp}></input>
          </Content>
        </Scrollable>
      </Container>
      <History />
      <Bookmarks />
      <AdBlock />
    </StyledOverlay>
  );
});

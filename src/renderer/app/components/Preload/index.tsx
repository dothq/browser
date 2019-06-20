import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { InputField, Panel } from './style'
import { Button } from '~/renderer/components/Button';
import { Sections, Image, SettingsSection, ListItem, StyledNavigationDrawerItem, NavDILine_Profile, Title, Buttons, A, AboutWrapper } from './style';
import BookmarkC from '../Bookmark';
import { Bookmark } from '../../models/bookmark';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import { Content, Container, Scrollable } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { preventHiding } from '../Overlay';
import console = require('console');
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { DropArrow } from '../Overlay/style';
import { appWindow } from '../..';
import { BrowserView, app } from 'electron';
import { ViewManager } from '~/main/view-manager';
const editJsonFile = require("edit-json-file");

const scrollRef = React.createRef<HTMLDivElement>();

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  document.getElementById("search-engine-dp").style.opacity = "0";
  document.getElementById("search-engine-dp").style.pointerEvents = "none";
  store.bookmarks.menuVisible = false;
};

const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;
};

const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  
};

// setInterval(function() {
//   if(store.overlay.currentContent == "default") {
//     if(require('electron').remote.BrowserView.getAllViews().length <= 1) {
//       if(store.overlay.visible == true) {
//         if(store.tabs.list.length == 0) {
//           console.warn("ABORT: BrowserView active while reloading")
//         }
//       }
//     }
//   }
// }, 500);

let file = editJsonFile(resolve(homedir()) + '/dot/dot-options.json');

setTimeout(function() {
  store.overlay.currentContent = "default"
}, 800); 

export const Preload = observer(() => {
  return (
    <Container
      right
      visible={
        store.overlay.currentContent === 'preload' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef}>
        <Image src={icons.logo} style={{width: '250px',position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)', opacity: 1,transition: 'opacity 0.8s',transitionDelay: '0.7s'}}/>
        <Panel visible={store.overlay.panelVisible} id="setup" style={{width: '100%',position: 'absolute'}} />
      </Scrollable>
    </Container>
  );
});

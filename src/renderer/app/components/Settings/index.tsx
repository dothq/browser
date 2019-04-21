import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
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
import { Switch, TextField } from 'nersent-ui';
import { toggleDotButton } from '../SettingsItems'
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
        <Title style={{ fontSize: 25 }}>{require("os").userInfo().username}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button style={{ backgroundColor: '#f3f3f3', color: '#1e1e1e' }}>
            Sign out
          </Button>
        </Buttons>
      </ListItem>
    </SettingsSection>
  );
});

const wexond = () => {
  var url = "https://github.com/wexond/wexond"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const enderdev = () => {
  var url = "https://github.com/EnderDev"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const geek = () => {
  var url = "https://github.com/GamingGeek"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const func = () => {
  var url = "https://github.com/frostylosty"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const AboutDot = observer(() => {
  return (
    <SettingsSection style={{ backgroundColor: 'transparent' }}>
      <ListItem>
        <Image id="maybe-click-the-arrow" onClick={clearSecretBoyo} src={icons.logo} style={{ width: '30px', transition: 'filter 0.2s' }}></Image>
        <Title style={{ fontSize: 20 }}>Dot 2.0.0-beta.10</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <A onClick={secretBoyo} style={{ padding: '22px 8px 10px 12px', cursor: 'pointer', transition: 'background-color 0.2s', borderRadius: '50%', marginRight: '-10px' }}>
            <Image src={icons.down} style={{ filter: 'invert(100%)' }}></Image>
          </A>
        </Buttons>
      </ListItem>
      <AboutWrapper id="about-wrapper">
        <Title style={{ fontSize: 14, marginLeft: '40px' }}>Dot was made possible thanks to <A onClick={wexond}>Wexond</A> and ☕.</Title>
        <Title style={{ fontSize: 14, marginLeft: '40px' }}>Made in <Image src={icons.uk} style={{ width: '14px' }}></Image>Great Britain with ❤.</Title>
        <Title style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>Developers</Title>
        <A onClick={enderdev} title="<endercraftergaming@gmail.com>" style={{ marginLeft: '60px', color: '#dadada' }}>EnderDev,</A>
        <A onClick={geek} title="<thegaminggeek362@gmail.com>" style={{ marginLeft: '5px', color: '#dadada' }}>Geek (Jake Ward)</A>
        <Title style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>Beta Testers</Title>
        <A onClick={func} title="<oli.loversss@gmail.com>" style={{ marginLeft: '60px', color: '#dadada' }}>function</A>
        <Title style={{ fontSize: 12, marginLeft: '40px', marginTop: '10px', color: '#dadada' }}>&copy; 2019 Ender And Fire Development</Title>
      </AboutWrapper>
    </SettingsSection>
  );
});


const showProfile = () => {
}

const secretBoyo = () => {
  var x = document.getElementById("about-wrapper");
  if (x.style.display === "none") {
    x.style.display = null;
    document.getElementById("maybe-click-the-arrow").style.filter = ``
  } else {
    x.style.display = "none";
    const eggies = [
      'invert(40%) grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(400%) contrast(2)',
      'grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(700%) contrast(0.8)',
      'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8)',
      'grayscale(100%) brightness(222%) sepia(1000%) hue-rotate(6deg) saturate(600%) contrast(1.1)'
    ]
    const egg = eggies[Math.floor(Math.random()*eggies.length)];
    document.getElementById("maybe-click-the-arrow").style.filter = egg;
  }
}

const clearSecretBoyo = () => {
  document.getElementById("maybe-click-the-arrow").style.filter = ``
}

export const Appearance = observer(() => {
    console.log(store.options.dotLauncherEnabled)
    return (
      <SettingsSection>
        <ListItem>
          <Title style={{ fontSize: 15 }}>Toggle Dot button</Title>
          <Buttons style={{ marginLeft: 'auto' }}>
            <Switch onClick={toggleDotButton} toggled={store.options.dotLauncherEnabled}/>
          </Buttons>
        </ListItem>

        <ListItem>
          <Title style={{ fontSize: 15 }}>Search Engine</Title>
          <Buttons style={{ marginLeft: 'auto' }}>
            
          </Buttons>
        </ListItem>
      </SettingsSection>
    );
});

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
              <Appearance />
              <Title style={{ margin: '75px -30px -25px -30px' }}>About Dot</Title>
              <AboutDot />

          </Content>
        </Sections>
      </Scrollable>
    </Container>
  );
});

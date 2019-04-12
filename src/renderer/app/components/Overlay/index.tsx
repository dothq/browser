import { observer } from 'mobx-react';
import * as React from 'react';

import store from '../../store';
import {
  StyledOverlay,
  HeaderText,
  HeaderArrow,
  Section,
  Menu,
  Scrollable,
  Title,
  Content,
  DropArrow,
  Card,
  WeatherHeader,
  WeatherTitle,
  WeatherNumber,
  WeatherSymbol,
  WeatherContent,
  WeatherLeft,
  WeatherIcon,
  LeftMenu,
  HistoryContent,
  Image,
  HistoryBackItem,
  SettingsContent,
  SettingsBackItem,
} from './style';
import { SearchBox } from '../SearchBox';
import { MenuItem } from '../MenuItem';
import { TabGroups } from '../TabGroups';
import { icons } from '../../constants';
import { callBrowserViewMethod } from '~/shared/utils/browser-view';

const Header = ({ children, clickable }: any) => {
  return (
    <HeaderText clickable={clickable}>
      {children}
      {clickable && <HeaderArrow />}
    </HeaderText>
  );
};

const onClick = () => {
  if (store.tabGroupsStore.currentGroup.tabs.length > 0) {
    if(document.getElementById('history').style.opacity == "0") {
      store.overlayStore.visible = false;
    }
    else {
      store.overlayStore.visible = true;
    }
  }
};

const preventHiding = (e: any) => {
  e.stopPropagation();
};

const test = () => {
    console.log("you clicked a button")
};

const onSiteClick = (url: string) => () => {
  const tab = store.tabsStore.selectedTab;

  if (!tab || store.overlayStore.isNewTab) {
    store.tabsStore.addTab({ url, active: true });
  } else {
    tab.url = url;
    callBrowserViewMethod('webContents.loadURL', tab.id, url);
  }

  store.overlayStore.visible = false;
};

const historyTab = () => {
  document.getElementById('overlay').style.opacity = "0";
  document.getElementById('overlay').style.pointerEvents = "none";
  document.getElementById('history').style.opacity = "1";
  document.getElementById('history').style.pointerEvents = null;
}

const historyTabBack = () => {
  document.getElementById('overlay').style.opacity = "1";
  document.getElementById('overlay').style.pointerEvents = null;
  document.getElementById('history').style.opacity = "0";
  document.getElementById('history').style.pointerEvents = "none";
}

const settingsTabBack = () => {
  document.getElementById('overlay').style.opacity = "1";
  document.getElementById('overlay').style.pointerEvents = null;
  document.getElementById('settings').style.opacity = "0";
  document.getElementById('settings').style.pointerEvents = "none";
}

const hideTS = () => {
  const displayIndicator = document.getElementById('topSites').getAttribute('data-react-display');
  const dHeight = `${document.getElementById('topSites').getBoundingClientRect().height}px`
  if(displayIndicator == "show") {
    document.getElementById('topSites').style.maxHeight = "1px";
    document.getElementById('topSites').setAttribute('data-react-display', "hide");
    document.getElementById('topSites-arrow').style.backgroundImage = `url(${icons.down})`;
    document.getElementById('topSites').style.overflow = "hidden";
  }
  else { 
    document.getElementById('topSites').style.maxHeight = "400px";
    document.getElementById('topSites').setAttribute('data-react-display', "show");
    document.getElementById('topSites-arrow').style.backgroundImage = `url(${icons.up})`;
    document.getElementById('topSites').style.overflow = null;
  }
}

const aboutDot = (t: string) => {
  document.getElementById('overlay').style.opacity = "0";
  document.getElementById('overlay').style.pointerEvents = "none";
  document.getElementById('settings').style.opacity = "1";
  document.getElementById('settings').style.pointerEvents = null;
  document.getElementById('about').style.opacity = "1";
  document.getElementById('about').style.pointerEvents = null;
}

const getSize = (i: number) => {
  const width = 800;
  return (width - 48 - (i - 1)) / i;
};

export const Overlay = observer(() => {
  return (
    <StyledOverlay visible={store.overlayStore.visible} onClick={onClick}>
      <Scrollable ref={store.overlayStore.scrollRef}>

        <HistoryContent id="history" style={{  opacity: 0 , transition: '0.15s opacity', pointerEvents: 'none', transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)' }} onClick={preventHiding}>
            <LeftMenu>
              <Title style={{ fontWeight: 420, marginTop: '-5px', padding: '10px 10px 10px 10px' }}>
                <Image src={icons.history} style={{ marginRight: '5px', filter: 'invert(100%)', width: '25px' }}></Image>
                History
              </Title>
              <HistoryBackItem onClick={historyTabBack} style={{ position: 'absolute', bottom: 0, width: '79%', margin: '30px 30px 30px 30px' }}>
                <Image src={icons.back} style={{ margin: '14px 10px 10px 10px', filter: 'invert(100%)' }}></Image>
                <Title style={{ margin: '10px 10px 10px 5px', display: 'inline-block', position: 'absolute' }} >Back</Title>
              </HistoryBackItem>
            </LeftMenu>
        </HistoryContent>

        <SettingsContent id="settings" style={{  opacity: 0 , transition: '0.15s opacity', transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)', pointerEvents: 'none' }} onClick={preventHiding}>
          <LeftMenu>
            <Title style={{ fontWeight: 420, marginTop: '-5px', padding: '10px 10px 10px 10px' }}>
              <Image src={icons.settings} style={{ marginRight: '5px', filter: 'invert(100%)', width: '25px' }}></Image>
              Settings
            </Title>
            <SettingsBackItem onClick={settingsTabBack} style={{ position: 'absolute', bottom: 0, width: '79%', margin: '30px 30px 30px 30px' }}>
              <Image src={icons.back} style={{ margin: '14px 10px 10px 10px', filter: 'invert(100%)' }}></Image>
              <Title style={{ margin: '10px 10px 10px 5px', display: 'inline-block', position: 'absolute' }} >Back</Title>
            </SettingsBackItem>
          </LeftMenu>
          <Content id="about">
            <Title>
              About Dot
            </Title>
          </Content>
        </SettingsContent>

        <Content id="overlay" style={{ transition: '0.15s opacity', transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)' }}>
          <p style={{ marginBottom: '-20px', textAlign: 'center' }}>
            <img src={icons.logo}></img>
          </p>
          <SearchBox />

          {store.historyStore.topSites.length > 0 && (
            <>
              <Title id="data-react-ts-height" style={{ display: 'none' }}>
                
              </Title>
              <Title style={{ marginBottom: 24 }} onClick={preventHiding}>
                Top Sites
                <DropArrow id="topSites-arrow" onClick={hideTS} />
              </Title>
              <Menu id="topSites" data-react-display="show" data-react-height="" style={{ transition: 'all 0.35s', transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0, 1, 0.5, 1)' }}>              
                {store.historyStore.topSites.map(item => (
                  <MenuItem
                    width={getSize(6)}
                    onClick={onSiteClick(item.url)}
                    key={item._id}
                    maxLines={1}
                    iconSize={20}
                    light
                    icon={store.faviconsStore.favicons[item.favicon]}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
          <Title>Overview</Title>
          <Section onClick={preventHiding}>
            <Header>Tab groups</Header>
            <TabGroups />
          </Section>
          <Section onClick={preventHiding}>
            <Header>Menu</Header>
            <Menu>
              <MenuItem onClick={historyTab} invert icon={icons.history}>
                History
              </MenuItem>
              <MenuItem onClick={test} invert icon={icons.bookmarks}>
                Bookmarks
              </MenuItem>
              <MenuItem onClick={test} invert icon={icons.download}>
                Downloads
              </MenuItem>
              <MenuItem onClick={test} invert icon={icons.settings}>
                Settings
              </MenuItem>
              <MenuItem onClick={test} invert icon={icons.extensions}>
                Extensions
              </MenuItem>
              <MenuItem onClick={test} invert icon={icons.find}>
                Find
              </MenuItem>
              <MenuItem onClick={aboutDot} invert icon={icons.info}>
                About Dot
              </MenuItem>
            </Menu>
          </Section>

          <Title>News</Title>
          <Card>
            <WeatherHeader>
              <WeatherLeft>
                <WeatherTitle>Warsaw</WeatherTitle>
                <WeatherNumber>
                  20<WeatherSymbol>°C</WeatherSymbol>
                </WeatherNumber>
              </WeatherLeft>
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WeatherIcon
                  style={{ backgroundImage: `url(${icons.fewClouds})` }}
                />
              </div>
            </WeatherHeader>
            <WeatherContent>More info</WeatherContent>
          </Card>
        </Content>
      </Scrollable>
    </StyledOverlay>
  );
});

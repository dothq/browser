import { observer } from 'mobx-react';
import * as React from 'react';

import store from '../../store';
import { remote, app } from "electron";
import { Client } from 'discord-rpc';
import {
  StyledOverlay,
  HeaderText,
  HeaderArrow,
  Scrollable,
  Title,
  Content,
  Container,
  Image,
  Dot,
  Panel,
  DropArrow,
  IconButton,
} from './style';
import { SearchBox } from '../SearchBox';
import { TabGroups } from '../TabGroups';
import { WeatherCard } from '../WeatherCard';
import { NewsCard } from '../NewsCard';
import { History } from '../History';
import { Bookmarks } from '../Bookmarks';
import { AdBlock } from '../AdBlock';
import { Settings } from '../Settings';
import { Extensions } from '../Extensions';
import { Preload } from '../Preload';
import { Dial } from '../Dial';
import { Snackbar } from '../Snackbar';
import { QuickMenu } from '../QuickMenu';
import { DownloadsSection } from '../DownloadsSection';
import { icons } from '../../constants';
import { Menu, MenuItem } from 'nersent-ui';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { Preloader } from '~/renderer/components/Preloader'
const editJsonFile = require("edit-json-file");
const enUK = editJsonFile(`${remote.app.getAppPath()}/locale/en.json`);

import console = require('console');

var locale_uk = enUK.toObject()

// FCM Notifcation Handler
import { ipcRenderer } from 'electron';
import { ExtLink } from '../NewsCard/style';

let file = editJsonFile(`${remote.app.getPath('userData')}/dot-options.json`);

if(!file.get("searchEngine")) {
  file.set("searchEngine", "google");
  file.save()
}

if(!file.get("toggleDotLauncher")) {
  file.set("toggleDotLauncher", true);
  file.save()
}

const {
  START_NOTIFICATION_SERVICE,
  NOTIFICATION_SERVICE_STARTED,
  NOTIFICATION_SERVICE_ERROR,
  NOTIFICATION_RECEIVED,
  TOKEN_UPDATED,
} = require ('electron-push-receiver/src/constants')

// Listen for service successfully started
ipcRenderer.on(NOTIFICATION_SERVICE_STARTED, (_: any, token: any) => {
  console.log(`[FCMNS] The Firebase Cloud Messaging service has been launched using token ${token}`)
  ipcRenderer.send('fcm-ready', { token: token })
})

// Handle notification errors
ipcRenderer.on(NOTIFICATION_SERVICE_ERROR, (_: any, error: any) => {
  console.error(`[FCMNS] Notification error: ${error}`)
})

// Send FCM token to backend
ipcRenderer.on(TOKEN_UPDATED, (_: any, token: any) => {
  console.log(`[FCMNS] Token has been updated ${token}`)
})

// Display notification
ipcRenderer.on(NOTIFICATION_RECEIVED, (_: any, serverNotificationPayload: any) => {
  // check to see if payload contains a body string, if it doesn't consider it a silent push
  if (serverNotificationPayload.notification.body){
    // payload has a body, so show it to the user
    console.log(`[FCMNS] Recieved a notification from ${serverNotificationPayload.from}`, serverNotificationPayload)
    let myNotification = new Notification(serverNotificationPayload.notification.title, {
      body: serverNotificationPayload.notification.body
    })
    
    myNotification.onclick = () => {
      console.log('Notification clicked')
    }  
  } else {
    // payload has no body, so consider it silent (and just consider the data portion)
    console.log('do something with the key/value pairs in the data', serverNotificationPayload.data)
  }
})

//Discord Rich Presence
const clientId = '565573138146918421';

const rpclient = new Client({ transport: 'ipc'});
const startTimestamp = Math.round(+new Date()/1000)

window.onbeforeunload = () => {
  rpclient.destroy()
}

async function setActivity() {
  if (!rpclient) {
    return;
  }
  try {
    var details = locale_uk.rich_presence[0].default_details

    if(store.tabs.selectedTab.audioPlaying == true) {
      details = locale_uk.rich_presence[0].audio_details
    }

    // if(store.tabs.selectedTab.url.substring(0, 8) == "file:///") {
    //   var lastDot = store.tabs.selectedTab.url.lastIndexOf('.');
    //   var fileType = store.tabs.selectedTab.url.substring(lastDot + 1);
    //   console.log(fileType)
    //   details = locale_uk.rich_presence[0].file_details.replace(/{fileType}/g, fileType.toUpperCase())
    // }
    
    var state = `${store.tabs.getHostname(store.tabs.selectedTab.url)}`;
    var largeImageKey = 'dlogo';
    var smallImageKey = 'dot-online';
    var smallImageText:string = locale_uk.rich_presence[0].active_small_text;
  } catch(e) {
    var details = locale_uk.rich_presence[0].idle_details;
    var state:string = locale_uk.rich_presence[0].idle_small_text;
    var largeImageKey = 'dlogo';
    var smallImageKey = 'dot-idle';
    var smallImageText:string = locale_uk.rich_presence[0].idle_small_text;
  }
  rpclient.setActivity({
    details: details,
    state: state,
    startTimestamp,
    largeImageKey,
    smallImageKey,
    largeImageText: locale_uk.rich_presence[0].large_text.replace(/{version}/, remote.app.getVersion()),
    smallImageText,
    instance: false
  })
};

rpclient.on('ready', () => {
  // if(file.get("discordRichPresenceEnabled") == true) {
    setActivity();

    setInterval(() => {
      setActivity();
    }, 3e3);
  // }
});

rpclient.login({ clientId }).catch(console.error);
//Discord Rich Presence

store.downloads.load()

// remote.ipcMain.on('window-focus', async () => {
//   if(store.overlay.visible == true) {
//     store.notifications.hidePermissionWindow()
//   }
//   else {
//     store.notifications.showPermissionWindow()
//   }
// })

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

export const preventHiding = (e: any) => {
  e.stopPropagation();
  store.overlay.dialTypeMenuVisible = false;
  store.user.menuVisible = false;
  store.options.searchEngineCtx = false;
  store.bookmarks.menuVisible = false;
};

store.user.loadProfile();

const LoginSnackbar = () => {
  return (
    <Snackbar visible={store.user.loggedin == true}>
      {locale_uk.overlay[0].welcome_snackbar.replace(/{username}/g, store.user.username)}
    </Snackbar>
  )
};

interface Props {
  children: any;
}

const CardWrapper = observer(({ children }: Props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} onClick={preventHiding}>
      {children}
    </div>
  );
});

const openExtLink = (url: string) => () => {
  store.tabs.openExternalLink({ url, active: true })
};

const loadNews = (amount: any) => () => {
  if(amount == 5) {
    store.news.load();
    store.news.shouldLoadNews = true;
  }
  else {
    store.news.loadAll()
    store.news.shouldLoadNews = true;
  }
}

console.log(store.news.list)

export const Overlay = observer(() => {

  return (
    <StyledOverlay visible={store.overlay.visible} onClick={onClick}>
      <Preload/>
      {store.user.loggedin == true && <LoginSnackbar />}
      <Container
        visible={
          store.overlay.currentContent === 'default' && store.overlay.visible
        }
      >
        <Scrollable ref={store.overlay.scrollRef} id="home">
          <Content>
            <Image src={icons.logo} center style={{ width: '250px' }}></Image>
            <SearchBox />
            <Dial />

            <Title>{locale_uk.overlay[0].overview}</Title>
            <TabGroups />
            {store.downloads.list.length > 0 && <DownloadsSection />}
            <QuickMenu />
            <Title>{locale_uk.overlay[0].world}</Title>
            <CardWrapper>
              <WeatherCard />
              {store.news.list.map((item: any) => (
                <NewsCard 
                  key={item.key} 
                  newsImage={item.image} 
                  newsURL={item.url} 
                  newsPubIcon={item.favicon} 
                  newsPublisher={item.source} 
                  newsTitle={item.title} 
                  newsFullTitle={item.wholeTitle}
                  newsOnClick={openExtLink(item.url)}
                />
              ))}
            </CardWrapper>
            <div onClick={preventHiding}>
              <DropArrow visible={store.news.list.length == 5} style={{ textAlign: 'center', margin: '10px auto 20px auto', filter: 'invert(1)', zoom: '1.5', cursor: 'pointer' }} title="Load more articles" onClick={loadNews('more')}>
                {store.news.shouldLoadNews == true && (
                  <Preloader
                      thickness={6}
                      size={16}
                      style={{ zoom: '2', filter: 'invert(1)' }}
                  />
                )}
              </DropArrow>
              <IconButton visible={store.news.list.length >= 6} style={{ textAlign: 'center', margin: '10px auto 20px auto', filter: 'invert(1)', zoom: '1.5', cursor: 'pointer' }} icon={icons.up} title="Load less articles" onClick={loadNews(5)}>
                {store.news.shouldLoadNews == true && (
                  <Preloader
                      thickness={6}
                      size={16}
                      style={{ zoom: '2', filter: 'invert(1)' }}
                  />
                )}
              </IconButton>
            </div>
          </Content>
        </Scrollable>
      </Container>
      <History />
      <Bookmarks />
      <Extensions />
      <Settings />
      <AdBlock />
    </StyledOverlay>
  );
});

const senderId = '534960319282'
console.log("[FCMNS] Started service");
ipcRenderer.send(START_NOTIFICATION_SERVICE, senderId)

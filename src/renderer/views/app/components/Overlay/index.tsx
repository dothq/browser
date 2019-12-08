import { observer } from 'mobx-react';
import * as React from 'react';

import store from '../../store';
import { remote, app } from 'electron';
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
import { Preloader } from '~/renderer/components/Preloader';
const json = require('edit-json-file');

import console = require('console');

// FCM Notifcation Handler
import { ipcRenderer } from 'electron';
import { ExtLink } from '../NewsCard/style';
import { checkLightMode } from '../App';

let file = json(`${remote.app.getPath('userData')}/dot-options.json`);

if (!file.get('searchEngine')) {
  file.set('searchEngine', 'google');
  file.save();
}

if (!file.get('toggleDotLauncher')) {
  file.set('toggleDotLauncher', true);
  file.save();
}

const {
  START_NOTIFICATION_SERVICE,
  NOTIFICATION_SERVICE_STARTED,
  NOTIFICATION_SERVICE_ERROR,
  NOTIFICATION_RECEIVED,
  TOKEN_UPDATED,
} = require('electron-push-receiver/src/constants');

// Listen for service successfully started
ipcRenderer.on(NOTIFICATION_SERVICE_STARTED, (_: any, token: any) => {
  //
  ipcRenderer.send('fcm-ready', { token: token });
});

// Handle notification errors
ipcRenderer.on(NOTIFICATION_SERVICE_ERROR, (_: any, error: any) => {
  console.error(`[FCMNS] Notification error: ${error}`);
});

// Send FCM token to backend
ipcRenderer.on(TOKEN_UPDATED, (_: any, token: any) => {});

// Display notification
ipcRenderer.on(
  NOTIFICATION_RECEIVED,
  (_: any, serverNotificationPayload: any) => {
    // check to see if payload contains a body string, if it doesn't consider it a silent push
    if (serverNotificationPayload.notification.body) {
      // payload has a body, so show it to the user

      let myNotification = new Notification(
        serverNotificationPayload.notification.title,
        {
          body: serverNotificationPayload.notification.body,
        },
      );

      myNotification.onclick = () => {};
    } else {
      // payload has no body, so consider it silent (and just consider the data portion)
    }
  },
);

//Discord Rich Presence
const clientId = '565573138146918421';

const rpclient = new Client({ transport: 'ipc' });
const startTimestamp = Math.round(+new Date() / 1000);

window.onbeforeunload = () => {
  ipcRenderer.send('browserview-clear');
  rpclient.destroy();
};

async function setActivity() {
  if (!rpclient) {
    return;
  }

  var details = store.locale.lang.rich_presence[0].default_details;

  if (store.tabs.selectedTab.audioPlaying == true) {
    details = store.locale.lang.rich_presence[0].audio_details;
  }

  var state = `${store.tabs.getHostname(store.tabs.selectedTab.url)}`;
  var largeImageKey = 'dlogo';
  var smallImageKey = 'dot-online';
  var smallImageText: string = store.locale.lang.rich_presence[0].active_small_text;

  rpclient.setActivity({
    details: details,
    state: state,
    startTimestamp,
    largeImageKey,
    smallImageKey,
    largeImageText: store.locale.lang.rich_presence[0].large_text.replace(
      /{version}/,
      remote.app.getVersion(),
    ),
    smallImageText,
    instance: false,
  });
}

rpclient.on('ready', () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 3e3);
});

rpclient.login({ clientId }).catch(console.error);
//Discord Rich Presence

store.downloads.load();

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
  if ((store.options.emojiCtx = true)) {
    store.options.emojiCtx = false;
  }
  if ((store.options.themeSelect = true)) {
    store.options.themeSelect = false;
  }
};

store.user.loadProfile();

const LoginSnackbar = () => {
  return (
    <Snackbar visible={store.user.loggedin == true}>
      {store.locale.lang.overlay[0].welcome_snackbar.replace(
        /{username}/g,
        store.user.username,
      )}
    </Snackbar>
  );
};

interface Props {
  children: any;
}

const CardWrapper = observer(({ children }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
      onClick={preventHiding}
    >
      {children}
    </div>
  );
});

const openExtLink = (url: string) => () => {
  store.tabs.openExternalLink({ url, active: true });
};

const loadNews = (amount: any) => () => {
  if (amount == 5) {
    store.news.load();
    store.news.shouldLoadNews = true;
  } else {
    store.news.loadAll();
    store.news.shouldLoadNews = true;
  }
};

import Confetti from 'react-confetti';
var canRef = React.createRef<HTMLCanvasElement>();
var opac = 1;

setTimeout(function() {
  opac = 0;
}, 4000);

const onInputKeyUp = (e) => {
  if(e.which == 13) {
    var url = e.target.value;
    store.tabs.addTab({ url, active: true })
  }
}

export const Overlay = observer(() => {
  return (
    <StyledOverlay visible={store.overlay.visible} onClick={onClick}>
      {store.user.loggedin == true && <LoginSnackbar />}
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
      <Extensions />
      <Settings />
      <AdBlock />
    </StyledOverlay>
  );
});

const senderId = '534960319282';
ipcRenderer.send(START_NOTIFICATION_SERVICE, senderId);

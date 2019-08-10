import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { InputField, ExtLink, FakeSelect, Icon, Subtitle } from './style'
import { Button } from '~/renderer/components/Button';
import { Textfield } from '~/renderer/components/Textfield';
import { Sections, Image, SettingsSection, ListItem, StyledNavigationDrawerItem, NavDILine_Profile, Title, Buttons, A, AboutWrapper, SettingsItem, TitleEmail } from './style';
import BookmarkC from '../Bookmark';
import { Bookmark } from '../../models/bookmark';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { ContextMenu, ContextMenuItem } from '../ContextMenu';
import { Content, Container, Scrollable } from '../Overlay/style';
import { SelectionDialog } from '../SelectionDialog';
import { preventHiding } from '../Overlay';
import console = require('console');
import Switch from '@material-ui/core/Switch';
import OptSwitch from '../Switch';
import { resolve } from 'path';
import { platform, homedir } from 'os';
import { DropArrow, IconButton, LanguageButton } from '../Overlay/style';
import { notify } from 'node-notifier';
import { ipcRenderer, ipcMain, shell } from 'electron';
import RPCSwitch from '../SettingsToggles/RichPresenceToggle';
const DataURI = require('datauri').promise;
import CircularProgress from '@material-ui/core/CircularProgress';
import { openNewGitHubIssue } from 'electron-util';
import { Preloader } from '~/renderer/components/Preloader';
import { Line } from '../App/style';
import { DialogPopup } from '../DialogPopup';
import { DialogTitle, DialogP, DialogContent, DialogButton } from '../DialogPopup/style';
import { TextField, ButtonBase, DialogActions, Select } from '@material-ui/core';
import Ripple from '~/renderer/components/Ripple';
import SelectList from '../SelectList';
import { SelectOption } from '../SelectList/style';
var request = require('ajax-request');

var modal = require('electron-modal');
const { remote } = require('electron')
const { Tray, app } = remote
const json = require("edit-json-file");
let file = json(resolve(homedir()) + '/dot/dot-options.json');
let allLangs = json(resolve(remote.app.getAppPath() + '/locale/all-locale.json'));
allLangs = allLangs.toObject();
const prettyBytes = require('pretty-bytes');

const scrollRef = React.createRef<HTMLDivElement>();

var win = remote.getCurrentWindow();
win.webContents.session.clearCache(function(){
  
});

store.options.currentDisplay = "profile";

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  store.options.searchEngineCtx = false;
  store.options.emojiCtx = false;
  store.bookmarks.menuVisible = false;
};

const onScroll = (e: any) => {
  const scrollPos = e.target.scrollTop;
  const scrollMax = e.target.scrollHeight - e.target.clientHeight - 256;
};

const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  
};

const logout = async () => {
  store.user.loggedin = false;
  store.user.username = "Guest";
  store.user.avatar = icons.user
  store.user.email = null;
  localStorage.removeItem("dot_footprint")
}

const login = async () => {
  var si = await modal.open(resolve(app.getAppPath() + '\\static\\pages\\verification\\sign-in.html'), {
    width: 400,
    height: 600,
    resizable: false,
    center: false,
    alwaysOnTop: false,
    title: store.locale.lang.settings[0].my_profile[0].sign_in_btn,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  });


  si.on('passed-details', (c: any) => {
    store.user.username = c.customname;
    store.user.avatar = c.avatar;

    

    store.user.email = c.email;
    store.user.loggedin = true;

    localStorage.setItem("dot_footprint", Buffer.from(c.email + '||' + c.password).toString('base64'));

    si.hide();
  });

  si.on('load-external-url', (c: any) => {
    var url = c;
    store.tabs.addTab({ url, active: true });

    setTimeout(function() {
      store.overlay.visible = false;
    }, 250);
  });

  si.show();
  
  si.on('show', () => {
    var div = document.getElementById('settings'),
    divChildren = div.childNodes;
  
    for (var i=0; i<divChildren.length; i++) {
      divChildren[i].style.filter = "blur(5px)";
      divChildren[i].style.pointerEvents = "none";
    }

  });

  si.on('closed', () => {

    app.focus()

    var div = document.getElementById('settings'),
    divChildren = div.childNodes;

    for (var i=0; i<divChildren.length; i++) {
      divChildren[i].style.filter = null;
      divChildren[i].style.pointerEvents = null;
    }

    si = null;

  })

  si.on('hide', () => {

    app.focus()

    var div = document.getElementById('settings'),
    divChildren = div.childNodes;

    for (var i=0; i<divChildren.length; i++) {
      divChildren[i].style.filter = null;
      divChildren[i].style.pointerEvents = null;
    }

    si = null;
  })  


}

const onMouse = () => {
  if(store.user.loggedin == true) {
    document.getElementById("user-avatar").style.filter = "brightness(70%)";
  }
};

const offMouse = () => {
  if(store.user.loggedin == true) {
    document.getElementById("user-avatar").style.filter = null
  }
};

const pickAvatar = () => {
  if(store.user.loggedin == true) {
    document.getElementById("avatar-choose").click();
  }
};

const Email = observer(() => {
  if(store.user.loggedin == true) {
    return (
      <TitleEmail visible={false} style={{ fontSize: 16, marginLeft: '4px', marginTop: '-20px', color: 'rgba(220, 221, 222, 0.77)' }}>{store.user.email}</TitleEmail>
    );
  }
  else {
    return (
      <TitleEmail visible={true} style={{ fontSize: 16, marginLeft: '4px' }}>{store.user.email}</TitleEmail>
    );    
  }
});

function avatarTitle() {
  if(store.user.loggedin == true) {
    return "Upload a new avatar"
  }
  else {
    return "";
  }
}

const formSubmit = () => {
  return false;
}

const YourProfile = observer(() => {
  var user = {
    username: 'Guest',
    avatar: icons.user,
    email: '.'
  };

  var shouldInvert = 'invert(100%)';
  var shouldBr = '0';

  if(store.user.loggedin == true) {
    user.username = store.user.username
    user.avatar = store.user.avatar.split("/64")[0] + '/128'
    user.email = store.user.email
    shouldInvert = 'invert(0%)';
    shouldBr = '50%';
  }
  else {

  }
  return (
    <SettingsSection id="my-profile">
      <ListItem>
        <form encType="multipart/form-data" method="post" name="fileinfo">
          <input id="avatar-choose" onChange={avatarChange} accept="image/png" name="avatar" type="file" style={{ display: 'none' }}></input>
        </form>
        <Image src={store.user.avatar} id="user-avatar" title={avatarTitle()} onClick={pickAvatar} onMouseOver={onMouse} onMouseOut={offMouse} style={{ filter: `${shouldInvert}`, borderRadius: `${shouldBr}`, width: '48px', marginLeft: '-12px', transition: 'filter 0.3s' }}></Image>
        <div style={{ marginTop: '-7px' }}>
          <Title style={{ fontSize: 25, marginLeft: '4px' }}>{user.username}</Title>
          <Email />
        </div>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button onClick={login} visible={store.user.loggedin == false} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.settings[0].my_profile[0].sign_in_btn}
          </Button>
          <Button onClick={logout} visible={store.user.loggedin == true} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.settings[0].my_profile[0].sign_out_btn}
          </Button>
        </Buttons>
      </ListItem>
    </SettingsSection>
  );
});

async function avatarChange() {

  var files = document.getElementById('avatar-choose').files[0];

  if(files.type == "image/png") {
    if(files.size / 1024 / 1024 <= 2) {

      var content = await DataURI(files.path);

      store.user.avatar = content

      var form = document.forms.namedItem("fileinfo");
    
        var footprint = atob(localStorage.getItem("dot_footprint"));

        var email = footprint.split("||")[0];
        var password = footprint.split("||")[1];

        var oData = new FormData(form);

        var oReq = new XMLHttpRequest();
        oReq.open("POST", `https://dot.ender.site/api/v${store.api}/upload/avatar`, true);
        oReq.setRequestHeader("Authorization", `DotUser ${password} at ${email}`)
        oReq.send(oData);
        oReq.onload = function() {
          var body = JSON.parse(oReq.responseText);
        };
  

    }
  }

};

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

const sky = () => {
  var url = "https://github.com/SkyPlayzYT05"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const dtf = () => {
  var url = "https://github.com/DusterTheFirst"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const blz = () => {
  var url = "https://github.com/blizma"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const UKFlag = observer(() => {
  return (
    <Image src={icons.uk} style={{ width: '14px' }}></Image>
  )
});

const HeartEmote = observer(() => {
  return (
    <span style={{ color: '#ff4040' }}>❤</span>
  );
});

const chachy = () => {
  var url = "https://github.com/chachyyyy"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const translators = () => {
  var url = "https://github.com/dot-browser/desktop/pulls?q=is%3Apr+label%3Atranslator"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}

const aboutPage = () => {
  var url = "dot://about"
  store.tabs.addTab({url, active: true });
  store.overlay.visible = false;
}


const AboutDot = observer(() => {
  return (
    <SettingsSection>
      <ListItem>
        <Image id="maybe-click-the-arrow" onClick={clearSecretBoyo} src={icons.logo} style={{ width: '30px', transition: 'filter 0.2s' }}></Image>
        <Title style={{ fontSize: 20 }}>{store.locale.lang.standard[0].dot_full_with_version.replace(/{appVersion}/g, remote.app.getVersion())}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <A onClick={secretBoyo} style={{ padding: '22px 8px 10px 12px', cursor: 'pointer', transition: 'background-color 0.2s', borderRadius: '50%', marginRight: '-10px' }}>
            <Image src={icons.down} style={{ filter: 'invert(100%)' }}></Image>
          </A>
        </Buttons>
      </ListItem>
      <AboutWrapper id="about-wrapper">
        <Subtitle style={{ fontSize: 14, marginLeft: '40px' }}>{store.locale.lang.settings[0].about_dot[0].thanks_message} <ExtLink onClick={wexond}>Wexond</ExtLink> {store.locale.lang.settings[0].about_dot[0].wxnd_coffee}</Subtitle>
        <Subtitle style={{ fontSize: 14, marginLeft: '40px' }}>{store.locale.lang.settings[0].about_dot[0].made_in} <Image src={icons.uk} style={{ width: '14px' }}></Image>{store.locale.lang.settings[0].about_dot[0].gb_with} <span style={{ color: '#ff4040' }}>❤</span>.</Subtitle>
        <Subtitle style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>{store.locale.lang.settings[0].about_dot[0].developers_title}</Subtitle>
        <ExtLink onClick={enderdev} title="<endercraftergaming@gmail.com>" style={{ marginLeft: '60px', color: '#dadada' }}>EnderDev</ExtLink>
        <ExtLink onClick={geek} title="<thegaminggeek362@gmail.com>" style={{ marginLeft: '5px', color: '#dadada' }}>Jake Ward</ExtLink>
        <Subtitle style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>{store.locale.lang.settings[0].about_dot[0].beta_testers_title}</Subtitle>
        <ExtLink onClick={func} title="<oli.loversss@gmail.com>" style={{ marginLeft: '60px', color: '#dadada' }}>Oli</ExtLink>
        <ExtLink onClick={sky} title="<bognonjeremy05@gmail.com>" style={{ color: '#dadada' }}>Jeremy Bognon</ExtLink>
        <ExtLink onClick={blz} title="<blizzyisheres@gmail.com>" style={{ color: '#dadada' }}>Blizma</ExtLink>
        <ExtLink onClick={chachy} title="<shalomadecoolboy@outlook.com>" style={{ color: '#dadada' }}>Chachy</ExtLink>
        <Subtitle style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>{store.locale.lang.settings[0].about_dot[0].special_thanks_title}</Subtitle>
        <ExtLink onClick={dtf} title="<dusterthefirst@gmail.com>" style={{ marginLeft: '60px', color: '#dadada' }}>Zachary Kohnen</ExtLink>
        <Subtitle style={{ fontSize: 14, marginLeft: '40px', fontWeight: 450 }}>{store.locale.lang.settings[0].about_dot[0].translators_title}</Subtitle>
        <ExtLink onClick={translators} title={store.locale.lang.settings[0].about_dot[0].view_translators_github} style={{ marginLeft: '60px', color: '#dadada' }}>{store.locale.lang.settings[0].about_dot[0].view_translators}</ExtLink>
        <Subtitle style={{ fontSize: 12, marginLeft: '40px', marginTop: '30px', color: '#dadada' }}><ExtLink onClick={aboutPage} style={{ color: '#dadada' }}>{store.locale.lang.settings[0].about_dot[0].about_page_btn}</ExtLink></Subtitle>
        <Subtitle style={{ fontSize: 12, marginLeft: '40px', marginTop: '10px', color: '#dadada' }}>{store.locale.lang.settings[0].about_dot[0].copyright_notice}</Subtitle>
      </AboutWrapper>
    </SettingsSection>
  );
});

if(!file.get("downloadLocation")) {
  file.set("downloadLocation", resolve(homedir()) + '\\Downloads');
  file.save()
  var dl = file.get("downloadLocation");
}
else {
  var dl = file.get("downloadLocation");
}

const pickLocation = () => {
  var input = document.getElementById("download-picker");
  input.click();
}

const awaitDownloadUpdate = async () => {
  var input = document.getElementById("download-picker")
  dl = input.files[0].path;

  setTimeout(function() {

    file.set("downloadLocation", dl)
    file.save()
  
    store.downloads.location = dl;
    ipcRenderer.send('set-downloads-loc', `${dl}`);

    document.getElementById("dl-l").innerText = dl;

  }, 300);

}

const Downloads = observer(() => {
  return (
    <SettingsSection>
      <ListItem>
        <div>
          <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].downloads[0].download_loc}</Title>
          <Title id="dl-l" style={{ fontSize: 13, marginTop: '-7px', color: '#a2a2a2' }}>{dl}</Title>
        </div>
        <Buttons style={{ marginLeft: 'auto' }}>
          <IconButton visible={true} onClick={pickLocation} icon={icons.more} style={{ cursor: 'pointer' }} />
        </Buttons>
        <input onChange={awaitDownloadUpdate} type="file" id="download-picker" style={{ display: 'none' }} webkitdirectory="true" />
      </ListItem>
    </SettingsSection>
  );
});

const Passwords = observer(() => {

  if(store.user.loggedin == true) {

    if(store.options.authorized == false) {
      return (
        <SettingsSection style={{ height: '70px', paddingTop: '12px' }}>
          <ListItem style={{ display: 'block' }}> 
            <div style={{ display: 'flex', marginLeft: '-8px' }}>
              <InputField style={{ backgroundColor: '#80808047', color: '#fff', borderRadius: '25px', height: '45px', paddingLeft: '20px', fontSize: '19px', width: '230px' }} fontColor="white" color="white" type="password"></InputField>
              <Button visible={store.options.currentDisplay == 'passwords'} style={{ backgroundColor: 'transparent', color: '#fff', margin: '4px 4px 4px 10px' }}>
                {store.locale.lang.settings[0].my_profile[0].sign_in_btn}
              </Button>
            </div>
          </ListItem>
        </SettingsSection>
      )
    }
    if(store.options.authorized == true) {
      return (
        <SettingsSection>
          <ListItem>
            <div>
              <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].downloads[0].download_loc}</Title>
              <Title id="dl-l" style={{ fontSize: 13, marginTop: '-7px', color: '#a2a2a2' }}>{dl}</Title>
            </div>
            <Buttons style={{ marginLeft: 'auto' }}>
              <IconButton visible={true} onClick={pickLocation} icon={icons.more} style={{ cursor: 'pointer' }} />
            </Buttons>
            <input onChange={awaitDownloadUpdate} type="file" id="download-picker" style={{ display: 'none' }} webkitdirectory="true" />
          </ListItem>
        </SettingsSection>
      )
    }

  }

});

const Advanced = observer(() => {
  return (
    <SettingsSection>
      <ListItem>
        <Title style={{ fontSize: 15 }}>Show Discord Rich Presence</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <RPCSwitch />
        </Buttons>
      </ListItem>
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

const optionsData = file.get();

class ToggleSwitchDL extends React.Component {
  state = {
    dotLauncherToggle: optionsData.toggleDotLauncher,
    checkedB: true,
  };

  handleChange = (name: any) => (event: any) => {
    this.setState({ [name]: event.target.checked });
    if(name == "dotLauncherToggle") {
      if(optionsData.toggleDotLauncher == true) {
        file.set("toggleDotLauncher", false);
        console.info(`[SettingsStore] Set dotLauncherEnabled to false`)
        file.save();
        document.getElementById("dot").style.display = "none";
      }
      else {
        file.set("toggleDotLauncher", true);
        console.info(`[SettingsStore] Set dotLauncherEnabled to true`)
        file.save();
        document.getElementById("dot").style.opacity = "1";
        document.getElementById("dot").style.pointerEvents = "all";
        document.getElementById("dot").style.width = "auto";
        document.getElementById("dot").style.display = null;
      }
    }
  };

  render() {
    return (
      <Switch
        checked={this.state.dotLauncherToggle}
        onChange={this.handleChange('dotLauncherToggle')}
        value="checkedA"
        color="primary"
      />
    );
  }
}

export default ToggleSwitchDL;

var seMenuVisible = false;

const toggleSeMenu = (e: any) => {
  if(store.options.emojiCtx == false) {
    e.stopPropagation();
    if(store.options.searchEngineCtx == true) {
      store.options.searchEngineCtx = false
    }
    else {
      store.options.searchEngineCtx = true
    }
  }
}

const setSearchEngine = () => {

}

const setEngineGoogle = () => {
  file.set("searchEngine", "google");
  console.info(`[SettingsStore] Set searchEngine to custom string google`)
  file.save(); 
  seMenuVisible = false   
  store.options.currentSearchEngine
}

const setEngineBing = () => {
  file.set("searchEngine", "bing");
  console.info(`[SettingsStore] Set searchEngine to custom string bing`)
  file.save();  
  seMenuVisible = false 
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "#585858c7";
  document.getElementById("ctx-item-y").style.backgroundColor = "";
  document.getElementById("ctx-item-d").style.backgroundColor = "";
  document.getElementById("ctx-item-e").style.backgroundColor = "";
}

const setEngineYahoo = () => {
  file.set("searchEngine", "yahoo");
  console.info(`[SettingsStore] Set searchEngine to custom string yahoo`)
  file.save(); 
  seMenuVisible = false 
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "";
  document.getElementById("ctx-item-y").style.backgroundColor = "#585858c7";
  document.getElementById("ctx-item-d").style.backgroundColor = "";
  document.getElementById("ctx-item-e").style.backgroundColor = "";
}

const setEngineDdg = () => {
  file.set("searchEngine", "ddg");
  console.info(`[SettingsStore] Set searchEngine to custom string ddg`)
  file.save();    
  seMenuVisible = false
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "";
  document.getElementById("ctx-item-y").style.backgroundColor = "";
  document.getElementById("ctx-item-d").style.backgroundColor = "#585858c7";
  document.getElementById("ctx-item-e").style.backgroundColor = "";
}

const setEngineEcosia = () => {
  file.set("searchEngine", "ecosia");
  console.info(`[SettingsStore] Set searchEngine to custom string ecosia`)
  file.save();    
  seMenuVisible = false
  document.getElementById("ctx-item-g").style.backgroundColor = "";
  document.getElementById("ctx-item-b").style.backgroundColor = "";
  document.getElementById("ctx-item-y").style.backgroundColor = "";
  document.getElementById("ctx-item-d").style.backgroundColor = "";
  document.getElementById("ctx-item-e").style.backgroundColor = "#585858c7";
}

var se = file.get("searchEngine");
if(se == "google") {
  var cmICG = "#585858c7"
}
if(se == "yahoo") {
  var cmICY = "#585858c7"
}
if(se == "bing") {
  var cmICB = "#585858c7"
}
if(se == "ddg") {
  var cmICD = "#585858c7"
}
if(se == "ecosia") {
  var cmICE = "#585858c7"
}

if(!file.get("tempType")) {
  file.set("tempType", "c");
  document.getElementById("deg-type-cel").style.backgroundColor = "rgba(88, 88, 88, 0.78)";
  file.save()
}

export const setDTC = () => {
  document.getElementById("deg-type-cel").style.backgroundColor = "rgba(88, 88, 88, 0.78)";
  document.getElementById("deg-type-fah").style.backgroundColor = "";

  if(!file.get("tempType")) {
    file.set("tempType", "c")
    file.save()
    store.weather.load("c");
  }
  else {
    file.set("tempType", "c")
    file.save()
    store.weather.load("c");
  }
  
};

export const setDTF = () => {
  document.getElementById("deg-type-fah").style.backgroundColor = "rgba(88, 88, 88, 0.78)";
  document.getElementById("deg-type-cel").style.backgroundColor = "";

  if(!file.get("tempType")) {
    file.set("tempType", "F")
    file.save()
    store.weather.load("F");
  }
  else {
    file.set("tempType", "F")
    file.save()
    store.weather.load("F");
  }
};

var isC = "";
var isF = "";
if(file.get("tempType") == "c") {
  isC = "#585858c7"
}
if(file.get("tempType") == "F") {
  isF = "#585858c7"
}

const feedbackRef = React.createRef<Textfield>();

const sendFeedback = () => {
  var url = `https://github.com/dot-browser/desktop/issues/new?title=Enter a title&body=${feedbackRef.current.value}`
  store.tabs.openExternalLink({ url, active: true })
  feedbackRef.current.value = ''
};

export const Feedback = observer(() => {
  return (
    <SettingsSection>
      <ListItem style={{ display: 'block' }}> 
        <Title style={{ fontSize: 15, marginBottom: '18px' }}>{store.locale.lang.settings[0].feedback[0].feedback_title}</Title>
        <Textfield ref={feedbackRef} style={{ backgroundColor: '#80808047', color: '#fff', borderRadius: '25px', height: '121px', width: '395px' }} fontColor="white" color="white" type="name" placeholder={store.locale.lang.settings[0].feedback[0].describe_issue}></Textfield>
        <Buttons style={{ marginLeft: 'auto', marginTop: '-25px', padding: '7px' }}> 
          <Button onClick={sendFeedback} visible={store.options.currentDisplay == 'send_feedback'} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.standard[0].button_send}
          </Button>
        </Buttons>
      </ListItem>
    </SettingsSection>
  );
});

store.options.skin = icons.thumbs_up_default
if(store.options.emojiSkinTone == 'pale') {
  store.options.skin = icons.thumbs_up_pale
} else if(store.options.emojiSkinTone == 'medium_pale') {
  store.options.skin = icons.thumbs_up_medium_pale
} else if(store.options.emojiSkinTone == 'medium') {
  store.options.skin = icons.thumbs_up_medium
} else if(store.options.emojiSkinTone == 'medium_dark') {
  store.options.skin = icons.thumbs_up_medium_dark
} else if(store.options.emojiSkinTone == 'dark') {
  store.options.skin = icons.thumbs_up_dark
}

const toggleEmojiCtx = (e: any) => {
  if(store.options.searchEngineCtx == false) {
    e.stopPropagation();
    if(store.options.emojiCtx == true) {
      store.options.emojiCtx = false;
    }
    else {
      store.options.emojiCtx = true;
    }
  }
}

const createNew = (e: any) => {
  store.options.searchEngineCtx = false;
  store.options.seURLRef.current.value = '';
  store.options.seNameRef.current.value = '';
  store.options.seNameerror = false;
  store.options.seURLerror = false;
  e.stopPropagation();
  if(store.options.searchEngineNewModal == true) {
    store.options.searchEngineNewModal = false;
  }
  else {
    store.options.searchEngineNewModal = true;
  }
}

const toggleEditSe = (e: any) => {
  store.options.searchEngineCtx = false;
  store.options.seURLRef.current.value = '';
  store.options.seNameRef.current.value = '';
  store.options.seNameerror = false;
  store.options.seURLerror = false;
  e.stopPropagation();
  if(store.options.searchEngineEditModal == true) {
    store.options.searchEngineEditModal = false;
  }
  else {
    store.options.searchEngineEditModal = true;
  }
}

const createSearchEngine = (e: any) => {

  var pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');

  if(store.options.seNameRef.current.value.length == 0) {
    return store.options.seNameerror = true;
  }
  else {
    store.options.seNameerror = false;
  }

  if(store.options.seURLRef.current.value.length == 0) {
    return store.options.seURLerror = true;
  }
  else {
    store.options.seURLerror = false;
  }

  if(store.options.seURLRef.current.value.includes("%s") == false) {
    return store.options.seURLerror = true;
  }
  else {
    store.options.seURLerror = false;
  }

  if(pattern.test(store.options.seURLRef.current.value) == true) {
    store.options.seURLerror = false;

    var searchEngine = {
      title: store.options.seNameRef.current.value,
      url: store.options.seURLRef.current.value,
      favicon: `${`https://api.faviconkit.com/${new URL(store.options.seURLRef.current.value).hostname}/144`}`
    }
  
    store.options.searchEngineCtx = false;
    e.stopPropagation();
    store.options.searchEngineNewModal = false;

    store.options.addSe(searchEngine)

    
  }
  else {
    store.options.seURLerror = true;
  }

};

const isCustom = () => {
  if(store.options.seIsCustom == true) {
    return true;
  }
  else {
    return false;
  }
}

export const Appearance = observer(() => {
    return (
      <SettingsSection>
 
        <ListItem>
          <Title style={{ fontSize: 15 }}>Interface theme</Title>
          <Buttons style={{ marginLeft: 'auto', marginRight: '-12px' }}>
            <SelectList value={store.options.theme == 'dark' ? 'Dark' : 'Light'} children={store.options.themes} />
          </Buttons>
        </ListItem>

        <ListItem>
          <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].appearance[0].toggle_dot}</Title>
          <Buttons style={{ marginLeft: 'auto', marginRight: '-12px' }}>
            <ToggleSwitchDL />
          </Buttons>
        </ListItem>

        <ListItem>
          <Title style={{ fontSize: 15 }}>Emoji skin tone</Title>
          <Buttons style={{ marginLeft: 'auto' }}>
            <IconButton visible={true} onClick={toggleEmojiCtx} icon={store.options.skin} style={{ cursor: 'pointer', filter: 'invert(0)', backgroundSize: '20px', transition: '0.3s all' }} />
            <ContextMenu visible={store.options.emojiCtx == true} style={{ filter: 'invert(0)', width: '50px' }}>
              <ContextMenuItem selected={store.options.emojiSkinTone == 'default'} onClick={() => store.options.emojiSkin('default')} icon={icons.thumbs_up_default} style={{ padding: '15px', height: '45px', width: '50.5px' }} invert={true} opac={true}>

              </ContextMenuItem>
              <ContextMenuItem selected={store.options.emojiSkinTone == 'pale'} onClick={() => store.options.emojiSkin('pale')} icon={icons.thumbs_up_pale} style={{ padding: '15px', height: '45px', width: '50.5px' }} invert={true} opac={true}>

              </ContextMenuItem>
              <ContextMenuItem selected={store.options.emojiSkinTone == 'medium_pale'} onClick={() => store.options.emojiSkin('medium_pale')} icon={icons.thumbs_up_medium_pale} style={{ padding: '15px', height: '45px', width: '50.5px' }} invert={true} opac={true}>

              </ContextMenuItem>
              <ContextMenuItem selected={store.options.emojiSkinTone == 'medium'} onClick={() => store.options.emojiSkin('medium')} icon={icons.thumbs_up_medium} style={{ padding: '15px', height: '45px', width: '50.5px' }} invert={true} opac={true}>

              </ContextMenuItem>
              <ContextMenuItem selected={store.options.emojiSkinTone == 'medium_dark'} onClick={() => store.options.emojiSkin('medium_dark')} icon={icons.thumbs_up_medium_dark} style={{ padding: '15px', height: '45px', width: '50.5px' }} invert={true} opac={true}>

              </ContextMenuItem>
              <ContextMenuItem selected={store.options.emojiSkinTone == 'dark'} onClick={() => store.options.emojiSkin('dark')} icon={icons.thumbs_up_dark} style={{ padding: '15px', height: '45px', width: '50.5px' }} invert={true} opac={true}>

              </ContextMenuItem>
            </ContextMenu>
          </Buttons>
        </ListItem>

        <ListItem>
          <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].appearance[0].search_engine}</Title>
          <Buttons style={{ marginLeft: 'auto', marginRight: `${store.options.seIsCustom ? '-17px' : '0px'}`, display: 'inline-flex' }}>
            <IconButton style={{ backgroundSize: '18px', cursor: 'pointer' }} icon={icons.edit} onClick={toggleEditSe} visible={store.options.seIsCustom} />
            <DropArrow visible={true} onClick={toggleSeMenu} style={{ cursor: 'pointer' }} />
            <ContextMenu id="search-engine-dp" visible={store.options.searchEngineCtx == true} style={{ top: '280px', marginLeft: '-50px' }}>            
              <ContextMenuItem icon={'https://api.faviconkit.com/google.com/144'} onClick={() => store.options.setSearchEngine('google')} selected={store.options.currentSearchEngine == 'google'} id="ctx-item-g" invert={true} opac={true} borderRadius={true}>
                {store.locale.lang.settings[0].google_searchEngine}
              </ContextMenuItem>
              <ContextMenuItem onClick={() => store.options.setSearchEngine('yahoo')} icon={'https://api.faviconkit.com/yahoo.com/144'} selected={store.options.currentSearchEngine == 'yahoo'} id="ctx-item-y" invert={true} opac={true} borderRadius={true}>
                {store.locale.lang.settings[0].yahoo_searchEngine}
              </ContextMenuItem>
              <ContextMenuItem icon={'https://api.faviconkit.com/bing.com/144'} onClick={() => store.options.setSearchEngine('bing')} selected={store.options.currentSearchEngine == 'bing'} id="ctx-item-b" invert={true} opac={true} borderRadius={true}>
                {store.locale.lang.settings[0].bing_searchEngine}
              </ContextMenuItem>
              <ContextMenuItem icon={'https://api.faviconkit.com/duckduckgo.com/144'} onClick={() => store.options.setSearchEngine('ddg')} selected={store.options.currentSearchEngine == 'ddg'} id="ctx-item-d" invert={true} opac={true} borderRadius={true}>
                {store.locale.lang.settings[0].ddg_searchEngine}
              </ContextMenuItem>
              <ContextMenuItem icon={'https://api.faviconkit.com/ecosia.org/144'} onClick={() => store.options.setSearchEngine('ecosia')} selected={store.options.currentSearchEngine == 'ecosia'} id="ctx-item-e" invert={true} opac={true} borderRadius={true}>
                {store.locale.lang.settings[0].ecosia_searchEngine}
              </ContextMenuItem>
              {store.options.seList.length != 0 && <Line style={{ backgroundColor: '#80808030', marginBottom: '5px', marginTop: '0px' }} />}
              {store.options.seList.length != 0 && store.options.seList.map((e: any) => (
                <ContextMenuItem key={e._id} icon={e.favicon} onClick={() => store.options.setSearchEngine(e._id, e.url)} selected={store.options.currentSearchEngine == e._id} invert={true} opac={true} borderRadius={true}>
                  {e.title}
                </ContextMenuItem>
              ))}
              <Line style={{ backgroundColor: '#80808030', marginBottom: '5px', marginTop: '0px' }} />
              <ContextMenuItem icon={icons.add} onClick={createNew}>
                {store.locale.lang.settings[0].create_new}
              </ContextMenuItem>
            </ContextMenu>
          </Buttons>
        </ListItem>

        <DialogPopup onClick={createNew} visible={store.options.searchEngineNewModal == true}>
          <DialogTitle>Add search engine</DialogTitle>
          <DialogContent>
            <TextField 
              autoFocus
              margin="dense"
              id="se-name"
              label="Name of search engine"
              type="name"
              inputRef={store.options.seNameRef}
              error={store.options.seNameerror}
              fullWidth 
            ></TextField>
            <TextField 
              autoFocus
              margin="dense"
              id="se-url"
              label="URL with %s as search term"
              type="url"
              inputRef={store.options.seURLRef}
              error={store.options.seURLerror}
              fullWidth 
            ></TextField>
            <DialogActions>
              <DialogButton onClick={createNew} style={{ margin: '5px 6px', padding: '4px 10px', borderRadius: '4px' }}>
                <Ripple />
                Cancel
              </DialogButton>
              <DialogButton onClick={createSearchEngine} style={{ margin: '5px 6px', padding: '4px 10px', borderRadius: '4px' }}>
                <Ripple />
                Create
              </DialogButton>
            </DialogActions>
          </DialogContent>
        </DialogPopup>

        <DialogPopup onClick={toggleEditSe} visible={store.options.searchEngineEditModal == true}>
          <DialogTitle>Editing '{store.options.getSeTitle()}'</DialogTitle>
          <DialogContent>
            {/* <TextField 
              autoFocus
              margin="dense"
              id="se-name"
              label="New name"
              type="name"
              inputRef={store.options.seEditNameRef}
              error={store.options.seNameerror}
              fullWidth 
            ></TextField>
            <TextField 
              autoFocus
              margin="dense"
              id="se-url"
              label="New URL with %s as search term"
              type="url"
              inputRef={store.options.seEditURLRef}
              error={store.options.seURLerror}
              fullWidth 
            ></TextField> */}
            <DialogActions>
              <DialogButton onClick={toggleEditSe} style={{ margin: '5px 6px', padding: '4px 10px', borderRadius: '4px' }}>
                <Ripple />
                Cancel
              </DialogButton>
              <DialogButton onClick={() => store.options.deleteSe(store.options.getById(store.options.currentSearchEngine)._id)} style={{ margin: '5px 6px', padding: '4px 10px', borderRadius: '4px' }}>
                <Ripple />
                Delete
              </DialogButton>
            </DialogActions>
          </DialogContent>
        </DialogPopup>

        <ListItem>
          <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].appearance[0].temp_type}</Title>
          <Buttons style={{ marginLeft: 'auto', marginRight: '-17px', display: 'inline-flex' }}>
            <IconButton visible={true} icon={icons} id="deg-type-cel" onClick={setDTC} style={{ textAlign: 'center', backgroundColor: `${isC}` }}>
              <span style={{ lineHeight: '32px', color: 'black', fontWeight: 900, fontFamily: 'roboto' }}>°C</span>
            </IconButton>
            <IconButton visible={true} id="deg-type-fah" icon={icons} onClick={setDTF} style={{ textAlign: 'center', backgroundColor: `${isF}` }}>
              <span style={{ lineHeight: '32px', color: 'black', fontWeight: 900, fontFamily: 'roboto' }}>°F</span>
            </IconButton>
          </Buttons>
        </ListItem>

      </SettingsSection>
    );
});

export const openDevTools = () => {
  remote.webContents.getFocusedWebContents().openDevTools({ mode: 'detach' });  
              
  if (remote.webContents.getFocusedWebContents().isDevToolsOpened()) {
    remote.webContents.getFocusedWebContents().devToolsWebContents.focus();
  }
}

export const testNotif = () => {
  notify({
      title: 'Dot',
      appName: "Dot",
      message: 'Testing Notification',
      icon: resolve(app.getAppPath() + '\\static\\icon.png'),
      sound: true,
      wait: true
    },
    function(err: any, response: any) {
      
    }); 
};

const openLog = () => {
  remote.shell.openItem(remote.app.getPath('userData') + '\\dot-errors.log')
}

const MenuItem = observer(
  ({ selected, children, display, style, icon }: { selected: boolean; children: any; display: any, style?: any; icon?: any }) => (
    <NavigationDrawer.Item
      selected={selected}
      style={style}
      icon={icon}
      onClick={() => (store.options.currentDisplay = display)}
    >
      {children}
    </NavigationDrawer.Item>
  ),
);

export const Experiments = observer(() => {
  return (
    <SettingsSection>
      <ListItem>
        <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].dev_tools[0].chromium_dt}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button visible={store.user.experiments == true} onClick={openDevTools} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.standard[0].button_open}
          </Button>
        </Buttons>
      </ListItem>
      <ListItem>
        <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].dev_tools[0].send_test_notif}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button visible={store.user.experiments == true} onClick={testNotif} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.standard[0].button_run}
          </Button>
        </Buttons>
      </ListItem>
      <ListItem>
        <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].dev_tools[0].open_log}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button visible={store.user.experiments == true} onClick={openLog} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.standard[0].button_run}
          </Button>
        </Buttons>
      </ListItem>
    </SettingsSection>
  );
});

const downloadLatestLangs = () => {
  store.locale.languagePacksToInstall.forEach((element: any) => {
      console.debug(element.download_url)
  });
}

export const Languages = observer(() => {
  var itemChecked = file.get("language");
  var langs = store.locale.lang.languages[0];
  return (
    <SettingsSection>
      {allLangs.languages.map((i: any) => {

        if(itemChecked == i.flag) {
          i.icon = icons.checked
        }
        else {
          i.icon = icons.not_checked
        }

        i.id = `lang-btn-${i.flag}`
        var lang = langs[i.flag];

        return (<ListItem key={i.flag}>
          <Title style={{ fontSize: 15 }}> {i.title}</Title>
          <Buttons style={{ marginLeft: 'auto', display: 'flex' }}>
            <img style={{ width: '28px', height: '28px', marginLeft: '10px' }} src={`https://twemoji.maxcdn.com/2/72x72/` + i.flag_icon}></img>
            <LanguageButton id={i.id} icon={i.icon} onClick={() => setLanguage(i.flag)} style={{ textAlign: 'center', color: 'transparent', padding: '10px', transition: '0.3s background-image', cursor: 'pointer' }}>
              ----
            </LanguageButton>
          </Buttons>
        </ListItem>);
      })}
    </SettingsSection>
  );
});

var showLanguagePacks = false;

export const DownloadLanguages = observer(() => {

  return (
    <SettingsSection style={{ marginTop: '50px' }}>
      <ListItem>
        <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].languages[0].download_languages}</Title>
        <Buttons style={{ marginLeft: 'auto' }}>
            <Button onClick={downloadLatestLangs} visible={true} style={{ backgroundColor: 'transparent', color: '#fff' }}>
              {store.locale.lang.standard[0].button_download} ({store.locale.languagePackSize})
            </Button>
        </Buttons>
      </ListItem>
    </SettingsSection>
  )
});

function setLanguage(l: any) {
  var ol = file.get("language");
  file.set("language", l)
  file.save()
  document.getElementById(`lang-btn-${ol}`).style.backgroundImage = `url(${icons.not_checked})`
  document.getElementById(`lang-btn-${l}`).style.backgroundImage = `url(${icons.checked})`
  store.locale.setLanguage(l)
}

export const scrollMp = () => {
  document.getElementById("my-profile").scrollTop = 0;
}

export const Settings = observer(() => {
  return (
    <Container
      onClick={preventHiding}
      right
      id="settings"
      visible={
        store.overlay.currentContent === 'settings' && store.overlay.visible
      }
    >
      <Scrollable onScroll={onScroll} ref={scrollRef} style={{ transition: 'filter 0.2s' }}>
        <NavigationDrawer
          title={store.locale.lang.settings[0].title}
          onBackClick={onBackClick}
          search
          onSearchInput={onInput}
        >
          <MenuItem selected={store.options.currentDisplay == 'profile'} icon={icons.user} display="profile">{store.locale.lang.settings[0].my_profile[0].title}</MenuItem>
          <MenuItem selected={store.options.currentDisplay == 'appearance'} icon={icons.palette} display="appearance">{store.locale.lang.settings[0].appearance[0].title}</MenuItem>
          {store.user.loggedin == true && <MenuItem selected={store.options.currentDisplay == 'passwords'} icon={icons.unlock} display="passwords">Passwords</MenuItem>}
          <MenuItem selected={store.options.currentDisplay == 'downloads'} icon={icons.download} display="downloads">{store.locale.lang.settings[0].downloads[0].title}</MenuItem>
          <MenuItem selected={store.options.currentDisplay == 'languages'} icon={icons.translate} display="languages">{store.locale.lang.settings[0].languages[0].title}</MenuItem>
          {store.user.experiments == true && <MenuItem selected={store.options.currentDisplay == 'dev'} icon={icons.extensions} display="dev">{store.locale.lang.settings[0].dev_tools[0].title}</MenuItem>}
          <MenuItem selected={store.options.currentDisplay == 'about'} icon={icons.info} display="about">{store.locale.lang.settings[0].about_dot[0].title}</MenuItem>
          <MenuItem selected={store.options.currentDisplay == 'send_feedback'} icon={icons.feedback} display="send_feedback" style={{ bottom: 0, position: 'absolute', marginBottom: '16px' }} >{store.locale.lang.settings[0].feedback[0].title}</MenuItem>
        </NavigationDrawer>
        <Sections>
          <Content>
          
              {store.options.currentDisplay == 'profile' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.user})` }} /> {store.locale.lang.settings[0].my_profile[0].title}</Title>}
              {store.options.currentDisplay == 'profile' && <YourProfile />}

              {store.options.currentDisplay == 'appearance' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.palette})` }} /> {store.locale.lang.settings[0].appearance[0].title}</Title>}
              {store.options.currentDisplay == 'appearance' && <Appearance />}

              {store.options.currentDisplay == 'passwords' && store.user.loggedin == true && store.options.authorized == false && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.lock})` }} /> Verify your password</Title>}
              {store.options.currentDisplay == 'passwords' && store.user.loggedin == true && store.options.authorized == true && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.key})` }} /> Passwords</Title>}
              {store.options.currentDisplay == 'passwords' && store.user.loggedin == true && <Passwords />}

              {store.options.currentDisplay == 'downloads' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.download})` }} /> {store.locale.lang.settings[0].downloads[0].title}</Title>}
              {store.options.currentDisplay == 'downloads' && <Downloads />}

              {store.options.currentDisplay == 'languages' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.translate})` }} /> {store.locale.lang.settings[0].languages[0].title}</Title>}
              {store.options.currentDisplay == 'languages' && <Languages />}
              {/* {store.options.currentDisplay == 'languages' && <DownloadLanguages />} */}

              {store.user.experiments == true && store.options.currentDisplay == 'dev' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.extensions})` }} /> {store.locale.lang.settings[0].dev_tools[0].title}</Title>}
              {store.user.experiments == true && store.options.currentDisplay == 'dev' && <Experiments />}

              {store.options.currentDisplay == 'about' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.info})` }} /> {store.locale.lang.settings[0].about_dot[0].title}</Title>}
              {store.options.currentDisplay == 'about' && <AboutDot />}

              {store.options.currentDisplay == 'send_feedback' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.feedback})` }} /> {store.locale.lang.settings[0].feedback[0].title}</Title>}
              {store.options.currentDisplay == 'send_feedback' && <Feedback />}

          </Content>
        </Sections>
      </Scrollable>
    </Container>
  );
});

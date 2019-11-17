import * as React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import { ExtLink, Icon, Subtitle } from './style'
import { Button } from '../../../components/Button';
import { Textfield } from '../../../components/Textfield';
import { Sections, Image, SettingsSection, ListItem, Title, Buttons, A, AboutWrapper, TitleEmail } from './style';
import { icons } from '../../constants';
import { NavigationDrawer } from '../NavigationDrawer';
import { Content, Container, Scrollable } from '../Overlay/style';
import { preventHiding } from '../Overlay';
import console = require('console');
import Switch from '@material-ui/core/Switch';
import { resolve } from 'path';
import { homedir } from 'os';
import { IconButton, LanguageButton } from '../Overlay/style';
import { notify } from 'node-notifier';
import { ipcRenderer } from 'electron';
import SelectList, { SelectListItem } from '../SelectList';

const { remote } = require('electron')
const json = require("edit-json-file");
let file = json(resolve(homedir()) + '/dot/dot-options.json');
let allLangs = json(resolve(process.cwd() + '/src/renderer/app/locale/all-locale.json'));
allLangs = allLangs.toObject();

const scrollRef = React.createRef<HTMLDivElement>();

var win = remote.getCurrentWindow();
win.webContents.session.clearCache();

store.options.currentDisplay = "profile";

const onBackClick = () => {
  scrollRef.current.scrollTop = 0;
  store.options.searchEngineCtx = false;
  store.options.emojiCtx = false;
  store.bookmarks.menuVisible = false;
};

const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  
};

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
      <TitleEmail visible={false} style={{ fontSize: 16, marginLeft: '4px', marginTop: '-20px' }}>{store.user.email}</TitleEmail>
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
          <input id="avatar-choose" onChange={() => alert("This has been temporarily disabled.")} accept="image/png" name="avatar" type="file" style={{ display: 'none' }}></input>
        </form>
        <Image src={store.user.avatar} id="user-avatar" title={avatarTitle()} onClick={pickAvatar} onMouseOver={onMouse} onMouseOut={offMouse} style={{ filter: `${shouldInvert}`, borderRadius: `${shouldBr}`, width: '48px', marginLeft: '-12px', transition: 'filter 0.3s' }}></Image>
        <div style={{ marginTop: '-7px' }}>
          <Title style={{ fontSize: 25, marginLeft: '4px' }}>{user.username}</Title>
          <Email />
        </div>
        <Buttons style={{ marginLeft: 'auto' }}>
          <Button onClick={() => alert("This has been temporarily disabled.")} visible={store.user.loggedin == false} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.settings[0].my_profile[0].sign_in_btn}
          </Button>
          <Button onClick={() => alert("This has been temporarily disabled.")} visible={store.user.loggedin == true} style={{ backgroundColor: 'transparent', color: '#fff' }}>
            {store.locale.lang.settings[0].my_profile[0].sign_out_btn}
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
        <Image id="maybe-click-the-arrow" onClick={clearSecretBoyo} src={icons.logo} style={{ width: '30px', transition: 'filter 0.2s', filter: 'var(--overlay-logo-filter)' }}></Image>
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
        <Subtitle style={{ fontSize: 12, marginLeft: '40px', marginTop: '10px', color: 'var(--general-subtitle)' }}>{store.locale.lang.settings[0].about_dot[0].copyright_notice}</Subtitle>
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
  var input = document.getElementById("download-picker") as HTMLInputElement;
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
        <input onChange={awaitDownloadUpdate} type="file" id="download-picker" style={{ display: 'none' }} />
      </ListItem>
    </SettingsSection>
  );
});

const secretBoyo = () => {
  var x = document.getElementById("about-wrapper");
  if (x.style.display === "none") {
    x.style.display = null;
    document.getElementById("maybe-click-the-arrow").style.filter = `var(--overlay-logo-filter)`
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
  document.getElementById("maybe-click-the-arrow").style.filter = `var(--overlay-logo-filter)`
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
        color="default"
      />
    );
  }
}

export default ToggleSwitchDL;

/* Deprecated soon */
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

/* Deprecated soon */
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

const setTheme = (theme: 'dark' | 'light') => {
  store.options.setTheme(theme)
  store.options.theme = theme
}

const uiRef = React.createRef<HTMLDivElement>();

export const Appearance = observer(() => {
    return (
      <SettingsSection>
 
        <ListItem>
          <Title style={{ fontSize: 15 }}>Interface theme</Title>
          <Buttons style={{ marginLeft: 'auto', marginRight: '-12px' }}>

            <SelectList 
              value={store.options.theme == 'dark' ? 'Dark' : 'Light'} 
              parentRef={uiRef}
              icon={store.options.theme == 'dark' ? icons.dark : icons.light}
            >
              <SelectListItem onClick={() => setTheme('dark')} parentRef={uiRef} icon={icons.dark}>
                Dark
              </SelectListItem>

              <SelectListItem onClick={() => setTheme('light')} parentRef={uiRef} icon={icons.light}>
                Light
              </SelectListItem>

            </SelectList>
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
      icon: resolve(process.cwd() + '\\static\\icon.png'),
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

const searchRef = React.createRef<HTMLDivElement>();

export const Search = observer(() => {
  return (
    <SettingsSection>
        <ListItem>
          <Title style={{ fontSize: 15 }}>{store.locale.lang.settings[0].appearance[0].search_engine}</Title>
          <Buttons style={{ marginLeft: 'auto', marginRight: `${store.options.seIsCustom ? '-17px' : '0px'}`, display: 'inline-flex' }}>

            <SelectList 
              value={store.options.theme == 'dark' ? 'Dsdfgsdfgsdfgark' : 'Lighfsdfasdt'} 
              parentRef={searchRef}
              icon={store.options.theme == 'dark' ? icons.dark : icons.light}
            >
              <SelectListItem onClick={() => setTheme('dark')} parentRef={searchRef} icon={icons.dark}>
                Darkfxgbc
              </SelectListItem>

              <SelectListItem onClick={() => setTheme('light')} parentRef={searchRef} icon={icons.light}>
                Lightsdfgsdfgdfgsdfg
              </SelectListItem>

            </SelectList>
            </Buttons>
        </ListItem>
    </SettingsSection>
  )
});

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
      <Scrollable ref={scrollRef} style={{ transition: 'filter 0.2s' }}>
        <NavigationDrawer
          title={store.locale.lang.settings[0].title}
          onBackClick={onBackClick}
          search
          onSearchInput={onInput}
        >
          <MenuItem selected={store.options.currentDisplay == 'profile'} icon={icons.user} display="profile">{store.locale.lang.settings[0].my_profile[0].title}</MenuItem>
          <MenuItem selected={store.options.currentDisplay == 'appearance'} icon={icons.palette} display="appearance">{store.locale.lang.settings[0].appearance[0].title}</MenuItem>
          <MenuItem selected={store.options.currentDisplay == 'search'} icon={icons.search} display="search">{store.locale.lang.settings[0].appearance[0].search_engine}</MenuItem>
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

              {store.options.currentDisplay == 'search' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.search})` }} /> {store.locale.lang.settings[0].appearance[0].search_engine}</Title>}
              {store.options.currentDisplay == 'search' && <Search />}

              {store.options.currentDisplay == 'downloads' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.download})` }} /> {store.locale.lang.settings[0].downloads[0].title}</Title>}
              {store.options.currentDisplay == 'downloads' && <Downloads />}

              {store.options.currentDisplay == 'languages' && <Title style={{ margin: '75px -30px -25px -30px' }}><Icon style={{ backgroundImage: `url(${icons.translate})` }} /> {store.locale.lang.settings[0].languages[0].title}</Title>}
              {store.options.currentDisplay == 'languages' && <Languages />}

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

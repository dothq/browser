import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonActionSheet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import FeatherIcon from 'feather-icons-react';
import SearchTab from './pages/SearchTab';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/default.css';
import Header from './components/Header';
import NTPPage from './pages/NTPPage';

import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';

const { StatusBar } = Plugins;

const App: React.FC = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  StatusBar.setStyle({
    style: StatusBarStyle.Light
  });

  StatusBar.setOverlaysWebView({
    overlay: true
  });

  return (
    <IonApp>
      <IonActionSheet
        isOpen={menuVisible}
        onDidDismiss={() => setMenuVisible(false)}
        cssClass='my-custom-class'
        buttons={[{
          text: 'Forward',
        }, {
          text: 'Favourite',
        }, {
          text: 'Page Info',
        }, {
          text: 'Reload',
        }]}
      >
      </IonActionSheet>
      <Header />
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/search" component={SearchTab} exact={true} />
            <Route path="/newtab" component={NTPPage} exact={true}  />
            <Route path="/tab3" component={Tab3} />
            <Route path="/" render={() => <Redirect to="/search" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" className={"dot-tabbar"}>
            <IonTabButton tab="newtab" href="/newtab">
              <FeatherIcon icon={"home"} />
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <FeatherIcon icon={"search"} />
            </IonTabButton>
            <IonTabButton>
              <FeatherIcon icon={"share"} />
            </IonTabButton>
            <IonTabButton onClick={() => setMenuVisible(true)}>
              <FeatherIcon icon={"more-horizontal"} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;

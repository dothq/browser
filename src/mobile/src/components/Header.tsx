

import React from 'react';
import { IonHeader, IonToolbar, IonInput, IonButton } from '@ionic/react';
import FeatherIcon from 'feather-icons-react';
import { createBrowserHistory } from 'history';

const Header: React.FC = () => {
  const [abHidden, setAddressbarHidden] = React.useState(true);

  React.useEffect(() => {
    setInterval(() => {
      const history = createBrowserHistory()

      if(history.location.pathname === "/newtab") setAddressbarHidden(false)
      else setAddressbarHidden(true)
    }, 1)
  })

  return (
    <IonHeader>
        <IonToolbar className={"dot-toolbar"} style={{ boxShadow: abHidden ? '' : 'none' }}>
            <div className={"dot-toolbar-container"}>
                <IonInput style={{ marginTop: abHidden ? '0px' : '-95px' }} className={"dot-searchbox"} placeholder="Search or type web address"></IonInput>
                <IonButton fill={"clear"} className={"dot-tabs-icon"}>
                    <FeatherIcon icon={"square"} />
                    <span className={"dot-tabs-icon-text"}>1</span>
                </IonButton>
            </div>
        </IonToolbar>
    </IonHeader>
  );
};

export default Header;

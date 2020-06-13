

import React from 'react';
import { IonHeader, IonToolbar, IonInput, IonButton } from '@ionic/react';
import FeatherIcon from 'feather-icons-react';

const Header: React.FC = () => {
  return (
    <IonHeader>
        <IonToolbar className={"dot-toolbar"}>
            <div className={"dot-toolbar-container"}>
                <IonInput className={"dot-searchbox"} placeholder="Search or type web address"></IonInput>
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

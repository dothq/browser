import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import NTP from '../components/NTP';

const NTPPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NTP</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NTP />
      </IonContent>
    </IonPage>
  );
};

export default NTPPage;

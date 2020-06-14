import React from 'react';
import { IonRefresher, IonRefresherContent, IonInput } from '@ionic/react';

const NTP: React.FC = () => {
  return (
    <div className={"dot-ntp-container"}>
      <div className={"dot-ntp-logo"} />
      <IonInput className={"dot-ntp-searchbox"} placeholder="Search or type web address"></IonInput>
    </div>
  );
};

export default NTP;

import React from 'react';
import './ExploreContainer.css';
import { IonRefresher, IonRefresherContent } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div>
      <IonRefresher slot="fixed">
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <div className="container">
        <strong>{name}</strong>
        <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </div>
  );
};

export default ExploreContainer;

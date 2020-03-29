import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle></IonCardSubtitle>
            <IonCardTitle>PhotoSnap</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This application helps you to build your own Snap Gallery. Where ever you are just open the app and capture a quick snap. That's it and enjoy the wonderful feature, SMILE...
          </IonCardContent>
        </IonCard>       
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

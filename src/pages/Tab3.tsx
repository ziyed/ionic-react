import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { informationCircleOutline, mailOutline } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Developer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>            
            <IonCardTitle>Md. Ziyed Uddin</IonCardTitle>
            <IonCardSubtitle>Team Lead | Full Stack | DevOps <br/> Consultant | Trainer | Software Architect </IonCardSubtitle>
          </IonCardHeader>          
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Contact</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            ziyed.cse@gmail.com
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Bio</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Hello, I have 9+ years of professional experience on web technologies and application development. I have been working with local and foreign clients from USA, Canada, UK, Australia, Japan. I always try to develop my skills on new web technologies. In my work, I always maintain my sincerity, honesty and value the time of project deadline for my Honorable Clients.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

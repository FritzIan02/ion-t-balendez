import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Balendez</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      {/* <img alt="Silhouette of mountains" src="https://raw.githubusercontent.com/FritzIan02/ion-t-balendez/main/src/Assets/Img/Fritz.jpg" /> */}
      <img alt="Silhouette of mountains" src="https://raw.githubusercontent.com/FritzIan02/ion-t-balendez/dev-quotesgenerator-firebase/src/Assets/Img/Fritz.jpg" />

      <IonCardHeader>
        <IonCardTitle>Fritz Handsome</IonCardTitle>
        <IonCardSubtitle>Always</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Thank you!!</IonCardContent>
    </IonCard>
        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

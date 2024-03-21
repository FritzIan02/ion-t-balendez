import {
    //Initial Components
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';

// CSS
//import './profile.css';
  
  const Home: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home ni sha bay</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };
  
  //
  export default Home;
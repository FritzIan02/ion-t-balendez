import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonBadge
} from '@ionic/react';

// Custom CSS
import './home.css';

// Ionic Icons
import { speedometerOutline, calculator, pencil, chatbubble, logoIonic, logoReact, logoFirebase, readerOutline } from 'ionicons/icons';

// Additional Routes
// import Click_counter from './Click_counter';

const cardData = [
  {
    img: './src/img/CLICK_COUNTER.png',
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/clickcounter',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    img: './src/img/CALCULATOR.png',
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/calculator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    img: './src/img/TODO_LIST.png',
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/todolist',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    img: './src/img/QUOTES_GENERATOR.png',
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/quotesgenerator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    img: './src/img/NOTES.png',
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact,
      tag3: logoFirebase
    }
  }
];

const Home: React.FC = () => {
  // Dynamic Search
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <IonPage className="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Dynamic Search */}
        <>
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />

          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} routerLink={card.link} routerDirection='forward' id="card_body" className="card-gradient">
                <img 
                  className="card-img img-1x1" 
                  alt="Silhouette of mountains" 
                  src={card.img} 
                />
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonCardHeader>
                            <IonCardTitle>{card.title}</IonCardTitle>
                            <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                          </IonCardHeader>
                        </IonCol>
                        <IonCol size="auto">
                          <div>
                            <IonButton style={{ width: '150px', marginTop: '12px' }}>View</IonButton>
                          </div>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            ))}
        </>
      </IonContent>
    </IonPage>
  );
};

export default Home;

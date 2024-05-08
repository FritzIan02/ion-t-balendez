// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDR-ulYodUgzBKNXxMpNUKqneSJ4bE7Omc",
    authDomain: "it35-jalinon.firebaseapp.com",
    projectId: "it35-jalinon",
    storageBucket: "it35-jalinon.appspot.com",
    messagingSenderId: "308993848384",
    appId: "1:308993848384:web:5f68dd9e9702cac99fdba5",
    measurementId: "G-83LPG0TMPN"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPM5IBWLu9DFShXn0zXtlgSmVz819sKNU",
    authDomain: "ion-t-balendez.firebaseapp.com",
    projectId: "ion-t-balendez",
    storageBucket: "ion-t-balendez.appspot.com",
    messagingSenderId: "373292016925",
    appId: "1:373292016925:web:3ab901aa48365781192df4",
    measurementId: "G-KQW74P4R7L"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}
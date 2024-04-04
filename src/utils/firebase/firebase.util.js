// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBSI7maT_3S6-w3uG3s0rsda1ilHcRedQA",
  
    authDomain: "zaid-clothing.firebaseapp.com",
  
    projectId: "zaid-clothing",
  
    storageBucket: "zaid-clothing.appspot.com",
  
    messagingSenderId: "565871177443",
  
    appId: "1:565871177443:web:185c4e6efe04952a6a9fd6"
  
  };
  

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>signInWithPopup(auth,provider);
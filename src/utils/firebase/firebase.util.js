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

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    //check if user data exists => I do not want to do any thing just return userDocRef
    // if user data does not exist => I want to do
      if(! userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        }catch(error){
            console.log('error creating the user',error.message)
        }
     }

     return userDocRef;

  
};
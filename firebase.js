import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
}

const app = initializeApp(firebaseConfig)

export const isAuthenticated = () => {
    return firebase.auth().currentUser !== null;
  };
  
  export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };
  
  export const signOut = () => {
    return firebase.auth().signOut();
  };

export const auth = getAuth(app)
export const db = getFirestore(app)
import firebase from "firebase/compat/app";
//auth
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86TueC0yPSTeDsk4ZKLgJhtOgWLKXRB0",
  authDomain: "clone-373f5.firebaseapp.com",
  projectId: "clone-373f5",
  storageBucket: "clone-373f5.firebasestorage.app",
  messagingSenderId: "1076794648443",
  appId: "1:1076794648443:web:71ca861db4ac0c2cd57fde",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


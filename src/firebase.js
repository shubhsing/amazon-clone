import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {  createUserWithEmailAndPassword } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxPTD_k4L-iUPJlDHsE7NrZVvOhFE6o0Q",
    authDomain: "clone-a1ee8.firebaseapp.com",
    projectId: "clone-a1ee8",
    storageBucket: "clone-a1ee8.appspot.com",
    messagingSenderId: "683519701462",
    appId: "1:683519701462:web:0d6e82354cfe33976d7477",
    measurementId: "G-DQVQ0ED2SJ"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const db  = app.firestore()

  export {db,auth} 

  

  
  
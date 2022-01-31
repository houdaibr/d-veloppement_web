import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCLfuFtIlKqbSGu6wHrtTmiE7guKKOAEjE",
  authDomain: "phonestore-e8a17.firebaseapp.com",
  projectId: "phonestore-e8a17",
  storageBucket: "phonestore-e8a17.appspot.com",
  messagingSenderId: "967031286328",
  appId: "1:967031286328:web:cae49470b90a7ec69314cd",
  measurementId: "G-HZ6Q0VBVWF"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}
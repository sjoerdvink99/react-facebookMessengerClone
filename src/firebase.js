import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPM71y57hCgTBLw5hGiKCfFLQR_vZ6tDU",
  authDomain: "facebook-messenger-1ff2f.firebaseapp.com",
  projectId: "facebook-messenger-1ff2f",
  storageBucket: "facebook-messenger-1ff2f.appspot.com",
  messagingSenderId: "976041279356",
  appId: "1:976041279356:web:50716d3c2bcdcee2652ef9",
});

const db = firebaseApp.firestore();

export default db;

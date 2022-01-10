import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZvspCWi_My-qtexki_5TU3kV-9504Dz4",
  authDomain: "yell-translate.firebaseapp.com",
  projectId: "yell-translate",
  storageBucket: "yell-translate.appspot.com",
  messagingSenderId: "216779646254",
  appId: "1:216779646254:web:734fa61f94ad577eaa86bf",
  measurementId: "G-9VZWRR76RQ",
};

// init firebase

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };

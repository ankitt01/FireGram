import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKpQK9B04qdfIzmDevJYbdWfmmF4vCQ8E",
    authDomain: "firegram-32c65.firebaseapp.com",
    projectId: "firegram-32c65",
    storageBucket: "firegram-32c65.appspot.com",
    messagingSenderId: "831619959843",
    appId: "1:831619959843:web:5bc9ab8ab96e2467c3f596",
    measurementId: "G-Y47XS0P6D2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
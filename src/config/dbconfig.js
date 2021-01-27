import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCZKP9AdN5fRI7_muKfe-MIOWOo186Q_FM",
    authDomain: "evernote-93089.firebaseapp.com",
    projectId: "evernote-93089",
    storageBucket: "evernote-93089.appspot.com",
    messagingSenderId: "696705001594",
    appId: "1:696705001594:web:cd6c1914556e37c7f2b3c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXlMbxJKHQcWpIl7Bz3x1W_cuLTGtSS08",
    authDomain: "facebook-clone-507bb.firebaseapp.com",
    projectId: "facebook-clone-507bb",
    storageBucket: "facebook-clone-507bb.appspot.com",
    messagingSenderId: "989978773291",
    appId: "1:989978773291:web:7de52c93e619528b82e76e",
    measurementId: "G-XYGKBMBJ1X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqOPzjCyqWlUTx70YNbn273aYhVnBlhro",
    authDomain: "moviem-701a7.firebaseapp.com",
    projectId: "moviem-701a7",
    storageBucket: "moviem-701a7.appspot.com",
    messagingSenderId: "552032120625",
    appId: "1:552032120625:web:8a4bb96dd635eb3859ca10",
    measurementId: "G-SQREKH1ML4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);


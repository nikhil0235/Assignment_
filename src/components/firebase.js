// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZTERPqSXkOBidsOACp9XpGQDVnwqUa-Y",
  authDomain: "chat-karoo-3f7a2.firebaseapp.com",
  projectId: "chat-karoo-3f7a2",
  storageBucket: "chat-karoo-3f7a2.appspot.com",
  messagingSenderId: "444519672505",
  appId: "1:444519672505:web:1716db07f3be3caf0bc968",
  measurementId: "G-WXYBKQTN4T",
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
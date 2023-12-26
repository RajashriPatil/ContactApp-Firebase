// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAvO8QjoGcHZvw2BdAxiuWlDd3NiOgdWM",
  authDomain: "vite-contact-7f476.firebaseapp.com",
  projectId: "vite-contact-7f476",
  storageBucket: "vite-contact-7f476.appspot.com",
  messagingSenderId: "368588400693",
  appId: "1:368588400693:web:53d002328803bab597a97c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
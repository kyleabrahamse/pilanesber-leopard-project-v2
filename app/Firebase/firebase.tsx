import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'; // Import the getStorage function

const firebaseConfig = {
  apiKey: "AIzaSyAikG59BNR_ZDzzQUj1JCUD8IuESh4Q2_4",
  authDomain: "pilanesberg-leopards.firebaseapp.com",
  projectId: "pilanesberg-leopards",
  storageBucket: "pilanesberg-leopards.appspot.com",
  messagingSenderId: "817250863064",
  appId: "1:817250863064:web:cdad2ee918542a4cf594ad",
  measurementId: "G-XYEX89P8CY",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const storage = getStorage(); // Use the getStorage() function

export {db, storage}
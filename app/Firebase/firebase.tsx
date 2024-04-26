import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export default db

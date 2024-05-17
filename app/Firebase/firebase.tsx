import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'; // Import the getStorage function

const firebaseConfig = {
  apiKey: "AIzaSyAOf9gXlItZYLPh-hq4cH3YLVNqulQn6-o",
  authDomain: "pilanesberg-leopards-f68bc.firebaseapp.com",
  projectId: "pilanesberg-leopards-f68bc",
  storageBucket: "pilanesberg-leopards-f68bc.appspot.com",
  messagingSenderId: "318585215067",
  appId: "1:318585215067:web:060bdc003f467d3d02c77e"
};


// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const storage = getStorage(); // Use the getStorage() function

export {db, storage}
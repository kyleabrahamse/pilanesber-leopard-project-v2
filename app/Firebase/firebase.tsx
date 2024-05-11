import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'; // Import the getStorage function

const firebaseConfig = {
  apiKey: "AIzaSyCoceKxaGJLd2AxlKP7KF-6-N-4XBOYyRM",
  authDomain: "leopard-project.firebaseapp.com",
  projectId: "leopard-project",
  storageBucket: "leopard-project.appspot.com",
  messagingSenderId: "262497736723",
  appId: "1:262497736723:web:dccb3c2c30489966f2c7e6"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const storage = getStorage(); // Use the getStorage() function

export {db, storage}
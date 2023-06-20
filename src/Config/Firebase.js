import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyBG-BMkqE3wvPnGLDzF0hWvWTbVESaBr8k",
  authDomain: "tiktok---jornadadev-185fb.firebaseapp.com",
  projectId: "tiktok---jornadadev-185fb",
  storageBucket: "tiktok---jornadadev-185fb.appspot.com",
  messagingSenderId: "572389789122",
  appId: "1:572389789122:web:e246333f5cb2ff28c35a5b"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;

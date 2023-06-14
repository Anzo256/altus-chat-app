
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5c4lCZq3K16r_I3rHaRtHqZX448npjVQ",
  authDomain: "altus-chat-app.firebaseapp.com",
  projectId: "altus-chat-app",
  storageBucket: "altus-chat-app.appspot.com",
  messagingSenderId: "842806474774",
  appId: "1:842806474774:web:2c5f5ff45dc64ec9019d37"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
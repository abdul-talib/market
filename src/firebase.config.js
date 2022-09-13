
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYs3eTVPrEzfG__rhBHr63417tkcImTH8",
  authDomain: "house-marketplace-app-b0ae0.firebaseapp.com",
  projectId: "house-marketplace-app-b0ae0",
  storageBucket: "house-marketplace-app-b0ae0.appspot.com",
  messagingSenderId: "24516084654",
  appId: "1:24516084654:web:9f9e941a06f0d0cb2d7e3f"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
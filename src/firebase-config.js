// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY4G6E3_Ct8xgZSHOQL9o8taP4X_0jR-o",
  authDomain: "lego-3f23f.firebaseapp.com",
  projectId: "lego-3f23f",
  storageBucket: "lego-3f23f.appspot.com",
  messagingSenderId: "337714694273",
  appId: "1:337714694273:web:0b433d742d89eae9222580",
  measurementId: "G-4ZGZ0RD1F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
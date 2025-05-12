// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt0p9q88e5OkYKJ98IS2lvjH9FJv_Q-S8",
  authDomain: "react-app-2092b.firebaseapp.com",
  projectId: "react-app-2092b",
  storageBucket: "react-app-2092b.firebasestorage.app",
  messagingSenderId: "946374078332",
  appId: "1:946374078332:web:a29fb76f5129c8cfc6fef9",
  measurementId: "G-X15YRSQTC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAQzoFDczewhHuUwXPHR7gHrK0ye7DlQ24",
  authDomain: "netflixgpt-c779c.firebaseapp.com",
  projectId: "netflixgpt-c779c",
  storageBucket: "netflixgpt-c779c.firebasestorage.app",
  messagingSenderId: "943297431119",
  appId: "1:943297431119:web:eb03d3be0d6fbe08ab0c3a",
  measurementId: "G-ZV2W1GN7XY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

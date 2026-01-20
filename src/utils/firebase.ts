
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAlD7d_Yr4vd9V3cUAjHkdJr4DGzWrlgM",
  authDomain: "netflix-gpt-de015.firebaseapp.com",
  projectId: "netflix-gpt-de015",
  storageBucket: "netflix-gpt-de015.firebasestorage.app",
  messagingSenderId: "525786649520",
  appId: "1:525786649520:web:7374f06d3427651f0bbc75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
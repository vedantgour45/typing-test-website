// Connecting Firebase with React App
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9GlxR1-uJda1fM06UTBukiRWHd7xVjbM",
  authDomain: "typing-test-eb93c.firebaseapp.com",
  projectId: "typing-test-eb93c",
  storageBucket: "typing-test-eb93c.appspot.com",
  messagingSenderId: "944896569560",
  appId: "1:944896569560:web:06f85d5bfa7fe1feef27ad",
  measurementId: "G-D931LE7WXL",
};

// Initializing Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };

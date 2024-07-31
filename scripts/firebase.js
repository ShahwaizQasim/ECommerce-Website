// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3S5rBE9GMgS6URPTVFVgv__SrJA5OC-4",
  authDomain: "signup-f3d4f.firebaseapp.com",
  projectId: "signup-f3d4f",
  storageBucket: "signup-f3d4f.appspot.com",
  messagingSenderId: "878451625573",
  appId: "1:878451625573:web:536e66947f4a29a158c08c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// createUserWithEmailAndPassword(auth, email, password)

const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  addDoc,
};

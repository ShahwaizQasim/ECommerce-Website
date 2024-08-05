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
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD039SnLIzUujPMPFyhd0kRLgncJ4T1mcg",
  authDomain: "ecommerce-website-f7983.firebaseapp.com",
  projectId: "ecommerce-website-f7983",
  storageBucket: "ecommerce-website-f7983.appspot.com",
  messagingSenderId: "521217976241",
  appId: "1:521217976241:web:f91b66a7a9348eff78ff90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// createUserWithEmailAndPassword(auth, email, password)

const db = getFirestore(app);

const storage = getStorage(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  db,
  collection,
  addDoc,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  onSnapshot
};

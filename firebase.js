import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getFirestore,
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8htr-92P3Bac3a4wbCZD2XT_n7Rxh4wo",
  authDomain: "shopkart-e7f4c.firebaseapp.com",
  projectId: "shopkart-e7f4c",
  storageBucket: "shopkart-e7f4c.firebasestorage.app",
  messagingSenderId: "341853446057",
  appId: "1:341853446057:web:413fcf18f1a8af66f66eb8",
  measurementId: "G-25G30524ZH"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, getDocs };
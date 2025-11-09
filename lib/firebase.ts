// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvrA0VEB-t-CIQNImXCG_avZGrDRPYhPQ",
  authDomain: "patenthive-54b04.firebaseapp.com",
  projectId: "patenthive-54b04",
  storageBucket: "patenthive-54b04.appspot.com",
  messagingSenderId: "155966109917",
  appId: "1:155966109917:web:0df47390d7457d4aa0c334"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

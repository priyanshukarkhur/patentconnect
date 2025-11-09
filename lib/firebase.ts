import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvrA0VEB-t-CIQNImXCG_avZGrDRPYhPQ",
  authDomain: "patenthive-54b04.firebaseapp.com",
  projectId: "patenthive-54b04",
  storageBucket: "patenthive-54b04.appspot.com", // ✅ Correct bucket
  messagingSenderId: "155966109917",
  appId: "1:155966109917:web:0df47390d7457d4aa0c334"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF3aaU-Za0u3X-rgUUotuicwY89wN-uh4",
  authDomain: "movies-lab-16c1c.firebaseapp.com",
  projectId: "movies-lab-16c1c",
  storageBucket: "movies-lab-16c1c.appspot.com",
  messagingSenderId: "283423968037",
  appId: "1:283423968037:web:608bf529614d4a391928cc",
  measurementId: "G-NZEY66E8T4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };


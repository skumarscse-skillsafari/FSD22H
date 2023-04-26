import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPniWMWHyIPNWTcrM7SHwZ9HzaMgy8vNA",
  authDomain: "remainder-app-3790e.firebaseapp.com",
  projectId: "remainder-app-3790e",
  storageBucket: "remainder-app-3790e.appspot.com",
  messagingSenderId: "801497447573",
  appId: "1:801497447573:web:83ee0b6f8437ba8929af9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

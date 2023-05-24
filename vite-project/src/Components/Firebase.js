import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDftE5QrKkKHw-U_tu-rGxzSfDa5yvsjo4",
    authDomain: "task-traker-7ff61.firebaseapp.com",
    projectId: "task-traker-7ff61",
    storageBucket: "task-traker-7ff61.appspot.com",
    messagingSenderId: "582681518811",
    appId: "1:582681518811:web:444fd977133158f780a2fe",
    measurementId: "G-4QV7QB8F5S"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
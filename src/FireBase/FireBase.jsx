import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkzFYHT1q9ssEbPC-Plf__dctPFLN7Ndc",
    authDomain: "my-project-4ad12.firebaseapp.com",
    projectId: "my-project-4ad12",
    storageBucket: "my-project-4ad12.appspot.com",
    messagingSenderId: "637268187172",
    appId: "1:637268187172:web:0ecd04ca1c3bed7575a0b1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

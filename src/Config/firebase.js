// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbXjbQUsCn49khn24S4gspmZY9E03rBTM",
    authDomain: "codingpundits-aae94.firebaseapp.com",
    projectId: "codingpundits-aae94",
    storageBucket: "codingpundits-aae94.appspot.com",
    messagingSenderId: "943684987144",
    appId: "1:943684987144:web:f06940083e07f9e081e4bd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
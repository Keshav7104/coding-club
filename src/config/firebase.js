// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6foG-ZQamVs9JaiRvwaCeD9gMjJmgluE",
  authDomain: "coding-club-24ba3.firebaseapp.com",
  projectId: "coding-club-24ba3",
  storageBucket: "coding-club-24ba3.appspot.com",
  messagingSenderId: "616389507355",
  appId: "1:616389507355:web:9255979e86973a0a23bbbe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
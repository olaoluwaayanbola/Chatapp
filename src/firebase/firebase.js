// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG98CFQ0wJdNNmTrM9mCGvU1TRL7cKwLM",
  authDomain: "chat-8fe43.firebaseapp.com",
  projectId: "chat-8fe43",
  storageBucket: "chat-8fe43.appspot.com",
  messagingSenderId: "1091788666934",
  appId: "1:1091788666934:web:6b93d9c420056980b4c097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

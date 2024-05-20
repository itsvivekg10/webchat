// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAxQuX8iiq-9ST39xPa9nnjH2gFF67xco",
  authDomain: "login-auth-ad5ab.firebaseapp.com",
  projectId: "login-auth-ad5ab",
  storageBucket: "login-auth-ad5ab.appspot.com",
  messagingSenderId: "864062143041",
  appId: "1:864062143041:web:05196cb1fa3872b16924c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();
export default app;

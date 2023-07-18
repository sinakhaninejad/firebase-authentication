// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// /TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBB1gMhgbzKLDHty4saLVxIKfbajnXN-8A",
  authDomain: "auth-development-d1277.firebaseapp.com",
  projectId: "auth-development-d1277",
  storageBucket: "auth-development-d1277.appspot.com",
  messagingSenderId: "730641045506",
  appId: "1:730641045506:web:a3b681e98071ea8837af1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

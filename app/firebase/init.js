// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDskuiie6tD5V_nWl274ccfwB7P8NL61Rc",
  authDomain: "summarists-1fe37.firebaseapp.com",
  projectId: "summarists-1fe37",
  storageBucket: "summarists-1fe37.firebasestorage.app",
  messagingSenderId: "94504309131",
  appId: "1:94504309131:web:b540977de3adb275789f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider;
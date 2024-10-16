// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxqc0-s1gQxnwVa7_7-pLooa_i3Go9xzs",
  authDomain: "euphoria-firebase.firebaseapp.com",
  projectId: "euphoria-firebase",
  storageBucket: "euphoria-firebase.appspot.com",
  messagingSenderId: "178031537519",
  appId: "1:178031537519:web:25f8dfc1a3ccf8dcd80c9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth"
// import firebase from "firebase";
import { getFirestore } from  'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2RpKDf35RcTwTD8Ly6ahlmg0RMlbhIaQ",
  authDomain: "sdgp-final.firebaseapp.com",
  projectId: "sdgp-final",
  storageBucket: "sdgp-final.appspot.com",
  messagingSenderId: "157706447323",
  appId: "1:157706447323:web:873365a27863567b635ffe",
  measurementId: "G-W64VWTW54F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db =getFirestore(app)




export default app;

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
  apiKey: "AIzaSyCWdtjM2kCYihEmKwveogE3o0bAbPduYcQ",
  authDomain: "react-authentication-d41f3.firebaseapp.com",
  projectId: "react-authentication-d41f3",
  storageBucket: "react-authentication-d41f3.appspot.com",
  messagingSenderId: "103138883819",
  appId: "1:103138883819:web:01c6746cc79803a07f66ae",
  measurementId: "G-3VXKW5R4JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db =getFirestore(app)




export default app;
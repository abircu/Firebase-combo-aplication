// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATM6EhSmuC1fyxpkjFMT72M6iZRlq3Q6s",
  authDomain: "fir-combo-application.firebaseapp.com",
  projectId: "fir-combo-application",
  storageBucket: "fir-combo-application.appspot.com",
  messagingSenderId: "734267302300",
  appId: "1:734267302300:web:02167d8e1129a3e666e859",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

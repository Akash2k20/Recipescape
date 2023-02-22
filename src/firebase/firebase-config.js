// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYyhOTytNkRakg0S4qH2MbAXN5ryP_k6g",
  authDomain: "recipe-scape.firebaseapp.com",
  projectId: "recipe-scape",
  storageBucket: "recipe-scape.appspot.com",
  messagingSenderId: "1079463805444",
  appId: "1:1079463805444:web:6436f3b35abe72556bab51",
  measurementId: "G-1DM6QW75PR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app
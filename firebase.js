// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdjkEgoITD4UWYqQ6MXG_5zNvBo_1bPnY",
  authDomain: "adihi-test.firebaseapp.com",
  projectId: "adihi-test",
  storageBucket: "adihi-test.appspot.com",
  messagingSenderId: "685939645391",
  appId: "1:685939645391:web:ac816246fcfeb86a0510ba",
  measurementId: "G-VTGWKP7GD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
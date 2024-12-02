// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjxayWQ1IWOycoYmcD_xjTT8CdAH0MZyQ",
  authDomain: "fir-react-constact.firebaseapp.com",
  projectId: "fir-react-constact",
  storageBucket: "fir-react-constact.firebasestorage.app",
  messagingSenderId: "696782057889",
  appId: "1:696782057889:web:bc253e776a5f008bb15be0",
  measurementId: "G-VRDPHX7X8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

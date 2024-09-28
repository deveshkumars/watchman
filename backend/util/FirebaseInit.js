// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbnnK3w0GC3R_5ilxCFwNA5rlY58yhJLY",
  authDomain: "watchmania-e90fe.firebaseapp.com",
  projectId: "watchmania-e90fe",
  storageBucket: "watchmania-e90fe.appspot.com",
  messagingSenderId: "297908163469",
  appId: "1:297908163469:web:443d3873894382a9fda3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);

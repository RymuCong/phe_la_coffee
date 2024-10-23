// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj5ZwSWyuxjp7gsVK7EFzSzHtTKgv4aWQ",
  authDomain: "cv-pdf-upload.firebaseapp.com",
  projectId: "cv-pdf-upload",
  storageBucket: "cv-pdf-upload.appspot.com",
  messagingSenderId: "464753224151",
  appId: "1:464753224151:web:abc1eb99c81e3b9b1ec392",
  measurementId: "G-C32QE67XXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
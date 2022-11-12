// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqa-IoiZ88M1iRSJNXqI84kmdWlrniteU",
    authDomain: "doctor-portal-v1.firebaseapp.com",
    projectId: "doctor-portal-v1",
    storageBucket: "doctor-portal-v1.appspot.com",
    messagingSenderId: "790174037489",
    appId: "1:790174037489:web:3dd05db17750edbed78050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

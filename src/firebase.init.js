// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXUkUoYFVWkoS3RZLQcPE3SKP1lbyqX9Q",
    authDomain: "ema-john-simple2-ac920.firebaseapp.com",
    projectId: "ema-john-simple2-ac920",
    storageBucket: "ema-john-simple2-ac920.appspot.com",
    messagingSenderId: "957728440878",
    appId: "1:957728440878:web:4eb13b114af2b83c0e55bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
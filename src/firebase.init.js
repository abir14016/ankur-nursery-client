// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqVzT9E_Ggfx0lbZjnghvCLXaauPxO9_I",
    authDomain: "ankur-nursary-df09e.firebaseapp.com",
    projectId: "ankur-nursary-df09e",
    storageBucket: "ankur-nursary-df09e.appspot.com",
    messagingSenderId: "144799200961",
    appId: "1:144799200961:web:1edef6a151b2be0cffc640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsTLQY1mbWTKzEzzmOUkP8hod8S3-fJwo",
    authDomain: "react--website-973d4.firebaseapp.com",
    projectId: "react--website-973d4",
    storageBucket: "react--website-973d4.appspot.com",
    messagingSenderId: "438847570485",
    appId: "1:438847570485:web:0e9a29479ac3eddb2ba77c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
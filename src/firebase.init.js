// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRj40PMzN1d_fIixNzo_x-bc4L9A2OG_Q",
    authDomain: "react--website-fe153.firebaseapp.com",
    projectId: "react--website-fe153",
    storageBucket: "react--website-fe153.appspot.com",
    messagingSenderId: "27096069257",
    appId: "1:27096069257:web:ac8e90901839c682894258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
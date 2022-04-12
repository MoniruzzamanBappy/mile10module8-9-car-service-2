// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0HeDLe2MMuA_EHMPUXJOK9FR4kkQQnzQ",
  authDomain: "genius-car-service-9ced4.firebaseapp.com",
  projectId: "genius-car-service-9ced4",
  storageBucket: "genius-car-service-9ced4.appspot.com",
  messagingSenderId: "967938111234",
  appId: "1:967938111234:web:56af73c25adba2a4e3341b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

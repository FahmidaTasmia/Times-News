// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7iA34yjOaNiushoShF9XzKiwqa4dpFuk",
  authDomain: "times-newsx.firebaseapp.com",
  projectId: "times-newsx",
  storageBucket: "times-newsx.appspot.com",
  messagingSenderId: "361841060953",
  appId: "1:361841060953:web:44d0893be3fd60e350d548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
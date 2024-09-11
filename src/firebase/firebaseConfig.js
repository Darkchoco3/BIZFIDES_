// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYZ8eS6bDZYQyoqDbB2fhriQo1py2-OYA",
  authDomain: "bizfides-api-ff766.firebaseapp.com",
  projectId: "bizfides-api-ff766",
  storageBucket: "bizfides-api-ff766.appspot.com",
  messagingSenderId: "676250786581",
  appId: "1:676250786581:web:a89eeac310508df4ece71c"
};
// project-676250786581
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
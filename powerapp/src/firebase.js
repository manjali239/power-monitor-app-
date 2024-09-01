import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOSIKvGz2qYsZic3p-AMYBiLKb0kn3WA4",
  authDomain: "powertest1-e83b7.firebaseapp.com",
  projectId: "powertest1-e83b7",
  storageBucket: "powertest1-e83b7.appspot.com",
  messagingSenderId: "649214609601",
  appId: "1:649214609601:web:a1882f6b2140024fa8cf21",
  measurementId: "G-FFZKLZG0MM"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
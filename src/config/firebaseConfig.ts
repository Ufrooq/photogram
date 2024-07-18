// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEYS,
    authDomain: import.meta.env.VITE_APIKEYS,
    projectId: import.meta.env.VITE_APIKEYS,
    storageBucket: import.meta.env.VITE_APIKEYS,
    messagingSenderId: import.meta.env.VITE_APIKEYS,
    appId: import.meta.env.VITE_APIKEYS
};

console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default app;
import { initializeApp } from "firebase/app";
import { signOut, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "aaaaaa",
   authDomain: "aaaaaaaaa",
   projectId: "bbbbbbbbbbbbbbb",
   storageBucket: "cccccccccccccccc",
   messagingSenderId: "sssssssssssssssssss",
   appId: "zxxxxxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const logout = () => signOut(auth);

export { auth, googleAuthProvider, signInWithPopup, logout };

import { initializeApp } from "firebase/app";
import { signOut, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB0BkIYfKFOwtGP6GyrosG8WXmJ8jG5Byw",
   authDomain: "binar-fe-challenge-06.firebaseapp.com",
   projectId: "binar-fe-challenge-06",
   storageBucket: "binar-fe-challenge-06.appspot.com",
   messagingSenderId: "552884007900",
   appId: "1:552884007900:web:ef3fe9358a7e65c9901519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const logout = () => signOut(auth);

export { auth, googleAuthProvider, signInWithPopup, logout };
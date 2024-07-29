import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBVyS0rXSAN9QCN7NDR2y5vzfV1HE_U9BM",
    authDomain: "chatappfirebase-f5407.firebaseapp.com",
    projectId: "chatappfirebase-f5407",
    storageBucket: "chatappfirebase-f5407.appspot.com",
    messagingSenderId: "130130958718",
    appId: "1:130130958718:web:0b692b850d4f06c3db7b2f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app); // Ensure firestore is exported

export default app;

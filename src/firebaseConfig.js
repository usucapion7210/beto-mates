// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDDg5k_cOGxbLj1fojzf_hMmqGB3T8E3P0",
	authDomain: "soccer-sportwear.firebaseapp.com",
	projectId: "soccer-sportwear",
	storageBucket: "soccer-sportwear.appspot.com",
	messagingSenderId: "421250080673",
	appId: "1:421250080673:web:a6d5e86892e3c07696b5e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

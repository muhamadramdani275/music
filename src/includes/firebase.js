import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABzq7Ea2SlshXxPlnXFK1UkFNfcg7eY0g",
  authDomain: "music-8344e.firebaseapp.com",
  projectId: "music-8344e",
  storageBucket: "music-8344e.appspot.com",
  appId: "1:944934049762:web:5bff329989822075900bbb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };

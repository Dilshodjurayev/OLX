import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANV8JmInqSng0VhFfBp6SlyZrRzTJ7pD4",
  authDomain: "olhz-30c61.firebaseapp.com",
  projectId: "olhz-30c61",
  storageBucket: "olhz-30c61.appspot.com",
  messagingSenderId: "390564162693",
  appId: "1:390564162693:web:c5e0d2b04e42cfd54ecdec",
  measurementId: "G-S940355BF3",
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

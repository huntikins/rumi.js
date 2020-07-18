import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// config
const firebaseConfig = {
  apiKey: "AIzaSyCVhmH7QMcWDnOmb0Z9p2yqyw5-brLcJ8I",
  authDomain: "rumi-js.firebaseapp.com",
  databaseURL: "https://rumi-js.firebaseio.com",
  projectId: "rumi-js",
  storageBucket: "rumi-js.appspot.com",
  messagingSenderId: "699917958425",
  appId: "1:699917958425:web:30475c52e6704d06fbd988",
  measurementId: "G-9YDM9SWZRG"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const roomsCollection = db.collection("rooms");

// export utils/refs
export { db, auth, usersCollection, roomsCollection, firebase };

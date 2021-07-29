import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// config
const firebaseConfig = {
  apiKey: "AIzaSyCA2-x5o2aXUVMQJ81P8RWPFao4i-W0uoU",
    authDomain: "vue-rumi.firebaseapp.com",
    projectId: "vue-rumi",
    storageBucket: "vue-rumi.appspot.com",
    messagingSenderId: "394611465154",
    appId: "1:394611465154:web:8741050f7a4f766838d45b",
    measurementId: "G-W03MEW7TQ7"
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

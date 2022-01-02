import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqK9UZti0ExZf9uY6Jhx1zqWwPEwS6bak",
  authDomain: "rumi-js-v1.firebaseapp.com",
  databaseURL: "https://rumi-js-v1-default-rtdb.firebaseio.com",
  projectId: "rumi-js-v1",
  storageBucket: "rumi-js-v1.appspot.com",
  messagingSenderId: "731561447910",
  appId: "1:731561447910:web:b26c7bc4107ba9afa58627",
  measurementId: "G-HCH1RL7MBK"
};

let firebaseApp

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig)
}

export const app = firebaseApp
export const auth = getAuth(app)
export const db = getFirestore();

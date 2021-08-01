import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
//import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA2-x5o2aXUVMQJ81P8RWPFao4i-W0uoU",
    authDomain: "vue-rumi.firebaseapp.com",
    projectId: "vue-rumi",
    storageBucket: "vue-rumi.appspot.com",
    messagingSenderId: "394611465154",
    appId: "1:394611465154:web:8741050f7a4f766838d45b",
    measurementId: "G-W03MEW7TQ7"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const roomsRef = firebaseApp.firestore().collection("rooms");
export const usersRef = firebaseApp.firestore().collection("users");

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
    createApp(App).use(store).use(router).mount('#app');
});



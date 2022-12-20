// import Firebase from 'firebase/compat/app';
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyC8rtvl63yCmXJwnM3ggHjPHk-FAmHGpQY",
//     authDomain: "netflix-5fc68.firebaseapp.com",
//     projectId: "netflix-5fc68",
//     storageBucket: "netflix-5fc68.appspot.com",
//     messagingSenderId: "952738400793",
//     appId: "1:952738400793:web:bfa199ee7a26326c937888",
//     measurementId: "G-Q7PMZP4FBG"
//   };


// const firebase = Firebase.initializeApp(firebaseConfig)

// export {firebase }


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC8rtvl63yCmXJwnM3ggHjPHk-FAmHGpQY",
    authDomain: "netflix-5fc68.firebaseapp.com",
    projectId: "netflix-5fc68",
    storageBucket: "netflix-5fc68.appspot.com",
    messagingSenderId: "952738400793",
    appId: "1:952738400793:web:bfa199ee7a26326c937888",
    measurementId: "G-Q7PMZP4FBG"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

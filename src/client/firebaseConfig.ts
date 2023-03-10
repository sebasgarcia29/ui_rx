// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAg78MFHxA7dJtk200Eg_oG1oURGW0gDbY",
    authDomain: "rxlightning.firebaseapp.com",
    projectId: "rxlightning",
    storageBucket: "rxlightning.appspot.com",
    messagingSenderId: "827690163904",
    appId: "1:827690163904:web:336f244dd2c04f88025725"
};

// const firebaseConfig = {
//     apiKey: process.env.API_KEY_FIREBASE?.toString(),
//     authDomain: process.env.AUTHDOMAIN_FIREBASE?.toString(),
//     projectId: process.env.PROJECT_ID__FIREBASE?.toString(),
//     storageBucket: process.env.STORAGE_BUCKET_FIREBASE?.toString(),
//     messagingSenderId: process.env.MESSAGIN_SENDER_ID_FIREBASE?.toString(),
//     appId: process.env.APP_ID_FIREBASE?.toString()
// };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseBD = getFirestore(FirebaseApp);
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBGWkxQybycYAgOtgVb2xX6LEv1mAv1kZw",
//     authDomain: "the-code-slayers-project.firebaseapp.com",
//     projectId: "the-code-slayers-project",
//     storageBucket: "the-code-slayers-project.appspot.com",
//     messagingSenderId: "108607517874",
//     appId: "1:108607517874:web:de2081b700cebf325205ab"
//   };

const firebase = initializeApp(firebaseConfig,'Client2');

export default firebase;

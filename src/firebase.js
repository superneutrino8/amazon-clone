import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVY4EimVv8XHTwOD9hNb7xhQjXJRH6SY8",
    authDomain: "clone-123a0.firebaseapp.com",
    databaseURL: "https://clone-123a0.firebaseio.com",
    projectId: "clone-123a0",
    storageBucket: "clone-123a0.appspot.com",
    messagingSenderId: "831281829169",
    appId: "1:831281829169:web:3c29143237ab09c50a8c10",
    measurementId: "G-HD4T26EEK7",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

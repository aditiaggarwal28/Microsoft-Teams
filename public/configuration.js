/*
    This file contains the configuration file for firebase authentication.
    Putting in the configuration file, firebase app is initialized.
    After app initialization, firestore databases are loaded with specific
    settings. This firebase app is used globally in the entire application.
*/

const firebaseConfig = {
    apiKey: "AIzaSyDWpCsRYbaOip1J47gTsskvWVk4I7D-mlQ",
    authDomain: "final--teams.firebaseapp.com",
    databaseURL: "https://final--teams-default-rtdb.firebaseio.com",
    projectId: "final--teams",
    storageBucket: "final--teams.appspot.com",
    messagingSenderId: "881491810408",
    appId: "1:881491810408:web:ffa7f5a84921e5ef9a43dd",
    measurementId: "G-KRKVGMVYVC"
  };

// Initialize Firebase
window.haha = window.firebase.initializeApp(firebaseConfig);
const firestore = window.firebase.firestore();
const settings = {
    timestampsInSnapshots: true,
    merge: true
};
firestore.settings(settings);

export default window.firebase;

export {
    firestore,
};
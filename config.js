import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDhIZlDY1fPht-9u3AjjxPHDNCNqscxdqg",
    authDomain: "book-santa-app-148e4.firebaseapp.com",
    projectId: "book-santa-app-148e4",
    databaseURL: "https://book-santa-app-148e4.firebaseio.com",
    storageBucket: "book-santa-app-148e4.appspot.com",
    messagingSenderId: "581068076577",
    appId: "1:581068076577:web:5aba29b0a03726906d9560",
    measurementId: "G-VPD5CSTRR5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
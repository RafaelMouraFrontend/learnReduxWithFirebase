import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAUKQxVr4Vb379HN1n7VYwVGjcebLztvLY",
    authDomain: "mario-ninja-c57d5.firebaseapp.com",
    databaseURL: "https://mario-ninja-c57d5.firebaseio.com",
    projectId: "mario-ninja-c57d5",
    storageBucket: "mario-ninja-c57d5.appspot.com",
    messagingSenderId: "862219092699",
    appId: "1:862219092699:web:185bd20fd754d4250c42fe",
    measurementId: "G-SVERMK0LWV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;
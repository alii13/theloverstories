import * as firebase from "firebase";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDfO6r-isLa8hgP2gyZaeOjDnE5a3YmaFc",
  authDomain: "theloverstories.firebaseapp.com",
  databaseURL: "https://theloverstories.firebaseio.com",
  projectId: "theloverstories",
  storageBucket: "theloverstories.appspot.com",
  messagingSenderId: "980227585842",
  appId: "1:980227585842:web:4d8ecdac847849d006092b",
  measurementId: "G-HF9GCTVQ7J"
};
// Initialize Firebase
firebase.initializeApp(config);
const database = firebase.firestore();
export default database;

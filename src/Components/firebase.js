import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCEhL8Lwlg1AqqUYhich2iyn_8JanNkX4Y",
  authDomain: "test-app-aa57a.firebaseapp.com",
  projectId: "test-app-aa57a",
  storageBucket: "test-app-aa57a.appspot.com",
  messagingSenderId: "240270813325",
  appId: "1:240270813325:web:0ba2496383802b0f301ac4",
  measurementId: "G-LMWCBVBPNC",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

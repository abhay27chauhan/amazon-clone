import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNSQXe0WyqxWzbzfq7x6iPr0BOzR5EwuQ",
  authDomain: "clone-d2f64.firebaseapp.com",
  databaseURL: "https://clone-d2f64.firebaseio.com",
  projectId: "clone-d2f64",
  storageBucket: "clone-d2f64.appspot.com",
  messagingSenderId: "496971803197",
  appId: "1:496971803197:web:00519366dc36eb7d36d854"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
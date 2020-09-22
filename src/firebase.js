import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDluFuBH0bhS2qo1MG-dEzVHu-6SDhvCew",
  authDomain: "twitter-clone-4cceb.firebaseapp.com",
  databaseURL: "https://twitter-clone-4cceb.firebaseio.com",
  projectId: "twitter-clone-4cceb",
  storageBucket: "twitter-clone-4cceb.appspot.com",
  messagingSenderId: "565289836915",
  appId: "1:565289836915:web:508737843982012255a506",
  measurementId: "G-D1E8N0B4M5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

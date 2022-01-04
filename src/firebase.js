import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWhRYZQe4wzpyqghmPFr2DPEptbQgo4Zk",
  authDomain: "ecommerce-5043a.firebaseapp.com",
  projectId: "ecommerce-5043a",
  storageBucket: "ecommerce-5043a.appspot.com",
  messagingSenderId: "960533531118",
  appId: "1:960533531118:web:453bfe3098ad01d52a26ff",
  measurementId: "G-8FV6J279Z7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

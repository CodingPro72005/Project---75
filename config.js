import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCFjAxX7LbKdpXZLHi4hoTgIHibzdhBdEA",
  authDomain: "library-30935.firebaseapp.com",
  projectId: "library-30935",
  storageBucket: "library-30935.appspot.com",
  messagingSenderId: "621159133697",
  appId: "1:621159133697:web:73afe462b465d6924b4600"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

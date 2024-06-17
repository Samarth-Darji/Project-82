import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyAC5c_kpqv7DbqvVT-DcJfHx8AlO5FwpB4",
  authDomain: "e-ride-app-2c372.firebaseapp.com",
  projectId: "e-ride-app-2c372",
  storageBucket: "e-ride-app-2c372.appspot.com",
  messagingSenderId: "948956364458",
  appId: "1:948956364458:web:b1534d4a13a3c6b6731ad3"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

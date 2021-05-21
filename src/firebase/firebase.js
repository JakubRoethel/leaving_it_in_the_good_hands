import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpOx5pRTg6UQwPq8FLQCnF9NJfbOUM8FY",
    authDomain: "oddam-w-dobre-rece-cb1b6.firebaseapp.com",
    projectId: "oddam-w-dobre-rece-cb1b6",
    storageBucket: "oddam-w-dobre-rece-cb1b6.appspot.com",
    messagingSenderId: "318319665289",
    appId: "1:318319665289:web:f133390034ca063885a658"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
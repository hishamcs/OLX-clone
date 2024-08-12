import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH5AVmeIeiSGNlC31f1AI_YW--YMCugSw",
    authDomain: "fir-da782.firebaseapp.com",
    projectId: "fir-da782",
    storageBucket: "fir-da782.appspot.com",
    messagingSenderId: "63230998392",
    appId: "1:63230998392:web:2a6ee9efd75692da733a8d",
    measurementId: "G-F6CCDK1G4X"
  };

export default firebase.initializeApp(firebaseConfig)
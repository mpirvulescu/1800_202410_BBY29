//Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFiQuQX5M3RgCV4IYBK6nqorcytcAqi2E",
    authDomain: "bby29-3bb37.firebaseapp.com",
    projectId: "bby29-3bb37",
    storageBucket: "bby29-3bb37.appspot.com",
    messagingSenderId: "676710167186",
    appId: "1:676710167186:web:d242d15f3f85f887766c4b",
    measurementId: "G-99TTL50Z55"
  };

  //initialize firebase app
  const app = firebase.initializeApp(firebaseConfig);

  //initialize firestore database
  const db = firebase.firestore();
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const clientCredentials = {
  apiKey: "kAIzaSyCdcGBP99aiCKjhaSVEePxVdtjGck1cxY",
  authDomain: "dental-website-cf2a5.firebaseapp.com",
  projectId: "dental-website-cf2a5",
  storageBucket: "dental-website-cf2a5.appspot.com",
  messagingSenderId: "582437244163",
  appId: "1:582437244163:web:c85d4afa071a0045c2ad36",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

const firestore = firebase.firestore();

export { firestore };

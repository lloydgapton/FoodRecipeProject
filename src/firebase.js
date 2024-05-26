import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBt54EYT1I3mgqPuQ7mXJovVkvpakfP-Wc",
  
    authDomain: "portfolio-project-6f36d.firebaseapp.com",
  
    projectId: "portfolio-project-6f36d",
  
    storageBucket: "portfolio-project-6f36d.appspot.com",
  
    messagingSenderId: "98924408402",
  
    appId: "1:98924408402:web:21ffd4427bc557ad63398b",
  
    measurementId: "G-FBXJNQ0B90"
  
  };  

firebase.initializeApp(firebaseConfig);

export default firebase;
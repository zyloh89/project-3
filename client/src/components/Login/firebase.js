import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsN5x_k8eC4vMQ2Wp0hnbxEJzqEDjtGhQ",
    authDomain: "joanne-home-bakery.firebaseapp.com",
    databaseURL: "https://joanne-home-bakery.firebaseio.com",
    projectId: "joanne-home-bakery",
    storageBucket: "joanne-home-bakery.appspot.com",
    messagingSenderId: "985178227505",
    appId: "1:985178227505:web:e5efa959b57c53b9eee610",
    measurementId: "G-GQGS33QWB2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// const provider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
//   };

export default firebase;

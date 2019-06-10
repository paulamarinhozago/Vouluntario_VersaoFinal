import firebase from 'firebase';
require('firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAjraqhu-SkwGTwCwLCVvXY8lwp1G6k74c",
  authDomain: "vouluntario-ff111.firebaseapp.com",
  databaseURL: "https://vouluntario-ff111.firebaseio.com",
  projectId: "vouluntario-ff111",
  storageBucket: "vouluntario-ff111.appspot.com",
  messagingSenderId: "261557316762",
  appId: "1:261557316762:web:9a20b0a649b36365"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default(db);


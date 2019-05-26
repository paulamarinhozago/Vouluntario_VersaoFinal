import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOUGp4Xwok5PWh_YogJND5YjmGgjZf2GU",
    authDomain: "vouluntario.firebaseapp.com",
    databaseURL: "https://vouluntario.firebaseio.com",
    projectId: "vouluntario",
    storageBucket: "vouluntario.appspot.com",
    messagingSenderId: "574740672545",
    appId: "1:574740672545:web:4ad263244dfa57b7"
  };

  const initialize = firebase.initializeApp(firebaseConfig)
  export default(initialize);


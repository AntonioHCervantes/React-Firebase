import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVcozRBMTMICscgQul4fZ3gLmvKjkD96c",
  authDomain: "pseudogram-e829b.firebaseapp.com",
  databaseURL: "https://pseudogram-e829b.firebaseio.com",
  projectId: "pseudogram-e829b",
  storageBucket: "pseudogram-e829b.appspot.com",
  messagingSenderId: "957303534738"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

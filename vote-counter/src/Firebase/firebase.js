import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCQnGWPb9g0qVM-mYsuvC-MlbWztZBdtmw",
    authDomain: "vg-voting-83c84.firebaseapp.com",
    databaseURL: "https://vg-voting-83c84.firebaseio.com",
    projectId: "vg-voting-83c84",
    storageBucket: "vg-voting-83c84.appspot.com",
    messagingSenderId: "14819118797",
    appId: "1:14819118797:web:6a3006215809c1a8ffe384"
  };

class Firebase {
  constructor() {
    firebase.initializeApp(config);
  }
}
export default Firebase;
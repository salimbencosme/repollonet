import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyD4EmM7Ewj1RbL4XR1rcNW6-0K53nf9Kaw",
  authDomain: "repollonet-74f4c.firebaseapp.com",
  databaseURL: "https://repollonet-74f4c.firebaseio.com",
  projectId: "repollonet-74f4c",
  storageBucket: "repollonet-74f4c.appspot.com",
  messagingSenderId: "448169734973"
};
var fire = firebase.initializeApp(config);
export default fire;
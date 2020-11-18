import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCBgyyZ5KucRcuoPJxvw09emt6UdQf2iiA",
    authDomain: "react-auth-3dcdc.firebaseapp.com",
    databaseURL: "https://react-auth-3dcdc.firebaseio.com",
    projectId: "react-auth-3dcdc",
    storageBucket: "react-auth-3dcdc.appspot.com",
    messagingSenderId: "582012549687",
    appId: "1:582012549687:web:e3eae634ff3002acf6ddb2"
  };
  const fire  = firebase.initializeApp(firebaseConfig);

  export default fire;
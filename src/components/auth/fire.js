import firebase from  'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyCmxaR77naEcdjRCZ451ROoBRtkaEo6nak",
   authDomain: "task-manager-ee69a.firebaseapp.com",
   projectId: "task-manager-ee69a",
   storageBucket: "task-manager-ee69a.appspot.com",
   messagingSenderId: "988878975042",
   appId: "1:988878975042:web:684bbe871c8e4eb9e5fddb"
 };
 
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;
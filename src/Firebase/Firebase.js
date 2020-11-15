// var firebaseConfig = {
//     apiKey: "AIzaSyBMk38WjvOauNLwCZJHo77CANXm6hEoDTg",
//     authDomain: "portfolio-chat-6d38c.firebaseapp.com",
//     databaseURL: "https://portfolio-chat-6d38c.firebaseio.com",
//     projectId: "portfolio-chat-6d38c",
//     storageBucket: "portfolio-chat-6d38c.appspot.com",
//     messagingSenderId: "682548332578",
//     appId: "1:682548332578:web:bd1fcf47e5c045e489627b",
//     measurementId: "G-41NYKZSC93"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyBMk38WjvOauNLwCZJHo77CANXm6hEoDTg",
        authDomain: "portfolio-chat-6d38c.firebaseapp.com",
        databaseURL: "https://portfolio-chat-6d38c.firebaseio.com",
        projectId: "portfolio-chat-6d38c",
        storageBucket: "portfolio-chat-6d38c.appspot.com",
        messagingSenderId: "682548332578",
        appId: "1:682548332578:web:bd1fcf47e5c045e489627b",
        measurementId: "G-41NYKZSC93"
})
export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();


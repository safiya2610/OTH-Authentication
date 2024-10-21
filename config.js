import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseConfig={
    apiKey: "AIzaSyDgiZ_rAlqZefqeqC8f_m2zEKma3tyOv4Q",
    authDomain: "test-297fc.firebaseapp.com",
    projectId: "test-297fc",
    storageBucket: "test-297fc.appspot.com",
    messagingSenderId: "506898858878",
    appId: "1:506898858878:web:b66c501e56e7a69729292f",
    measurementId: "G-2NZ15T5CPW"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


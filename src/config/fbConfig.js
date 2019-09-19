import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyA6UFMNQ5FNrF0fq8AAFiLZPcj-hIjla2g",
    authDomain: "rweat-dd57a.firebaseapp.com",
    databaseURL: "https://rweat-dd57a.firebaseio.com",
    projectId: "rweat-dd57a",
    storageBucket: "",
    messagingSenderId: "382563677403",
    appId: "1:382563677403:web:f53a3c0986d2db6a8488fe"
};

firebase.initializeApp(config);
var database = firebase.firestore();

export default firebase;

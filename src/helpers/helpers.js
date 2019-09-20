import firebase from '../config/fbConfig';
import 'firebase/auth';
import 'firebase/firestore';


const signUp = (email, password) => {
  
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        const db = firebase.firestore();
        db.collection('users').doc(res.user.uid).set({
            email: res.user.email,
            emailVerified: res.user.emailVerified,
            displayName: res.user.displayName,
            phoneNumber: res.user.phoneNumber,
            photoUrl: res.user.photoURL,
            firstName: '',
            lastName: ''
        });
    })
};

const logIn = (email, password) =>  {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export { signUp, logIn };
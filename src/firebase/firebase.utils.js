import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzAj3xq2pRwn8h4QhZ4dHQFCZ_AlMzCKM",
    authDomain: "ecommerce-crown.firebaseapp.com",
    databaseURL: "https://ecommerce-crown.firebaseio.com",
    projectId: "ecommerce-crown",
    storageBucket: "ecommerce-crown.appspot.com",
    messagingSenderId: "477644721019",
    appId: "1:477644721019:web:eaad7803609aa3519dcbde"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import React from 'react';
import firebase from '../../config/fbConfig';

const DashboardPanel = () => {

    const a = async() => {
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;
        console.log('USER UID', user.uid);

        const snap = await db.collection("users").doc(user.uid).get()
        .then(doc=>{
            console.log('DOCUMENT DATA', doc.data());
        });
        //const  ab = snap.docs.map(doc => doc.data());
        //console.log(ab); 
    }
    
    return (
        <div>
            <p>Panel works</p>
            <button onClick={a}>Get Data</button>
        </div>
    )
}

export default DashboardPanel;

import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router-dom';
import firebase from '../../config/fbConfig';

import Loader from '../../assets/loaders/loader.svg';


const SignUp = ({history}) => {

    const [error, setError] = useState();
    const [loader, setLoader] = useState(false);

    const handleSubmit = useCallback(
        async e => {
            e.preventDefault();
            setLoader(true);
            const {email, password} = e.target.elements;
            try {
                await firebase
                        .auth()
                        .createUserWithEmailAndPassword(email.value, password.value)
                        .then(res => {
                            console.log('SIGNUP RESPONSE',res);
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
                        }).then(() => {
                            history.push('/dashboard');
                        });
                
                //history.push('/cities');
            } catch(error) {
                setError(error.message);
            }
            setLoader(false);
        }, [history]
    );

    return (
        <div>
            <h4>Sign up</h4>
            <hr></hr>
            <form onSubmit={handleSubmit}>

                <input type="email"
                name="email"
                placeholder="Email"
                />

                <input type="password"
                name="password"
                placeholder="Password"
                />

                <button>
                    {loader ? (
                        <img alt="Loading" className="loader" src={Loader} /> ) : "Sign up"}
                </button>
                  
                {error !== undefined ? (
                    <div className="error">
                        {error}
                    </div>
                ) : null}
            </form>
        </div>
    )
}

export default withRouter(SignUp);

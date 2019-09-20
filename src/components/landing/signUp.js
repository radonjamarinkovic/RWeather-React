import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import {signUp} from '../../helpers/helpers';

import Loader from '../../assets/loaders/loader.svg';


const SignUp = ({history}) => {

    const [error, setError] = useState();
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
    
            e.preventDefault();
            setLoader(true);
            const {email, password} = e.target.elements;

            signUp(email.value, password.value).then(() => {
                    setLoader(false);
                    history.push('/dashboard');
                }).catch(err => {
                    console.log(err);
                    setError(err.message);
                    setLoader(false);
                });
    };

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

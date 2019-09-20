import React, {useState, useContext, useCallback} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {AuthContext} from '../contextProviders/auth';
import {logIn} from '../helpers/helpers';

import Loader from '../assets/loaders/loader.svg';

const Login = ({history}) => {

    const [error, setError] = useState();
    const [loader, setLoader] =useState(false);

    const handleLogin = useCallback( async e => {

            e.preventDefault();
            setLoader(true);
            const [email, password] = e.target.elements;
         
            await logIn(email.value, password.value).catch(err => {
                console.log(err);
                setError(err.message)
                setLoader(false);
            });

            //setLoader(false);

    },[history]);

    const {currentUser} = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/dashboard" />
    }     

    return (
        <div>
            <div className="container">
                <form onSubmit={handleLogin}>

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
                            <img alt="Loading" className="loader" src={Loader} />
                        ) : "Login"}
                    </button>

                    {error !== undefined ? (
                        <div className="error">
                            {error}
                        </div>
                    ) : null}
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);

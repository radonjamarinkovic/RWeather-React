import React from 'react'
import SignUp from './signUp';
import Weather from '../weather';



const Landing = () => {

    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="content-left">
                        <h1>Welcome to R Weather</h1>
                        <div className="signUp">
                            <SignUp />
                        </div>
                    </div>
                    <div className="content-right">
                        <Weather />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;


import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/fbConfig';
import {AuthContext} from '../../contextProviders/auth';


function Header() {
   
    const {currentUser} = useContext(AuthContext);
    const [isDropdown, setDropdown ] = useState(false);
    console.log('CURRENT USER HEADER', currentUser);

   const toggleDropdown = () => {
       setDropdown(!isDropdown)
   }
   const signOut = async() => {
       firebase.auth().signOut().then(function () {
           
       }).catch(function (error) {
           // An error happened.
       });
   }
    return (
        <div>
            <nav>
                <div className="logo">
                    <h4>R Weather</h4>
                </div>
                <ul className={"nav-links " + (isDropdown ? 'navbar-visible' : '')}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li ><Link to="/myAccount">Account</Link></li>
                    {currentUser ? (
                        <li><Link to="/" onClick={signOut}>Logout</Link></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
                <div className="burger" onClick={toggleDropdown}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
        )
}

export default Header;

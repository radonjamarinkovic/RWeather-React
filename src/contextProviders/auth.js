import React, {useState, useEffect, createContext} from 'react';
import firebase from '../config/fbConfig';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
        console.log("AUTHPROVIDER USER", currentUser);
    }, [currentUser]);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
}
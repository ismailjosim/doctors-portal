import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../configs/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);


    // create user with email and password function
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create new using with email and password
    const UserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Update Newly Created User Info
    const updateUserInfo = () => {
        return updateProfile(user)
    }
    // user logout functionality
    const userLogout = () => {
        return signOut(auth)
    }

    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])




    const authInfo = {
        UserRegister,
        updateUserInfo,
        userLogin,
        user,
        userLogout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;

import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';

export const googleProvider =new GoogleAuthProvider()
export const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
       
        
    },[])



const createUser=(email, password)=>{
 return createUserWithEmailAndPassword(auth, email, password)
}

const logInUser =(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const updateUser =(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)

}

const logInWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider)
}

const logOutUser =()=>{
    return signOut(auth);
}
    
    
    
const userInfo={
    user,
    loading,
    setUser,
    createUser,
    logInUser,
    logOutUser,
    logInWithGoogle,
    updateUser
   
} 
    
    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, {  useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivetRouts = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    console.log(user)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate
        state={location?.pathname}
        to='/signin'
        ></Navigate>
    }

    return children;
};

export default PrivetRouts;
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AuthContext from './authContext'


const getUser  =()=>{
    
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
 const currentUser = getUser()
 setUser(currentUser)
 }, []);
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };
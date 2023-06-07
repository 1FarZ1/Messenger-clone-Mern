/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AuthContext from './authContext'
import axios from 'axios';


const getUser  = async ()=>{
        try {
            const res=  await axios.get("http://127.0.0.1:5500/api/v1/auth/me",{
                withCredentials:true,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                  },
            });
            if(res.data.auth == false){
                return null;
            } 
             return res.data.user;
           
        } catch (error) {
            console.log(error);    
            return null;
        }


}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect( () => {
    getUser().then((v)=>{
            setUser(v)
        }
            
        )
 }, []);
    return (
      <AuthContext.Provider value={{ user}}>{children}</AuthContext.Provider>
    );
  };
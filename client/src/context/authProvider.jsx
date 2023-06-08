/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AuthContext from './authContext'
import axios from 'axios';


// const getUser  = async ()=>{
            
               
                
           
        


// }


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect( () => {

        axios.get("http://127.0.0.1:5500/api/v1/auth/me",{
            withCredentials:true,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
              },
        }).then((v)=>{
              if(!user){
                    setUser(v.data.user);
                }  
        });   
     
        console.log(user);
 }, [user]);
    return (
      <AuthContext.Provider value={{ user}}>{children}</AuthContext.Provider>
    );
  };




//   if(res.data.auth === false){
//     setUser(null);
// } 
// else{
//     if(user !== null){
//         if(user.email !== res.data.user.email){
//             setUser(res.data.user);
//         }
//     }
//     else{
//         setUser(res.data.user);
//     }
   
// }
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AuthContext from './authContext'
import axios from 'axios';

export const AuthProvider = ({ children }) => {
  const contacts=[
    {
        username:"sahil",
        msg:"hello",
        profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
        time:"12:00",
    },
    {
        username:"fares",
        msg:"hello",
        profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
        time:"12:00",
    }
    ,
    {
        username:"imad",
        msg:"hello",
        profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
        time:"12:00",
    }

];

    const [authState, setauthState] = useState(false);
    useEffect( () => {
        axios.get("http://127.0.0.1:5500/api/v1/auth/me",{
            withCredentials:true,
            credentials: 'include',
        }).then((v)=>{
              setauthState(v.data.auth);
        });   
     
        console.log(authState);
 }, [authState]);
    return (
      <AuthContext.Provider value={{ authState , func:setauthState,contacts}}>{children}</AuthContext.Provider>
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
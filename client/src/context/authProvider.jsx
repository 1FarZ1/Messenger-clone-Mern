/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AuthContext from './authContext'
import axios from 'axios';

export const AuthProvider = ({ children }) => {
    const [contacts ,setContacts] = useState(undefined)
    const [user, setUser] = useState(undefined);
    useEffect( () => {
     const getUser = async ()=>{
      try {
        const res = await axios.get("http://127.0.0.1:5500/api/v1/auth/me",{
          withCredentials:true,
          credentials: 'include',
      });
      if(res.data.auth == false){
        setUser(null)
      }
      else{
        if(user ===undefined){
            Promise.all(
                res.data.user.Contacts.map(async (e)=>{
                    const res = await axios.get("http://127.0.0.1:5500/api/v1/auth/user/"+e);
                    setContacts(prevContacts => {
                      if (!prevContacts) {
                        return [res.data.user];
                      }
                      return [...prevContacts, res.data.user];
                    });
                  }));
          setUser(res.data.user)
          
        }
      }
      } catch (error) {
        console.log(error);
      } 

     }  
     getUser();
     
     
 }, []);


 if (user === undefined) {
  return null;
}
  if(contacts === undefined){
      return null;
      }
    return (
      <AuthContext.Provider value={{ user , func:setUser,contacts}}>{children}</AuthContext.Provider>
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
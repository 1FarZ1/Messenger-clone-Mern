/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import AuthContext from './authContext'
import axios from 'axios';

export const AuthProvider = ({ children }) => {
    const [contacts ,setContacts] = useState(undefined)
    const [user, setUser] = useState(undefined);
    const [loading,setLoading ] = useState(false);
    useEffect( () => {
     const getUser = async ()=>{
      try {
        setLoading(true);
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
                    const Convres = await axios.get("http://127.0.0.1:5500/api/v1/conversations/"+e);
                    let memebers = Convres.data.conv.memebers;
                    memebers = memebers.filter((e)=>{
                        return e !== res.data.user._id;
                    })

                    memebers.map(async (e)=>{
                        const userRes = await axios.get("http://127.0.0.1:5500/api/v1/auth/user/"+ e);
                              setContacts(prevContacts => {
                                   if (!prevContacts) {
                                      return [{
                                        contact:userRes.data.user,
                                        lastMessage:Convres.data.lastMessage
                                      }];
                                  }
                                  return [...prevContacts, {
                                    contact:userRes.data.user,
                                    lastMessage:Convres.data.lastMessage
                                  }];
                        });
                    });
                    
                  }));
          setUser(res.data.user)
         
          
        }
      }

      setLoading(false);

      } catch (error) {
        console.log(error);
      } 

     }  
     getUser();
     
     
 }, []);

 console.log(loading);
 if (loading  && !user) {
  return null;
}
 
if(loading && !contacts){
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
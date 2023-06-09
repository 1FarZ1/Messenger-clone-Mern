/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import ChatHeader from "./chat_header";
import ChatInput from "./chat_input";
import Conversation from "./conversation";
import { useContext, useEffect,useState } from 'react';
import axios from "axios"
import AuthContext from "../../../context/authContext";





const  ChatSection = (props) => {
    const {user} = useContext(AuthContext);
    const {contact,currentContact} = props;
    const  [data,setData]= useState([]);

    useEffect(()=>{
        const getMessages = async () => {
          try {
            const res = await axios.get("http://127.0.0.1:5500/api/v1/messages/" + user.Contacts[currentContact]  );
            console.log(res);
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMessages(); 
    },[currentContact])

    return (
        <div className="chat__section">
            <ChatHeader name={contact.username} profilePic={contact.profilePicture}/>
            <Conversation  data= {data.result} contact={contact}/>
            <ChatInput convId={user.Contacts[currentContact]} />
    
        </div>
    );
}


export default ChatSection;
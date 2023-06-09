/* eslint-disable react/prop-types */
import ChatHeader from "./chat_header";
import ChatInput from "./chat_input";
import Conversation from "./conversation";
import { useEffect,useState } from 'react';
import axios from "axios"





const  ChatSection = (props) => {
    const {contact} = props;
    const  [data,setData]= useState([]);

    useEffect(()=>{
        const getMessages = async () => {
          try {
            const res = await axios.get("http://127.0.0.1:5500/api/v1/messages/" + contact._id);
            console.log(res);
            setData(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getMessages(); 
    },[])

    return (
        <div className="chat__section">
            <ChatHeader name={contact.username} profilePic={contact.profilePicture}/>
            <Conversation  data= {data} contact={contact}/>
            <ChatInput/>
    
        </div>
    );
}


export default ChatSection;
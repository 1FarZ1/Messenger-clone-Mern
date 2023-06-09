/* eslint-disable react/prop-types */
import ChatHeader from "./chat_header";
import ChatInput from "./chat_input";
import { useContext, useState } from "react";
import AuthContext  from "../../../context/authContext";
import Conversation from "./conversation";
import { useEffect } from 'react';
import axios from "axios"





const  ChatSection = (props) => {
    const {contacts} = useContext(AuthContext);
    const {currentContact} = props;
    const  [data,setData]= useState([]);

    useEffect(()=>{
        const getMessages = async () => {
          try {
            const res = await axios.get("http://127.0.0.1:5500/api/v1/messages/" + contacts[currentContact].username);
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
            <ChatHeader name={contacts[currentContact].username} profilePic={contacts[currentContact].profilePic}/>
            <Conversation  data= {data} contact={contacts[currentContact]}/>
            <ChatInput/>
    
        </div>
    );
}


export default ChatSection;
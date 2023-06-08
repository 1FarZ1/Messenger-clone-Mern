
import ChatSection from "./componants/chat_section";
import SideBar from "./componants/sideBar";
import { useState } from "react";
import "./chat.css"


const ChatPage = () => { 
    const [currentContact,setContact] = useState(0);
    return (


        <div className="chat__container">
        <SideBar currentContact = {currentContact}  setContact ={setContact}/>
        <ChatSection  currentContact = {currentContact} setContact ={setContact}/>
      
        </div>
    )
}

export default ChatPage;
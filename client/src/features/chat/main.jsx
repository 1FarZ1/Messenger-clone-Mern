
import ChatSection from "./componants/chat_section";
import SideBar from "./componants/sideBar";
import { useContext, useState } from "react";
import "./chat.css"
import AuthContext from "../../context/authContext";


const ChatPage = () => { 
    const {contacts} =  useContext(AuthContext);
    const [currentContact,setContact] = useState(0);
    return (

        
        <div className="chat__container">
        <SideBar  contacts={contacts} currentContact = {currentContact}  setContact ={setContact}/>
        <ChatSection   contact = {contacts[currentContact].contact} currentContact = {currentContact} />
      
        </div>
    )
}

export default ChatPage;
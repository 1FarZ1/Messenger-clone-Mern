/* eslint-disable react/prop-types */
import ChatHeader from "./chat_header";
import ChatInput from "./chat_input";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth_context";
import Conversation from "./conversation";






const  ChatSection = (props) => {
    const {contacts} = useContext(AuthContext);
    const {currentContact} = props;

    return (
        <div className="chat__section">
            <ChatHeader name={contacts[currentContact].username} profilePic={contacts[currentContact].profilePic}/>
            <Conversation  contacts={contacts}/>
            <ChatInput/>
    
        </div>
    );
}


export default ChatSection;
/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import ChatSection from "./componants/chat_section";
import SideBar from "./componants/sideBar";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./chat.css"


const ChatPage = () => {

    const {user} =useContext(AuthContext);
    const navigator = useNavigate();

    useEffect(()=>{
        console.log(user);
        if(!user){
            
            navigator("/login");
            }
    },[])

    return (
        <div className="chat__container">
        <SideBar/>
        <ChatSection/>
      
        </div>
    )
}

export default ChatPage;
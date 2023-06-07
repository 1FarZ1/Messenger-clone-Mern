/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import ChatSection from "./componants/chat_section";
import SideBar from "./componants/sideBar";
import AuthContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";


const ChatPage = () => {

    const authState =useContext(AuthContext);
    const navigator = useNavigate();

    useEffect(()=>{
        if(!authState.user){
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
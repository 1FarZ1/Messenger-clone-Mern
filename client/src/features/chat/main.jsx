/* eslint-disable react/prop-types */

import ChatSection from "./componants/chat_section";
import SideBar from "./componants/sideBar";


const ChatPage = () => {

    return (
        <div className="chat__container">
        <SideBar/>
        <ChatSection/>
      
        </div>
    )
}

export default ChatPage;
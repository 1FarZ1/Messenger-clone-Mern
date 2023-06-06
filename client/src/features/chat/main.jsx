/* eslint-disable react/prop-types */

import Contact from "./componants/contact";

// import { useLocation } from "react-router-dom";

const ChatPage =()=>{
    // const location = useLocation();

    return(
        <div>
            <h1>Chat Page</h1>

            <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"}/>
      
        </div>
    )
}

export default ChatPage;
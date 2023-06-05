/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";

const ChatPage =()=>{
    const location = useLocation();
    console.log(location.state.username);
    return(
        <div>
            <h1>Chat Page</h1>
            <p>Welcome {location.state.username}</p>
            <button onClick={()=>{
                
            }}>
                Logout
            </button>
        </div>
    )
}

export default ChatPage;
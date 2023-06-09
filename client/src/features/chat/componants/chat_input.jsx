/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useState } from 'react'
import axios from 'axios'

const ChatInput = (props) => {

    const [message,setMessage] = useState("");
    const {convId } = props;
    const handleClick= async ()=>{
        try {
            const res = await axios.post("http://127.0.0.1:5500/api/v1/messages/"+convId,{
                "text":message
            },{
                withCredentials:true,
                credentials: 'include',
            });
            console.log(res);
            message &&  setMessage("");
            
        }
        catch (error) {
            console.log(error);
        }


    }
    return (
        <div className="chat__input">
                <input type="text"  value={message} onChange={(e)=>{
                    setMessage(e.target.value);
                }} placeholder="type a message"/>
                <button onClick={handleClick}>send</button>

            </div>
    )
}

export default ChatInput
import ChatHeader from "./chat_header";
import ChatInput from "./chat_input";
import Message from "./message";





const  ChatSection = () => {
    let data = [
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:true,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:true,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:true,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:true,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:true,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:true,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:false,
    
        },
    ];

    
    return (
        <div className="chat__section">
            <ChatHeader/>
            <div className="message__Section">
               {
                data.map((e)=>{
                     return <Message profilePic={e.profilePic} message={e.message} isMe={e.isMe} key={data.indexOf(e)} />
                })
               }
    
            </div>

            <ChatInput/>
            
        </div>
    );
}


export default ChatSection;
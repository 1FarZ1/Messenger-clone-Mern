/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Message from './message'



export default function Conversation(props) {
    const {contact} = props;


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
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:false,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:false,
    
        },
        {
            message:"hello bro",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            isMe:false,
    
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
    <div className="message__Section">
    {
    data.map((e)=>{
              return <Message profilePic={e.profilePic} message={e.message} isMe={e.isMe} key={data.indexOf(e)} />
     })
    }

 </div>
  )
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Message from './message'



export default function Conversation(props) {
    const {data} = props;
    console.log(data);
      return (
    <div className="message__Section">
    
    {
        data ===  undefined ? <h1>no messages yet</h1> : data.map((e)=>{
            return <Message profilePic={e.user.profilePicture} message={e.msg}  isMe={e.isMe} key={data.indexOf(e)} />
        }
        )
    }
    

 </div>
  )
}


// :    data.map((e)=>{
//               return <Message profilePic={e.profilePic} message={e.message} isMe={e.isMe} key={data.indexOf(e)} />
//      })
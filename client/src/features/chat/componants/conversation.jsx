/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Message from './message'



export default function Conversation(props) {
    const {data} = props;
      return (
    <div className="message__Section">
    
        <h1>no messages</h1>

    

 </div>
  )
}


// :    data.map((e)=>{
//               return <Message profilePic={e.profilePic} message={e.message} isMe={e.isMe} key={data.indexOf(e)} />
//      })
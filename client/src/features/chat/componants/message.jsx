/* eslint-disable react/prop-types */



const Message = (props)=>{
    const {message,profilePic,isMe} = props;
    const classToUse  = isMe  ? "messageFromMe"  : "message";
    return(
        <div className={classToUse}>
            <img src={profilePic} alt="image" />
            <div className="message__content">
            <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;
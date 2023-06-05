/* eslint-disable react/prop-types */

const ChatPage =(props)=>{
    const {username} = props;
    return(
        <div>
            <h1>Chat Page</h1>
            <p>Welcome {username}</p>
        </div>
    )
}

export default ChatPage;
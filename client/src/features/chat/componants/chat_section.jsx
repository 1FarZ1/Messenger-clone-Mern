import ChatHeader from "./chat_header";



const  ChatSection = () => {

    return (
        <div className="chat__section">
            <ChatHeader/>
            <div className="messageSection">
                <h1>hey</h1>
            </div>
            <div className="sendMessageSection">
                <input type="text" />
                <button>send</button>

            </div>
        </div>
    );
}


export default ChatSection;
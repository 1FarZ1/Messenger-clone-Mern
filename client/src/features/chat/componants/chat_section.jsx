import ChatHeader from "./chat_header";
import ChatInput from "./chat_input";



const  ChatSection = () => {

    return (
        <div className="chat__section">
            <ChatHeader/>
            <div className="messageSection">
                <h1>hey</h1>
            </div>

            <ChatInput/>
            
        </div>
    );
}


export default ChatSection;
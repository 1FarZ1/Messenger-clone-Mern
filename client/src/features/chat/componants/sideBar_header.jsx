import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessengerLogo from "../../../common/messenger_logo";
import { faAdd } from '@fortawesome/free-solid-svg-icons'



const SideBarHeader =  ()=>{
    return (
        <div className="header__container">
            <div className="top">
            <MessengerLogo/>
             <h2>Chat</h2>
            <FontAwesomeIcon icon={faAdd}/>
            </div>
            <input
                type="text"
                placeholder="Search here" />
                </div>

    )
}

export default SideBarHeader;
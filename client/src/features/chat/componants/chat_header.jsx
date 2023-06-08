/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const ChatHeader = (props) => {

    const {name,profilePic} = props;
    return (
        <div className="chat__header">
            <div className="chat__header__left">
                <img src={profilePic} alt="profile pic" />
                <h3>{name}</h3>
            </div>
            <div className="chat__header__right">
                <div className="chat__header__info">
                    <button> <FontAwesomeIcon icon={faInfoCircle}/></button>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
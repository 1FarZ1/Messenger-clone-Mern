import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const ChatHeader = () => {
    return (
        <div className="chat__header">
            <div className="chat__header__left">
                <img src="https://avatars.githubusercontent.com/u/91225280?v=4" alt="profile pic" />
                <h3>Fares Bk</h3>
            </div>
            <div className="chat__header__right">
                <div className="chat__header__info">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
import MessengerLogo from "../../../common/messenger_logo";


const Header =  ()=>{
    return (
        <div className="header__container">
            <div className="top">
            <MessengerLogo/>
             <h2>Chat</h2>
             
            <h3>t</h3>
            </div>
            <input
                type="text"
                placeholder="Search here" />

                </div>

    )
}

export default Header;
import { useContext } from "react";
import AuthContext from "../../../context/authContext";



const SideBarFooter = () => {
    const data= useContext(AuthContext)
    return (
        <div className="footer">
            
            <div className="profile_button">
                <img src="https://avatars.githubusercontent.com/u/91225280?v=4" alt="profile pic"/>
            </div>

            <div className="logout">
                <button>{data.data}</button>
            </div>
            <div className="settings">
                <button>Settings</button>
            </div>
            
            </div>
    );
}

export default SideBarFooter;

import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../../context/authContext";


const SideBarFooter = () => {

    const {func,user} = useContext(AuthContext); //  the func is used to change the authState in the authProvider.jsx

    const logOut =  async ()=>{
        try {
            const res =  await axios.get("http://127.0.0.1:5500/api/v1/auth/logout",{
                withCredentials:true,
                credentials: 'include',
            });
            func(null);
            console.log(res.data);
           
        } catch (error) {
            console.log(error);    
        }
    }
    
    console.log(user.profilePicture);
    return (
        <div className="footer">
            
            <div className="profile_button">
                <img src={user===null ? "no photo" : user.profilePicture} alt="profile pic"/>
            </div>

            <div >
                <button >Welcome {user.username}</button>
            </div>
            <div className="logout">
                <button onClick={logOut}>Logout</button>
            </div>
            
            </div>
    );
}

export default SideBarFooter;
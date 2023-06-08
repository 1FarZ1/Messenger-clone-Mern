
import axios from "axios";


const SideBarFooter = () => {

    const logOut =  async ()=>{
        try {
            const res =  await axios.get("http://127.0.0.1:5500/api/v1/auth/logout",{
                withCredentials:true,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                  },
            });
            console.log(res.data);
           
        } catch (error) {
            console.log(error);    
        }
    }
    return (
        <div className="footer">
            
            <div className="profile_button">
                <img src="https://avatars.githubusercontent.com/u/91225280?v=4" alt="profile pic"/>
            </div>

            <div className="logout">
                <button onClick={logOut}>Logout</button>
            </div>
            <div className="settings">
                <button>Settings</button>
            </div>
            
            </div>
    );
}

export default SideBarFooter;
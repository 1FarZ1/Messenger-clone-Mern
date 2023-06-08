/* eslint-disable react/prop-types */


import Contact from "./contact";
import SideBarHeader from "./sideBar_header";
import SideBarFooter from "./sideBar_Footer.jsx";
import { useContext } from "react";
import AuthContext from "../../../context/authContext";


const SideBar = (props) => {


    const {contacts} = useContext(AuthContext)
    const {currentContact ,setContact} = props;


    const changeContact = (val) => setContact(val);
    
    return (
        <div className="side__bar">
            <SideBarHeader />

            <div className="test">
            {

                contacts.length == 0 ? 
                <div className="no__contacts">
                    <p>no Contacts</p>
                    </div>
                :
                contacts.map((e)=>{
                        return <button className="contact__button" key={contacts.indexOf(e)}  onClick={()=>{
                            return changeContact(contacts.indexOf(e));
                        }}>
                            <Contact username={e.username} msg={e.msg} profilePic={e.profilePic} time={e.time}  isSelected={contacts.indexOf(e) === currentContact} key={contacts.indexOf(e)}    />
                        </button>
                    

                })
            }
            </div>


            <SideBarFooter />
        </div>
    );

}

export default SideBar;
/* eslint-disable react/prop-types */


import Contact from "./contact";
import SideBarHeader from "./sideBar_header";
import SideBarFooter from "./sideBar_Footer.jsx";


const SideBar = (props) => {

    const {contacts,currentContact ,setContact} = props;

    const changeContact = (val) => setContact(val);
    
    return (
        <div className="side__bar">
            <SideBarHeader  />

            <div className="test">
            {

                contacts.length == 0 ? 
                <div className="no__contacts">
                    <p>no Contacts</p>
                    </div>
                :
                contacts.map((e)=>{
                    console.log(e);
                        return <button className="contact__button" key={contacts.indexOf(e)}  onClick={()=>{
                            return changeContact(contacts.indexOf(e));
                        }}>
                            <Contact username={e.contact.username} msg={e.lastMessage.text} profilePic={e.contact.profilePicture} time={e.lastMessage.createdAt === undefined ? "no time yet ": e.lastMessage.createdAt .split("T")[0]} isSelected={contacts.indexOf(e) === currentContact} key={contacts.indexOf(e)}    />
                        </button>
                    

                })
            }
            </div>


            <SideBarFooter />
        </div>
    );

}

export default SideBar;


import Contact from "./contact";
import SideBarHeader from "./sideBar_header";
import SideBarFooter from "./sideBar_Footer.jsx";


const SideBar = () => {

    const contacts=[
        {
            username:"sahil",
            msg:"hello",
            profilePic:"https://avatars.githubusercontent.com/u/91225280?v=4",
            time:"12:00"
        }

    ];
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
                    return <Contact username={e.username} msg={e.msg} profilePic={e.profilePic} time={e.time}  key={contacts.indexOf(e)}/>
                })
            }
            </div>


            <SideBarFooter />
        </div>
    );

}

export default SideBar;
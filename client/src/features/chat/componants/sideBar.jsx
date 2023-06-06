

import Contact from "./contact";
import SideBarHeader from "./sideBar_header";
import SideBarFooter from "./sideBar_Footer.jsx";


const SideBar = () => {
    return (
        <div className="side__bar">
            <SideBarHeader />

            <div className="test">
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
                <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
            </div>


            <SideBarFooter />
        </div>
    );

}

export default SideBar;
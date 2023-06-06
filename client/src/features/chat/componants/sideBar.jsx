

import Contact from "./contact";
import Header from "./header";
import Footer from "./Footer.jsx";


const SideBar  = () => {
    return (
        <>
         <Header />
            <input
                type="text"
                placeholder="Search here" />
            <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
            <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
            <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
            <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
            <Contact username={"fares"} profilePic={"https://avatars.githubusercontent.com/u/91225280?v=4"} msg={"hey whats up man"} time={"1h"} />
            <Footer />
        </>
    );

}

export default SideBar;
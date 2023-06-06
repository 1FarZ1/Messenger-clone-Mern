/* eslint-disable react/prop-types */

import Contact from "./componants/contact";
import Header from "./componants/header";
import Footer from "./componants/Footer.jsx";

// import { useLocation } from "react-router-dom";

const ChatPage = () => {
    // const location = useLocation();

    return (
        <div>
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


        </div>
    )
}

export default ChatPage;
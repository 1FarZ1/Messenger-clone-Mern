import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from './features/auth/main'
import ChatPage from "./features/chat/main";
import { useContext } from "react";
import AuthContext from "./context/authContext";


const App = () => {
    // eslint-disable-next-line no-unused-vars
    const authState= useContext(AuthContext);
    return (
        <BrowserRouter>
            <Routes>                
                <Route path="/" element={<ChatPage />} />
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
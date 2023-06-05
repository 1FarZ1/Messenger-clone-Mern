import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from './features/auth/main'
import ChatPage from "./features/chat/main";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
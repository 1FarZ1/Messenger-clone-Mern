import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from './features/auth/main'
import ChatPage from "./features/chat/main";
import { PrivateRoute } from "./private/privateRouter";


const App = () => {
    // eslint-disable-next-line no-unused-vars
    return (
        <BrowserRouter>
            <Routes>   
            <Route element={<PrivateRoute />}>
                        <Route path="/" element={<ChatPage />} />
              </Route>             
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from './features/auth/main'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
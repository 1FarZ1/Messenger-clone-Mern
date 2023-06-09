import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from './index.jsx'
import { AuthProvider } from './context/authProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
       <App/>

    </AuthProvider>


)

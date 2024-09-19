import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/style.css'

createRoot(document.getElementById('root')).render(
    <Provider>
        <Navbar></Navbar>
        <Login></Login>
    </Provider>
)

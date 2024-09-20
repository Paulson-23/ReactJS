import App from './App'
import './assets/css/style.css'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
) 

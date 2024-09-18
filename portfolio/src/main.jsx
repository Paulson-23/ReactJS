import App from './App'
import './assets/css/style.css'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </StrictMode>
) 

import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import './assets/styles/style.css'
import store from './redux/store.js'
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)

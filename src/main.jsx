import { createRoot } from 'react-dom/client'
import HomePage from './pages/home'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
import { createRoot } from 'react-dom/client'
import HomePage from './pages/home'
import './index.css'
import { HashRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')).render(
    <HashRouter>
        <App />
    </HashRouter>
)
import { Routes, Route, useLocation } from 'react-router-dom'
import { routes } from './routes'
import Header from './widgets/header'

export default function App() {
    const location = useLocation()
    const currentRoute = routes.find(r => r.path === location.pathname)
    const showHeader = currentRoute?.showHeader !== false

    return (
        <>
            {showHeader && <Header />}
            <Routes>
                {routes.map(({ path, element: Element }) => (
                    <Route key={path} path={path} element={<Element />} />
                ))}
            </Routes>
        </>
    )
}
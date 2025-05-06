import { Header } from '../componentes/AreaDoVendedor/Header'
import { Outlet } from 'react-router-dom'

export function AreaDoVendedorLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
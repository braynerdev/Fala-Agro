import { Header } from '../componentes/Header'
import { Outlet } from 'react-router-dom'
import { FooterPadra } from '../componentes/Footer'

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <FooterPadra />
        </div>
    )
}
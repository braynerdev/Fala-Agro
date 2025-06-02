import { FooterPadra } from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header'

export function AreaDoVendedorLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <FooterPadra />
        </>
    )
}
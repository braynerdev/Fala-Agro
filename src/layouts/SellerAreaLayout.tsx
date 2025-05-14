import { Header } from '../Components/SellerArea/Header'
import { Outlet } from 'react-router-dom'

export function AreaDoVendedorLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
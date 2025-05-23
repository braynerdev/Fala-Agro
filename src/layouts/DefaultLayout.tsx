import { Header } from '../Components/Header'
import { Outlet } from 'react-router-dom'
import { FooterPadra } from '../Components/Footer'

export function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <FooterPadra />
        </>
    )
}
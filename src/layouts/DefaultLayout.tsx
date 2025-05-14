import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'
import { FooterPadra } from '../components/Footer'

export function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <FooterPadra />
        </>
    )
}
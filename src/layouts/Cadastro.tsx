import { Header } from '../Components/Cadastre/Header'
import { Outlet } from 'react-router-dom'
import { FooterPadra } from '../Components/Footer'

export function CadastroLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <FooterPadra />
        </>
    )
}
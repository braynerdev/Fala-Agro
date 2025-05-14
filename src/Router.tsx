import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { PerfilAreaDoVendedor } from './pages/SellerArea/Profile'
import { PagNavegacao } from './pages/Index'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { AreaDoVendedorLayout } from './Layouts/SellerAreaLayout'
import { Cadastre } from './pages/Cadastre/Cadastre'

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route path='' element={<PagNavegacao />} />
            <Route path='index' element={<PagNavegacao />} />
        </Route>

        
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastre />} />

        
        <Route path='/area-do-vendedor' element={<AreaDoVendedorLayout />}>
            <Route path="perfil" element={<PerfilAreaDoVendedor />} />
        </Route>
    </Routes>
  )
}

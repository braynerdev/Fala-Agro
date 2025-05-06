import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { PerfilAreaDoVendedor } from './pages/AreaDoVendedor/Perfil'
import { PagNavegacao } from './pages/Index'
import { DefaultLayout } from './layouts/DefaultLayout'
import { AreaDoVendedorLayout } from './layouts/AreaDoVendedorLayout'

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route path='' element={<PagNavegacao />} />
            <Route path='index' element={<PagNavegacao />} />
        </Route>

        <Route path="login" element={<Login />} />
        
        <Route path='/area-do-vendedor' element={<AreaDoVendedorLayout />}>
            <Route path="perfil" element={<PerfilAreaDoVendedor />} />
        </Route>
    </Routes>
  )
}

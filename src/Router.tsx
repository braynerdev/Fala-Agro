import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { PerfilAreaDoVendedor } from './pages/SellerArea/Profile'
import { PagNavegacao } from './pages/Index'
import { DefaultLayout } from './Layouts/DefaultLayout.tsx'
import { AreaDoVendedorLayout } from './Layouts/SellerAreaLayout.tsx'
import { CadastroLayout } from './Layouts/Cadastro.tsx'
import { Cadastre } from './pages/Cadastre/Cadastre'

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route path='' element={<PagNavegacao />} />
            <Route path='index' element={<PagNavegacao />} />
        </Route>
        <Route path='/cadastro' element={<CadastroLayout />}>
            <Route path='usuario' element={<Cadastre />} />
        </Route>
        
        <Route path="login" element={<Login />} />
        

        
        <Route path='/area-do-vendedor' element={<AreaDoVendedorLayout />}>
            <Route path="perfil" element={<PerfilAreaDoVendedor />} />
        </Route>
    </Routes>
  )
}

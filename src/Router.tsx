import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { PerfilAreaDoVendedor } from './pages/SellerArea/Profile';
import { PagNavegacao } from './pages/Index';
import { Cadastre } from './pages/Cadastre/Cadastre';
import PaginaEvento from './pages/Evento/PaginaEvento';
import Checkout from './pages/Checkout/Checkout'; 

export function Router() {
  return (
    <Routes>
      <Route path='/' >
        <Route path='' element={<PagNavegacao />} />
        <Route path='index' element={<PagNavegacao />} />
        <Route path='evento/:id' element={<PaginaEvento />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>

      <Route path='/cadastro' >
        <Route path='usuario' element={<Cadastre />} />
      </Route>

      <Route path='login' element={<Login />} />

      <Route path='/area-do-vendedor'>
        <Route path='perfil' element={<PerfilAreaDoVendedor />} />
      </Route>
    </Routes>
  );
}


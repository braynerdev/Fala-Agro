import { Routes, Route } from 'react-router-dom';
import { Login } from './Paginas/Login';
import { PerfilAreaDoVendedor } from './Paginas/AreaVendedor/AreaVendedor';
import { PagNavegacao } from './Paginas/Index';
import { DefaultLayout } from './layouts/DefaultLayout';
import { AreaDoVendedorLayout } from './layouts/SellerAreaLayout';
import { CadastroLayout } from './layouts/Cadastro';
import { Cadastre } from './Paginas/Cadastro/Cadastre';
import PaginaEvento  from './Paginas/Evento/PaginaEvento';
import Checkout from './Paginas/Checkout/Checkout'; 
import Noticias from './Paginas/Noticias/Noticias';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='' element={<PagNavegacao />} />
        <Route path='index' element={<PagNavegacao />} />
        <Route path='evento/:id' element={<PaginaEvento />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='noticias/:id' element={<Noticias />} />
      </Route>

      <Route path='/cadastro' element={<CadastroLayout />}>
        <Route path='usuario' element={<Cadastre />} />
      </Route>

      <Route path='login' element={<Login />} />

      <Route path='/area-do-vendedor' element={<AreaDoVendedorLayout />}>
        <Route path='perfil' element={<PerfilAreaDoVendedor />} />
      </Route>
    </Routes>
  );
}


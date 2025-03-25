import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';
import { AreaDoVendedor } from '../src/Pages/AreaDoVendedor'


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Index />} />;
                <Route path="/index" element={<Index />} />;
                <Route path="/area-do-vendedor" element={<AreaDoVendedor />} />;
                <Route path="/login" element={<Login />} />;
                <Route path="*" element={<NotFound />} />;
            </Routes>
        </BrowserRouter>
    );
};
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Index />} />;
                <Route path="/index" element={<Index />} />;
                <Route path="/login" element={<Login />} />;
                <Route path="*" element={<NotFound />} />;
            </Routes>
        </BrowserRouter>
    );
};
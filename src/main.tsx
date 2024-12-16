import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TaobaoPage from './pages/TaobaoPage.tsx';
import Site1688Page from './pages/Site1688Page.tsx';
import TemuPage from './pages/TemuPage.tsx';
import DeliveryPage from './pages/DeliveryPage.tsx';
import PinduoduoPage from './pages/PinduoduoPage.tsx';
import Products1688Page from './pages/Products1688Page.tsx';
import ChineseProductsPage from './pages/ChineseProductsPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/taobao" element={<TaobaoPage />} />
        <Route path="/1688" element={<Site1688Page />} />
        <Route path="/temu" element={<TemuPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/pinduoduo" element={<PinduoduoPage />} />
        <Route path="/products-1688" element={<Products1688Page />} />
        <Route path="/chinese-products" element={<ChineseProductsPage />} />
      </Routes>
    </Router>
  </StrictMode>
);

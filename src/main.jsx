import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Cardapio from './pages/Cardapio.jsx';
import Servicos from './pages/Servicos.jsx';
import Contato from './pages/Contato.jsx';
import Pizza from './pages/Pizza.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cardapio" element={<Cardapio />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

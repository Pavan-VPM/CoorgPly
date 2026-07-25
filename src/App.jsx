import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Story from './pages/Story';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Manufacturing from './pages/Manufacturing';
import Contact from './pages/Contact';
import TechnicalSpecs from './pages/TechnicalSpecs';

export default function App() {
  const { pathname } = useLocation();

  // Automatically scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative bg-surface text-on-surface">
      {/* Decorative grain overlay */}
      <div className="grain-overlay" />
      
      {/* Shared Navigation */}
      <Header />
      
      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technical-specs" element={<TechnicalSpecs />} />
        </Routes>
      </main>
      
      {/* Shared Footer */}
      <Footer />
      
      {/* Floating contact widget */}
      <WhatsAppButton />
    </div>
  );
}

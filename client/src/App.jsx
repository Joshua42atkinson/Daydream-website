import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Evidence from './pages/Evidence';
import Footer from './components/Footer';

// import About from './pages/About'; // Legacy About Page replaced by Resume
import AskPete from './pages/AskPete';
import Downloads from './pages/Downloads';
import GeneralResume from './pages/GeneralResume'; // Now acting as the About Page

import NotFound from './pages/NotFound';
import SupraBadgePage from './pages/portfolio/SupraBadgePage';
import SubBadgePage from './pages/portfolio/SubBadgePage';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
      <Navigation />

      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:categoryId" element={<SupraBadgePage />} />
            <Route path="/portfolio/:categoryId/:badgeId" element={<SubBadgePage />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/ask-pete" element={<AskPete />} />
            <Route path="/downloads" element={<Downloads />} />
            {/* Consolidated Resume and About */}
            <Route path="/about" element={<GeneralResume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
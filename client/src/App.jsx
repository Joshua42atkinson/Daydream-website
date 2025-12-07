import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'; // The new page we created in Step 2
import Evidence from './pages/Evidence';
import Footer from './components/Footer';

import About from './pages/About';
import AskPete from './pages/AskPete';
import Downloads from './pages/Downloads';

import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename="/Daydream-website">
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">

        {/* Global Navigation */}
        <Navigation />

        {/* Main Content Area */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/evidence" element={<Evidence />} />
            <Route path="/ask-pete" element={<AskPete />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/about" element={<About />} />

            {/* Fallback for 404s */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;

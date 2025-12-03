import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'; // The new page we created in Step 2
import Footer from './components/Footer';

// Placeholder for other pages if you haven't created them yet
const AskPete = () => <div className="p-20 text-white">Ask Pete Logic Integration Coming Soon...</div>;
const Downloads = () => <div className="p-20 text-white">Downloads Section Coming Soon...</div>;
const About = () => <div className="p-20 text-white">About Section Coming Soon...</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">

        {/* Global Navigation */}
        <Navigation />

        {/* Main Content Area */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/ask-pete" element={<AskPete />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/about" element={<About />} />

            {/* Fallback for 404s */}
            <Route path="*" element={<div className="p-20 text-center text-slate-400">404: Page Not Found</div>} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Daydream = lazy(() => import('./pages/Daydream'));

const PageLoader = () => (
  <div className="flex h-screen items-center justify-center bg-slate-950 text-cyan-300">
    Loading...
  </div>
);

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/daydream" element={<Daydream />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

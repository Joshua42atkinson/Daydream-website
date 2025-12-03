import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';

const Home = lazy(() => import('./pages/Home'));
const PortfolioHome = lazy(() => import('./pages/portfolio/PortfolioHome'));
const SupraBadgePage = lazy(() => import('./pages/portfolio/SupraBadgePage'));
const SubBadgePage = lazy(() => import('./pages/portfolio/SubBadgePage'));
const Downloads = lazy(() => import('./pages/Downloads'));
const About = lazy(() => import('./pages/About'));
const AskPete = lazy(() => import('./pages/AskPete'));

const PageLoader = () => (
  <div className="flex h-screen items-center justify-center bg-slate-950 text-[#CFB991]">
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
            <Route path="/portfolio" element={<PortfolioHome />} />
            <Route path="/portfolio/:categoryId" element={<SupraBadgePage />} />
            <Route path="/portfolio/:categoryId/:badgeId" element={<SubBadgePage />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/about" element={<About />} />
            <Route path="/ask-pete" element={<AskPete />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

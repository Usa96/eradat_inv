import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/crimson-text';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// Home page components
import { HeroSection } from './components/HeroSection';
import { PropertiesCarousel } from './components/PropertiesCarousel';
import { CompanyHighlights } from './components/CompanyHighlights';
import { AboutSection } from './components/AboutSection';
import { LatestMedia } from './components/LatestMedia';
// Pages
import AboutUs from './pages/AboutUs';
import Properties from './pages/Properties';
import Media from './pages/Media';
import Contact from './pages/Contact';
// Team member pages
import TeamMember from './pages/TeamMember';
export function App() {
  return <Router>
      <ScrollToTop />
      <div className="w-full min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<main>
                <HeroSection />
                <AboutSection />
                <PropertiesCarousel />
                <CompanyHighlights />
                <LatestMedia />
              </main>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team/:id" element={<TeamMember />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>;
}
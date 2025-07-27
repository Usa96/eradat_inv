import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/properties" className={`font-medium text-xl transition-colors ${hasScrolled ? isActive('/properties') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/properties') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
            {t('Properties')}
          </Link>
          <Link to="/about" className={`font-medium text-xl transition-colors ${hasScrolled ? isActive('/about') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/about') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
            {t('About')}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className={`md:hidden ${hasScrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <Link to="/">
            <img 
              src={hasScrolled ? "/assets/logo.png" : "/assets/white_logo.png"}
              alt="ERADAT Logo"
              className="h-28 transition-all"
            />
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/media" className={`font-medium text-xl transition-colors ${hasScrolled ? isActive('/media') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/media') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
            {t('Media')}
          </Link>
          <Link to="/contact" className={`font-medium text-xl transition-colors ${hasScrolled ? isActive('/contact') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/contact') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
            {t('Contact')}
          </Link>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 px-4 backdrop-blur-sm ${hasScrolled ? 'bg-white' : 'bg-black/90'}`}>
            <nav className="flex flex-col space-y-4">
              <Link to="/properties" onClick={() => setIsMenuOpen(false)} className={`font-medium ${hasScrolled ? isActive('/properties') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/properties') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
                {t('Properties')}
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`font-medium ${hasScrolled ? isActive('/about') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/about') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
                {t('About')}
              </Link>
              <Link to="/media" onClick={() => setIsMenuOpen(false)} className={`font-medium ${hasScrolled ? isActive('/media') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/media') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
                {t('Media')}
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`font-medium ${hasScrolled ? isActive('/contact') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/contact') ? 'text-amber-300' : 'text-white hover:text-amber-100'}`}>
                {t('Contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

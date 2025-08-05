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

  const handleLanguageToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className={`container mx-auto flex items-center justify-between ${ i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row' }`}>
        <div className={`relative container mx-auto flex items-center justify-between ${
            i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              to="/properties"
              className={`font-medium text-xl transition-colors ${ hasScrolled ? isActive('/properties') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/properties') ? 'text-amber-300' : 'text-white hover:text-amber-100' }`} >
              {t('Properties')}
            </Link>
            <Link
              to="/about" className={`font-medium text-xl transition-colors ${ hasScrolled ? isActive('/about') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/about') ? 'text-amber-300': 'text-white hover:text-amber-100'}`}>
              {t('About')}
            </Link>
          </nav>
            
          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Link to="/">
              <img
                src={hasScrolled ? '/assets/logo.png' : '/assets/white_logo.png'}
                alt="ERADAT Logo"
                className="h-28 transition-all"
              />
            </Link>
          </div>

          {/* Left Side (Media, Contact, Language) in EN — becomes right side in AR */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link
              to="/media"
              className={`font-medium text-xl transition-colors ${ hasScrolled ? isActive('/media') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/media') ? 'text-amber-300' : 'text-white hover:text-amber-100' }`}>
              {t('Media')}
            </Link>
            <Link
              to="/contact"
              className={`font-medium text-xl transition-colors ${ hasScrolled ? isActive('/contact') ? 'text-amber-800' : 'text-gray-800 hover:text-amber-800' : isActive('/contact') ? 'text-amber-300' : 'text-white hover:text-amber-100' }`} >
              {t('Contact')}
            </Link>
          </div>
        </div>
        {/* Language Toggle */}
        <div className='absolute right-8 top-1/2 -translate-y-1/2'>
          <button
            onClick={handleLanguageToggle}
            className={`font-medium text-xl transition-colors ${ hasScrolled ? 'text-gray-800 hover:text-amber-800' : 'text-white hover:text-amber-100' }`}>
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

          {/* Mobile menu button remains unchanged */}
          <button
            className={`md:hidden ${hasScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)} >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 md:hidden py-4 px-4 backdrop-blur-sm ${hasScrolled ? 'bg-white' : 'bg-black/90'}`}>
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
              
              {/* Language Toggle in Mobile Menu */}
              <button 
                onClick={() => {
                  handleLanguageToggle();
                  setIsMenuOpen(false);
                }}
                className={`font-medium text-left ${hasScrolled ? 'text-gray-800 hover:text-amber-800' : 'text-white hover:text-amber-100'}`}
              >
                {i18n.language === 'en' ? 'العربية' : 'English'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
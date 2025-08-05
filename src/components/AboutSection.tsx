import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const AboutSection = () => {
  const { t, i18n } = useTranslation();
  return <section id="about" className="relative w-full h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/home_about.jpg" alt="Modern luxury real estate property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <img src="/assets/white_logo.png"
              alt="ERADAT Logo" className="h-40 mx-auto mb-8"/>
                <p className="text-xl md:text-xl leading-relaxed mb-8">
                  {t('home-desc')}
                </p>
            <Link to="/about" className="inline-block bg-amber-800 hover:bg-amber-900 text-white font-medium py-3 px-8 rounded-md transition-colors">
              {t('Learn More')}
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
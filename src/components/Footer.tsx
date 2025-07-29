import React from 'react';
import { Link } from 'react-router-dom';
import { SiX } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon} from 'lucide-react';
export const Footer = () => {
  const { t, i18n } = useTranslation();
  return <footer className="bg-[#f9f6f2] text-gray-800 px-6 py-16 text-sm">
  {/* Top section: name + description */}
  <div className={`max-w-7xl mx-auto mb-12 ${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
    <h2 className="text-2xl font-light tracking-wide mb-4">{t('Footer-title')}</h2>
    <p className="leading-relaxed text-gray-700 text-xl">
      {t('Footer-description')}
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
    <div className="flex flex-col items-center md:items-start">
      <img src="/assets/logo.png" alt="ERADAT Logo" className="h-40 mb-4"/>
      <div className="flex gap-4">
        <a href="https://x.com/Eradatkw" aria-label="Twitter" className="text-gray-700 hover:text-black transition">
          <SiX size={20} />
        </a>
        <a href="https://www.instagram.com/eradatkw/" aria-label="Instagram" className="text-gray-700 hover:text-black transition">
          <InstagramIcon size={20} />
        </a>
        <a href="https://www.linkedin.com/company/99874090/admin/page-posts/published/" aria-label="LinkedIn" className="text-gray-700 hover:text-black transition">
          <LinkedinIcon size={20} />
        </a>
      </div>
    </div>

    <div className={`${i18n.language === 'ar' ? 'text-right' : 'text-left'} text-center md:text-left`}>
      <h3 className="uppercase text-xl font-semibold tracking-widest mb-4 flex items-center gap-2 ${i18n.language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}">
        {t('Quick-Links')}
      </h3>
      <ul className="space-y-2 text-xl">
        <li className={`flex items-center gap-2 ${i18n.language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
          <Link to="/properties" className="hover:underline">{t('Properties')}</Link></li>
        <li className={`flex items-center gap-2 ${i18n.language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
          <Link to="/about" className="hover:underline">{t('About')}</Link></li>
        <li className={`flex items-center gap-2 ${i18n.language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
          <Link to="/media" className="hover:underline">{t('Media')}</Link></li>
        <li className={`flex items-center gap-2 ${i18n.language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
          <Link to="/contact" className="hover:underline">{t('Contact')}</Link></li>
      </ul>
    </div>

    <div className={`${i18n.language === 'ar' ? 'text-right' : 'text-left'} text-center md:text-left`}>
      <h3 className="uppercase text-xl font-semibold tracking-widest mb-4 flex items-center gap-2 ${i18n.language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}">
        {t('Contact')}
      </h3>
      <ul className="space-y-3 text-xl">
        <li className={`flex items-center gap-2 ${i18n.language === 'ar' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
          <MapPinIcon className="h-4 w-4" />
          <span>{t('Address')}</span>
        </li>
        <li className={`flex items-center gap-2 justify-start'}`}>
          <PhoneIcon className="h-4 w-4" />
          <span dir="ltr">{t('Phone')}</span>
        </li>
        <li className={`flex items-center gap-2 justify-start'}`}>
          <MailIcon className="h-4 w-4" />
          <span>{t('Email')}</span>
        </li>
      </ul>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-300 pt-6 text-center text-xs text-gray-500">
    <p>&copy; {new Date().getFullYear()} ERADAT. All rights reserved.</p>
    <div className="mt-2 space-x-4">
      <a href="#" className="hover:underline">Privacy Policy</a>
      <a href="#" className="hover:underline">Terms of Service</a>
      <a href="#" className="hover:underline">Disclaimer</a>
    </div>
  </div>
</footer>;
};
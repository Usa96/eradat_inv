import React from 'react';
import { Link } from 'react-router-dom';
import { SiX } from 'react-icons/si';
import { TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon, LockIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-[#f9f6f2] text-gray-800 px-6 py-16 text-sm">
  {/* Top section: name + description */}
  <div className="text-left max-w-7xl mx-auto mb-12">
    <h2 className="text-2xl font-light tracking-wide mb-4">ERADAT</h2>
    <p className="leading-relaxed text-gray-700">
      Building wealth through strategic real estate investments. ERADAT is a premier real estate investment and development company delivering exceptional properties and strong returns.
    </p>
  </div>

  {/* Bottom section: 3 columns */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
    
    {/* Logo Column */}
    <div className="flex flex-col items-left md:items-start">
      <img
        src="/assets/logo.png" // Adjust if needed
        alt="ERADAT Logo"
        className="h-40 mb-4"
      />
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

    {/* Quick Links */}
    <div className="text-center md:text-left">
      <h3 className="uppercase text-xs font-semibold tracking-widest mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><Link to="/properties" className="hover:underline">Properties</Link></li>
        <li><Link to="/about" className="hover:underline">About Us</Link></li>
        <li><Link to="/media" className="hover:underline">Media</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="text-center md:text-left">
      <h3 className="uppercase text-xs font-semibold tracking-widest mb-4">Contact</h3>
      <ul className="space-y-3">
        <li className="flex items-center justify-center md:justify-start gap-2">
          <MapPinIcon className="h-4 w-4" />
          <span>Salhiya Complex, Qibla, Kuwait</span>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <PhoneIcon className="h-4 w-4" />
          <span>(+965) 2239 66666</span>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-2">
          <MailIcon className="h-4 w-4" />
          <span>info@eradat.me</span>
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
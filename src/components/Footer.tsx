import React from 'react';
import { Link } from 'react-router-dom';
import { SiX } from 'react-icons/si';
import { TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon, LockIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-black text-amber-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-white">
                ERADAT
                - International Real Estate Investment Company 
              </h3>
              <div className="w-28 h-28 bg-amber-900/20 rounded-md flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src="/assets/white_logo.png"
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-white mb-4">
                Building wealth through strategic real estate investments
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://x.com/Eradatkw"
                  className="text-white hover:text-amber-100 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <SiX size={20} />
                </a>
                <a href="https://www.instagram.com/eradatkw/" className="text-white hover:text-amber-100 transition-colors" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/company/99874090/admin/page-posts/published/" className="text-white hover:text-amber-100 transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
              <div>
                <a href="#" className="flex items-center text-white hover:text-amber-100 transition-colors">
                  <LockIcon size={16} className="mr-2" />
                  <span>Employee Login</span>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-200">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/properties" className="text-white hover:text-amber-100 transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:text-amber-100 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="text-white hover:text-amber-100 transition-colors">
                    Media
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:text-amber-100 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-200">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-amber-100/60 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-white">
                    Salhiya Complex, Qibla, Kuwait.
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-amber-100/60 mr-2 flex-shrink-0" />
                  <span className="text-white">(+965) 2239 66666</span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="h-5 w-5 text-amber-100/60 mr-2 flex-shrink-0" />
                  <span className="text-white">
                    info@eradat.me
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-900 pt-6 text-center text-amber-100/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} PrimeInvest. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-amber-100 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-100 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-100 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
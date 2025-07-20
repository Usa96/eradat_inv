import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon, LockIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-black text-amber-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-amber-200">
                PrimeInvest
              </h3>
              <div className="w-24 h-24 bg-amber-900/20 rounded-md flex items-center justify-center mb-4">
                {/* Space for logo */}
                <span className="text-amber-200 text-lg font-bold">LOGO</span>
              </div>
              <p className="text-amber-100/80 mb-4">
                Building wealth through strategic real estate investments since
                2012.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-amber-100/60 hover:text-amber-100 transition-colors" aria-label="Facebook">
                  <FacebookIcon size={20} />
                </a>
                <a href="#" className="text-amber-100/60 hover:text-amber-100 transition-colors" aria-label="Twitter">
                  <TwitterIcon size={20} />
                </a>
                <a href="#" className="text-amber-100/60 hover:text-amber-100 transition-colors" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href="#" className="text-amber-100/60 hover:text-amber-100 transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
              <div>
                <a href="#" className="flex items-center text-amber-100/80 hover:text-amber-100 transition-colors">
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
                  <Link to="/properties" className="text-amber-100/80 hover:text-amber-100 transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-amber-100/80 hover:text-amber-100 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="text-amber-100/80 hover:text-amber-100 transition-colors">
                    Media
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-amber-100/80 hover:text-amber-100 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-amber-100 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-amber-100 transition-colors">
                    Investment Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-amber-100/80 hover:text-amber-100 transition-colors">
                    Market Reports
                  </a>
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
                  <span className="text-amber-100/80">
                    123 Investment Ave, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-amber-100/60 mr-2 flex-shrink-0" />
                  <span className="text-amber-100/80">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="h-5 w-5 text-amber-100/60 mr-2 flex-shrink-0" />
                  <span className="text-amber-100/80">
                    info@primeinvest.com
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
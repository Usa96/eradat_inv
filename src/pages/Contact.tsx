import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
const Contact = () => {
  return <main>
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          </div>
        </div>
      </section>
      {/* Map and Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-md h-[500px]">
              {/* Map iframe - using OpenStreetMap */}
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=47.965753376483924%2C29.363934032912876%2C47.969293892383575%2C29.365935003905456&amp;layer=mapnik&amp;marker=29.364934523324116%2C47.967523634433746" width="100%" height="100%" frameBorder="0" style={{
              border: 0
            }} allowFullScreen aria-hidden="false" tabIndex={0} title="PrimeInvest Location"></iframe>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPinIcon className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Visit Us
                    </h3>
                    <p className="text-gray-700">
                      Salhiya Complex
                      <br />
                      Qibla
                      <br />
                      Kuwait
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <PhoneIcon className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Call Us
                    </h3>
                    <p className="text-gray-700">
                      Main: (+965) 22396666
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MailIcon className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Email Us
                    </h3>
                    <p className="text-gray-700">
                      General Inquiries: info@eradat.me
                      </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <ClockIcon className="h-6 w-6 text-amber-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 4:00 PM GMT +3
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a href="https://x.com/Eradatkw" className="bg-amber-100 p-3 rounded-full text-amber-800 hover:bg-amber-200 transition-colors">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/eradatkw/#" className="bg-amber-100 p-3 rounded-full text-amber-800 hover:bg-amber-200 transition-colors">
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/eradat-international-real-estate/" className="bg-amber-100 p-3 rounded-full text-amber-800 hover:bg-amber-200 transition-colors">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Contact;
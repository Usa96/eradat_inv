import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
const Contact = () => {
  return <main>
      {/* Hero Section */}
      <section className="bg-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-amber-100">
              We're here to answer your questions and provide guidance on your
              investment journey.
            </p>
          </div>
        </div>
      </section>
      {/* Map and Contact Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-md h-[500px]">
              {/* Map iframe - using OpenStreetMap */}
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01353120803834%2C40.70521519675656%2C-73.99268150329591%2C40.71679781143762&amp;layer=mapnik" width="100%" height="100%" frameBorder="0" style={{
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
                      123 Investment Ave
                      <br />
                      New York, NY 10001
                      <br />
                      United States
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
                      Main: (555) 123-4567
                      <br />
                      Investor Relations: (555) 987-6543
                      <br />
                      Support: (555) 456-7890
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
                      General Inquiries: info@primeinvest.com
                      <br />
                      Investor Relations: investors@primeinvest.com
                      <br />
                      Support: support@primeinvest.com
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
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday: 10:00 AM - 2:00 PM EST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-800 hover:bg-amber-200 transition-colors">
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-800 hover:bg-amber-200 transition-colors">
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-800 hover:bg-amber-200 transition-colors">
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-800 hover:bg-amber-200 transition-colors">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Office Locations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Offices
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              With offices across the country, we're positioned to identify the
              best investment opportunities in key markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300">
                <img src="https://images.unsplash.com/photo-1582037928769-181cf80252c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="New York Office" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  New York
                </h3>
                <p className="text-gray-700 mb-4">
                  123 Investment Ave
                  <br />
                  New York, NY 10001
                  <br />
                  (555) 123-4567
                </p>
                <a href="#" className="text-amber-800 hover:text-amber-900 font-medium">
                  Get Directions
                </a>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300">
                <img src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Miami Office" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Miami
                </h3>
                <p className="text-gray-700 mb-4">
                  456 Brickell Avenue
                  <br />
                  Miami, FL 33131
                  <br />
                  (555) 234-5678
                </p>
                <a href="#" className="text-amber-800 hover:text-amber-900 font-medium">
                  Get Directions
                </a>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300">
                <img src="https://images.unsplash.com/photo-1581373449483-37449f962b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt="Austin Office" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Austin
                </h3>
                <p className="text-gray-700 mb-4">
                  789 Tech Corridor
                  <br />
                  Austin, TX 78701
                  <br />
                  (555) 345-6789
                </p>
                <a href="#" className="text-amber-800 hover:text-amber-900 font-medium">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>;
};
export default Contact;
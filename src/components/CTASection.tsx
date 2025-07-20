import React from 'react';
export const CTASection = () => {
  return <section className="py-16 bg-amber-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Start Building Wealth?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of investors who are already growing their portfolio
          with PrimeInvest's real estate opportunities.
        </p>
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-amber-900 text-xl font-semibold mb-4">
            Get Started Today
          </h3>
          <form>
            <div className="mb-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            </div>
            <div className="mb-4">
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required />
            </div>
            <div className="mb-4">
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-700" required>
                <option value="">Investment Amount</option>
                <option value="10000-50000">$10,000 - $50,000</option>
                <option value="50001-100000">$50,001 - $100,000</option>
                <option value="100001-250000">$100,001 - $250,000</option>
                <option value="250001+">$250,001+</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-black hover:bg-gray-900 text-amber-100 font-medium py-3 rounded-md transition-colors">
              Schedule a Consultation
            </button>
          </form>
        </div>
      </div>
    </section>;
};
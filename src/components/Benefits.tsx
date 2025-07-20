import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export const Benefits = () => {
  const benefits = ['Passive income through regular dividend payments', 'Portfolio diversification beyond traditional stocks and bonds', 'Inflation hedge through appreciating real estate assets', 'Professional property management - no landlord headaches', 'Tax advantages specific to real estate investments', 'Lower volatility compared to stock market investments', 'Access to institutional-quality real estate', 'Transparent fee structure with no hidden costs'];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                  <p className="text-gray-700">{benefit}</p>
                </div>)}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Why Invest With Us</h2>
            <p className="text-gray-700 mb-6">
              PrimeInvest offers a unique opportunity to invest in high-quality
              real estate assets that were previously only available to
              institutional investors.
            </p>
            <p className="text-gray-700 mb-8">
              Our platform provides all the benefits of real estate ownership
              without the traditional barriers and headaches of direct property
              management.
            </p>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-md transition-colors">
              Start Investing Now
            </button>
          </div>
        </div>
      </div>
    </section>;
};
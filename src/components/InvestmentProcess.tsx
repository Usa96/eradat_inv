import React from 'react';
import { SearchIcon, BarChart2Icon, HomeIcon, DollarSignIcon } from 'lucide-react';
export const InvestmentProcess = () => {
  return <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Investing in real estate with PrimeInvest is simple, transparent,
            and designed to maximize your returns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Properties</h3>
            <p className="text-gray-600">
              Explore our curated selection of investment properties and find
              opportunities that match your goals.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart2Icon className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Review Analytics</h3>
            <p className="text-gray-600">
              Examine detailed financial projections, market analysis, and risk
              assessments for each property.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HomeIcon className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Invest</h3>
            <p className="text-gray-600">
              Choose your investment amount and complete the process through our
              secure online platform.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSignIcon className="h-8 w-8 text-blue-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn Returns</h3>
            <p className="text-gray-600">
              Receive regular dividend payments and track your investment
              performance through your dashboard.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-800">$10,000</p>
              <p className="text-gray-600">Minimum Investment</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-800">8-16%</p>
              <p className="text-gray-600">Annual Returns</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-800">Quarterly</p>
              <p className="text-gray-600">Dividend Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
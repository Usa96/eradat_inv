import React from 'react';
import { BarChartIcon, BuildingIcon, LayoutIcon, PercentIcon } from 'lucide-react';
export const CompanyHighlights = () => {
  return <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Why Choose ERADAT
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our proven track record and investment approach has delivered
            consistent returns for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BuildingIcon className="h-8 w-8 text-amber-800" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">KWD 54M+</p>
            <p className="text-gray-700">Assets Under Management</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BuildingIcon className="h-8 w-8 text-amber-800" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">14</p>
            <p className="text-gray-700">Properties</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <LayoutIcon className="h-8 w-8 text-amber-800" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">65 sqft</p>
            <p className="text-gray-700">Gross Leasable Area (thousand)</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <PercentIcon className="h-8 w-8 text-amber-800" />
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">90%</p>
            <p className="text-gray-700">Target Dividend Ratio</p>
          </div>
        </div>
      </div>
    </section>;
};
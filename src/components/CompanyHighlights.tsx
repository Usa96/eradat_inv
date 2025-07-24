import React from 'react';
import { BarChartIcon, BuildingIcon, LayoutIcon, PercentIcon } from 'lucide-react';
export const CompanyHighlights = () => {
  return <section
  className="py-24 bg-fixed bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/assets/company_highlights.webp')"}}>
  {/* Optional overlay for better text contrast */}
  <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4 text-white">
        Why Choose ERADAT
      </h2>
      <p className="text-white max-w-2xl mx-auto">
        Our proven track record and investment approach has delivered
        consistent returns for our clients.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl">
      {/* Block 1 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-gray-900">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BuildingIcon className="h-8 w-8 text-amber-800" />
        </div>
        <p className="text-4xl font-bold mb-2">KD 54M+</p>
        <p>Assets Under Management</p>
      </div>

      {/* Block 2 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-gray-900">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BuildingIcon className="h-8 w-8 text-amber-800" />
        </div>
        <p className="text-4xl font-bold mb-2">14</p>
        <p>Properties</p>
      </div>

      {/* Block 3 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-gray-900">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <LayoutIcon className="h-8 w-8 text-amber-800" />
        </div>
        <p className="text-4xl font-bold mb-2">65 </p>
        <p>Gross Leasable Area (thousand) sqft </p>
      </div>

      {/* Block 4 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-gray-900">
        <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <PercentIcon className="h-8 w-8 text-amber-800" />
        </div>
        <p className="text-4xl font-bold mb-2">90%</p>
        <p>Target Dividend Ratio</p>
      </div>
    </div>
  </div>
</section>;
};
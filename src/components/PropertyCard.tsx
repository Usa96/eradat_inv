import React from 'react';
interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  roi: string;
  term: string;
}
export const PropertyCard = ({
  image,
  title,
  location,
  price,
  roi,
  term
}: PropertyCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-medium px-2 py-1 rounded">
          {roi} ROI
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Investment</p>
            <p className="font-semibold">{price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Term</p>
            <p className="font-semibold">{term}</p>
          </div>
        </div>
        <button className="w-full bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 rounded transition-colors">
          View Details
        </button>
      </div>
    </div>;
};
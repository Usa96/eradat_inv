import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FilterIcon, MapPinIcon, DollarSignIcon, ClockIcon, PercentIcon } from 'lucide-react';
interface Property {
  id: number;
  title: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Mixed-Use';
  status: 'Available' | 'Funded' | 'Upcoming';
  image: string;
  description: string;
  price: string;
  roi: string;
  term: string;
  occupancy?: string;
  sqft?: string;
  yearBuilt?: string;
  neighborhood?: string;
}
const Properties = () => {
  const location = useLocation();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [filterType, setFilterType] = useState<string>('All');
  const propertiesData: Property[] = [{
    id: 1,
    title: 'Oakridge Apartments',
    location: 'Austin, TX',
    type: 'Residential',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: "Luxury multi-family complex in the heart of Austin's tech corridor with strong rental demand. This 120-unit property features premium amenities including a resort-style pool, fitness center, and co-working spaces.",
    price: '$50,000',
    roi: '14%',
    term: '36 months',
    occupancy: '96%',
    sqft: '98,000',
    yearBuilt: '2018',
    neighborhood: 'Tech District'
  }, {
    id: 2,
    title: 'Riverside Complex',
    location: 'Miami, FL',
    type: 'Mixed-Use',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: "Waterfront property with premium amenities in Miami's fastest growing neighborhood. This mixed-use development includes 80 residential units and 15,000 sq ft of prime retail space on the ground floor.",
    price: '$75,000',
    roi: '12%',
    term: '24 months',
    occupancy: '92%',
    sqft: '120,000',
    yearBuilt: '2020',
    neighborhood: 'Brickell'
  }, {
    id: 3,
    title: 'Sunset Villas',
    location: 'San Diego, CA',
    type: 'Residential',
    status: 'Funded',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: 'Exclusive beachfront villas with panoramic ocean views and exceptional rental history. This luxury development consists of 12 high-end villas, each with private access to the beach and premium finishes throughout.',
    price: '$100,000',
    roi: '16%',
    term: '48 months',
    occupancy: '100%',
    sqft: '45,000',
    yearBuilt: '2019',
    neighborhood: 'La Jolla'
  }, {
    id: 4,
    title: 'Highland Towers',
    location: 'Denver, CO',
    type: 'Residential',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: "Modern high-rise in Denver's downtown with stunning mountain views and premium finishes. This 200-unit property features smart home technology, a rooftop lounge, and is within walking distance to major employers.",
    price: '$65,000',
    roi: '13%',
    term: '30 months',
    occupancy: '94%',
    sqft: '180,000',
    yearBuilt: '2017',
    neighborhood: 'Downtown'
  }, {
    id: 5,
    title: 'Madison Square Office',
    location: 'New York, NY',
    type: 'Commercial',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: "Prime office space in Manhattan's bustling business district. This Class A office building offers 50,000 sq ft of modern workspace with high-end finishes and state-of-the-art technology infrastructure.",
    price: '$120,000',
    roi: '11%',
    term: '60 months',
    occupancy: '88%',
    sqft: '50,000',
    yearBuilt: '2015',
    neighborhood: 'Midtown'
  }, {
    id: 6,
    title: 'Gateway Shopping Center',
    location: 'Atlanta, GA',
    type: 'Commercial',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    description: "Established retail center in Atlanta's rapidly growing northern suburbs. This 85,000 sq ft shopping center is anchored by national tenants with long-term leases and features excellent visibility and access.",
    price: '$85,000',
    roi: '15%',
    term: '42 months',
    occupancy: '97%',
    sqft: '85,000',
    yearBuilt: '2010',
    neighborhood: 'Buckhead'
  }];
  // Handle property selection from carousel
  useEffect(() => {
    if (location.state && location.state.selectedPropertyId) {
      const property = propertiesData.find(p => p.id === location.state.selectedPropertyId);
      if (property) {
        setSelectedProperty(property);
      }
    }
  }, [location.state]);
  const filteredProperties = propertiesData.filter(property => {
    return filterType === 'All' || property.type === filterType;
  });
  return <main>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investment Properties
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Browse our curated selection of high-performing real estate
              investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-amber-50 py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FilterIcon className="h-5 w-5 text-amber-800 mr-2" />
              <span className="text-gray-700 font-medium mr-4">Filter:</span>
              <div className="space-x-2">
                <select className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" value={filterType} onChange={e => setFilterType(e.target.value)}>
                  <option value="All">All Types</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Mixed-Use">Mixed-Use</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredProperties.length} of {propertiesData.length}{' '}
              properties
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {selectedProperty ? <div className="mb-8">
              <button onClick={() => setSelectedProperty(null)} className="mb-6 flex items-center text-amber-800 hover:text-amber-900 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to All Properties
              </button>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${selectedProperty.status === 'Available' ? 'bg-green-100 text-green-800' : selectedProperty.status === 'Funded' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                      {selectedProperty.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedProperty.title}
                      </h2>
                      <div className="flex items-center text-gray-600">
                        <MapPinIcon className="h-5 w-5 mr-1 text-amber-800" />
                        <span>{selectedProperty.location}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedProperty.type}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="block text-2xl font-bold text-amber-900">
                        {selectedProperty.price}
                      </span>
                      <span className="text-gray-600">Minimum Investment</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <PercentIcon className="h-5 w-5 mr-2 text-amber-800" />
                        <span className="font-medium">Expected ROI</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedProperty.roi}
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <ClockIcon className="h-5 w-5 mr-2 text-amber-800" />
                        <span className="font-medium">Investment Term</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedProperty.term}
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <DollarSignIcon className="h-5 w-5 mr-2 text-amber-800" />
                        <span className="font-medium">Current Occupancy</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedProperty.occupancy}
                      </p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Property Details
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {selectedProperty.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <span className="block text-sm text-gray-500">
                          Square Footage
                        </span>
                        <span className="font-medium">
                          {selectedProperty.sqft} sq ft
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Year Built
                        </span>
                        <span className="font-medium">
                          {selectedProperty.yearBuilt}
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Neighborhood
                        </span>
                        <span className="font-medium">
                          {selectedProperty.neighborhood}
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Property Type
                        </span>
                        <span className="font-medium">
                          {selectedProperty.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedProperty(property)}>
                  <div className="relative h-60">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${property.status === 'Available' ? 'bg-green-100 text-green-800' : property.status === 'Funded' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                        {property.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{property.location}</span>
                      <span className="mx-2">•</span>
                      <span>{property.type}</span>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {property.description}
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div>
                        <p className="text-xs text-gray-500">Investment</p>
                        <p className="font-semibold">{property.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">ROI</p>
                        <p className="font-semibold">{property.roi}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Term</p>
                        <p className="font-semibold">{property.term}</p>
                      </div>
                    </div>
                    <button className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium py-2 rounded transition-colors">
                      View Details
                    </button>
                  </div>
                </div>)}
            </div>}
          {!selectedProperty && filteredProperties.length === 0 && <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                No properties match your current filters.
              </p>
              <button onClick={() => {
            setFilterType('All');
          }} className="text-amber-800 hover:text-amber-900 font-medium">
                Clear all filters
              </button>
            </div>}
        </div>
      </section>
    </main>;
};
export default Properties;
import React from 'react';
import { PropertyCard } from './PropertyCard';
export const FeaturedProperties = () => {
  const properties = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Oakridge Apartments',
    location: 'Austin, TX',
    price: '$50,000',
    roi: '14%',
    term: '36 months'
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Riverside Complex',
    location: 'Miami, FL',
    price: '$75,000',
    roi: '12%',
    term: '24 months'
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Sunset Villas',
    location: 'San Diego, CA',
    price: '$100,000',
    roi: '16%',
    term: '48 months'
  }];
  return <section id="properties" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Featured Investment Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our hand-picked selection of high-performing real estate
            investment opportunities across the United States.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => <PropertyCard key={property.id} image={property.image} title={property.title} location={property.location} price={property.price} roi={property.roi} term={property.term} />)}
        </div>
        <div className="text-center mt-10">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-8 rounded-md transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>;
};
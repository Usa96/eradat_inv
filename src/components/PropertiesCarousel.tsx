import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
  roi: string;
  term: string;
}
export const PropertiesCarousel = () => {
  const properties: Property[] = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Durrar Complex',
    location: 'Austin, TX',
    description: 'Luxury multi-family complex in the heart of Austin, a tech corridor, with strong rental demand. The price is $50,000.',
    roi: '14%',
    term: '36 months'
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Domus Residential Complex',
    location: 'Dubai, UAE',
    description: "Waterfront property with premium amenities in Miami's fastest-growing neighborhood. The price is $75,000.",
    roi: '12%',
    term: '24 months'
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Fintas Residential Complex',
    location: 'Fintas, Kuwait',
    description: 'Exclusive beachfront villas with panoramic ocean views and exceptional rental history.',
    roi: '16%',
    term: '48 months'
  }, {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Ibn Khaldoon Complex',
    location: 'Hawally, Kuwait',
    description: 'My modern high-rise in Denver, downtown, offers stunning mountain views and premium finishes. The price is $65,000.',
    roi: '13%',
    term: '30 months'
  }, {
    id: 5,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Farwaniya Residential Complex',
    location: 'Farwaniya, Kuwait',
    description: 'My modern high-rise in Denver, downtown, offers stunning mountain views and premium finishes. The price is $65,000.',
    roi: '13%',
    term: '30 months'
  }, {
    id: 6,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'Bneid Al Gar Medical Center',
    location: 'Hawally, Kuwait',
    description: 'My modern high-rise in Denver, downtown, offers stunning mountain views and premium finishes. The price is $65,000.',
    roi: '13%',
    term: '30 months'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => (prevIndex + 1) % properties.length);
    }
  };
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => (prevIndex - 1 + properties.length) % properties.length);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return <section id="properties" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Featured Investment Properties
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our hand-picked selection of high-performing real estate
            investment opportunities.
          </p>
        </div>
        <div className="relative">
          {/* Carousel container */}
          <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
            {properties.map((property, index) => <div key={property.id} className={`absolute w-full h-full transition-all duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}>
                <div className="relative w-full h-full">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">
                      {property.title}
                    </h3>
                    <p className="text-amber-200 text-lg mb-4">
                      {property.location}
                    </p>
                    <p className="text-gray-200 mb-6 max-w-2xl">
                      {property.description}
                    </p>
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div>
                        <p className="text-amber-200 text-sm">Expected ROI</p>
                        <p className="text-white font-semibold">
                          {property.roi}
                        </p>
                      </div>
                      <div>
                        <p className="text-amber-200 text-sm">Term</p>
                        <p className="text-white font-semibold">
                          {property.term}
                        </p>
                      </div>
                    </div>
                    <Link to={`/properties`} state={{
                  selectedPropertyId: property.id
                }} className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-md transition-colors inline-block">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Navigation arrows */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10" aria-label="Previous property">
            <ChevronLeftIcon size={24} />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10" aria-label="Next property">
            <ChevronRightIcon size={24} />
          </button>
          {/* Indicators */}
          <div className="flex justify-center mt-4">
            {properties.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 mx-1 rounded-full transition-colors ${index === currentIndex ? 'bg-amber-800' : 'bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`}></button>)}
          </div>
        </div>
      </div>
    </section>;
};
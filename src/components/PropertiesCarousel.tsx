import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;

}
export const PropertiesCarousel = () => {
  const properties: Property[] = [{
    id: 1,
    image: '/assets/durrar.jpg',
    title: 'Durrar Complex',
    location: 'Kuwait',
    description: 'A well-established residential complex offering comfortable living spaces in a convenient location.',

  }, {
    id: 2,
    image: '/assets/domus.jpg',
    title: 'Domus 1 & 2',
    location: 'Dubai, UAE',
    description: "Modern residential buildings known for their architectural design and strategic location.",

  }, {
    id: 3,
    image: '/assets/farwaniya.jpg',
    title: 'Farwaniya Residential Building',
    location: 'Farwaniya, Kuwait',
    description: 'Residential property located in the heart of Farwaniya district, ideal for long-term tenants.',

  }, {
    id: 4,
    image: '/assets/fintas.jpg',
    title: 'Fintas Residential Complex',
    location: 'Fintas, Kuwait',
    description: 'A peaceful residential community offering access to coastal areas and nearby amenities.',

  }, {
    id: 5,
    image: '/assets/manar.jpg',
    title: 'Al Manar Complex',
    location: 'Farwaniya, Kuwait',
    description: 'Commercial complex offering office and retail space in a strategic business location.',

  }, {
    id: 6,
    image: '/assets/bneid_al_gar.jpg',
    title: 'Bneid Al Gar Medical Center',
    location: 'Bneid Al Gar, Kuwait',
    description: 'State-of-the-art medical complex serving the Bneid Al Gar area with high-quality healthcare services.',

  }, {
    id: 7,
    image: '/assets/ibn_khaldoon.jpg',
    title: 'Ibn Khaldoon Complex',
    location: 'Hawally, Kuwait',
    description: 'Commercial property offering flexible spaces for businesses in a well-connected urban area.',
    },
];
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
      <div className="w-full">
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
          <div className="relative h-[800px] overflow-hidden rounded-xl shadow-xl">
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
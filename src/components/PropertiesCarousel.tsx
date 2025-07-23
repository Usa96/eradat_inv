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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length)
    }
  }
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + properties.length) % properties.length,
      )
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentIndex])
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentIndex])
  return (
    <section id="properties" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
          {/* Left content side */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-700 tracking-wider">
              PROPERTY SPOTLIGHT
            </h2>
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'}`}
              >
                <p className="text-2xl text-gray-600 mb-4">
                  {property.title}, {property.location}
                </p>
                <p className="text-gray-700 mb-8 max-w-xl leading-relaxed text-lg">
                  {property.description}
                </p>
                <Link
                  to={`/properties`}
                  state={{
                    selectedPropertyId: property.id,
                  }}
                  className="inline-block px-8 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium transition-colors"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          {/* Right image side */}
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Navigation arrows */}
            <div className="absolute bottom-8 left-8 flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors"
                aria-label="Previous property"
              >
                <ChevronLeftIcon size={24} className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors"
                aria-label="Next property"
              >
                <ChevronRightIcon size={24} className="text-white" />
              </button>
            </div>
            {/* Indicators */}
            <div className="absolute bottom-8 right-8 flex space-x-2">
              {properties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
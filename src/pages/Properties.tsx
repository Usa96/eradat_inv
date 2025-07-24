import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  FilterIcon,
  MapPinIcon,
  DollarSignIcon,
  ClockIcon,
  PercentIcon,
  ChevronLeftIcon,
  HomeIcon,
  BuildingIcon,
  LayoutGridIcon,
  SquareIcon,
  CalendarIcon,
  MapIcon,
  ArrowRightIcon,
  HeartIcon,
  ArrowUpRightIcon,
  StarIcon,
  RulerIcon,
} from 'lucide-react'
interface Property {
  id: number
  title: string
  location: string
  type: 'Residential' | 'Commercial' | 'Mixed-Use' | 'Medical'
  image: string
  description: string
  roi: string
  occupancy?: string
  sqft?: string
  yearBuilt?: string
  additionalImages?: string[]
  coordinates?: {
    lat: number,
    lng: number,
  }
}
const Properties = () => {
  const location = useLocation()
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  )
  const [filterType, setFilterType] = useState<string>('All')
  const [savedProperties, setSavedProperties] = useState<number[]>([])
  const propertiesData: Property[] = [

    {
        "id": 1,
        "title": "Durrar Complex",
        "location": "Kuwait",
        "type": "Residential",
        "image": "/assets/durrar.jpg",
        "description": "Block 84, 85, 86, and 87 are situated in lane-1 near the 4th Ring road in Riggae. These four prominent buildings, characterized by their identical and spacious design, grace the skyline of the area. Each block is independently located on its own plot of land. These buildings serve a dual purpose, accommodating both residential and commercial spaces. Each of these buildings follows a consistent layout on every floor and within the individual flats. On the ground floor of each block, there is ample parking space available, complemented by adjacent shops.",
        "roi": '#',
        "occupancy": 'Reggae',
        "sqft": '4000',
        "yearBuilt": 'None',
        "additionalImages": [],
        "coordinates": {
          lat: 29.306113506916127,
          lng: 47.91271908466049,
        },
    },
    {
        "id": 2,
        "title": "Domus 1 & 2",
        "location": "Dubai, UAE",
        "type": "Residential",
        "image": "/assets/domus.jpg",
        "description": "Situated in close proximity to numerous major tourism hubs in Dubai, this cutting-edge staff housing accommodation is strategically positioned to cater to the housing requirements of a diverse range of hospitality companies located within a convenient 25-minute radius from the site. The comprehensive project encompasses an impressive 392,000 square feet of built-up area, with 233,000 square feet designated as rentable space. This substantial space will be designed to accommodate over 2,000 hospitality staff members representing varying employment levels. The core objective of this project is to cultivate a vibrant and cohesive community, fostering connections among hospitality professionals spanning various disciplines and hailing from different hotel brands and hospitality-related enterprises.",
        "roi": 'None',
        "occupancy": 'Dubai',
        "sqft": '134,741',
        "yearBuilt": 'None',
        "additionalImages": [],
        "coordinates": {
          lat: 25.0357803449854, 
          lng: 55.19348708466049,
        },
    },
    {
        "id": 3,
        "title": "Farwaniya Residential Building",
        "location": "Farwaniya, Kuwait",
        "type": "Residential",
        "image": "/assets/farwaniya.jpg",
        "description": "The property, located in Al Farwaniya, is situated within a high-population-density investment area covering 1011 square meters. Positioned between three streets, one of which is a primary road, it benefits from its location in a service-rich area with amenities such as a mosque, parking facilities, and schools. The property itself comprises a basement, a shop, a ground floor, and 40 apartments.",
        "roi": 'None',
        "occupancy": 'Farwaniya',
        "sqft": '1,011',
        "yearBuilt": 'None',
        "additionalImages": [],
        "coordinates": {
          lat: 29.271531279729384,  
          lng: 47.96438091533952,
        },
    },
    {
        "id": 4,
        "title": "Fintas Residential Complex",
        "location": "Fintas, Kuwait",
        "type": "Residential",
        "image": "/assets/fintas.jpg",
        "description": "Pearl Fintas, situated in the Al-Fintas area of Kuwait, is an apartment complex characterized by its five-story cluster design. This residential building, constructed in 1984, occupies a plot area of 3,544 square meters and boasts a built-up area of 5,750 square meters. Pearl Fintas exclusively features studio apartments, each complemented with its own balcony. The complex offers a range of recreational amenities, including a swimming pool and a multi-use court suitable for basketball, tennis, and volleyball enthusiasts. Additionally, ample car parking is available for both residents and visitors. Conveniently accessible from the Fahaheel Expressway, Pearl Fintas is also conveniently located just a short distance from Egaila Beach Park.",
        "roi": 'None',
        "occupancy": 'Fintas',
        "sqft": '3,544',
        "yearBuilt": 'None',
        "additionalImages": [],
        "coordinates": {
          lat: 29.180415646879204,   
          lng: 48.11835354233025,
        },
    },
    {
        "id": 5,
        "title": "Al Manar Complex",
        "location": "Farwaniya, Kuwait",
        "type": "Commercial",
        "image": "/assets/manar.jpg",
        "description": "Situated at Plot No. 22, Commercial Center, Habib Munawar Street in Farwaniya, Al Manar is a 7-story commercial building that includes a basement, ground, and mezzanine floors. The basement, ground, and mezzanine floors house a diverse range of shops, while the upper floors are designated for office spaces. There is ample parking available on the ground level, accessible from the front, back, and sides of the complex.",
        "roi": 'None',
        "occupancy": 'Farwaniya',
        "sqft": '1,002',
        "yearBuilt": 'None',
        "additionalImages": [],
        "coordinates": {
          lat: 29.274099963146625,    
          lng: 47.96385613987848,
        },
    },
    {
        "id": 6,
        "title": "Bneid Al Gar Medical Center",
        "location": "Bneid Al Gar, Kuwait",
        "type": "Medical",
        "image": "/assets/bneid_al_gar.jpg",
        "description": "The building is strategically located near Al Salam Hospital, making it attractive for businesses, especially in the healthcare industry. It consists of a café, a pharmacy, and multiple clinics spread across nine floors. The building features a basement for parking, a ground floor with the café and pharmacy, nine floors dedicated to clinics, and a rooftop area that holds potential for additional utilization. Its proximity to Al Salam Hospital enhances its appeal, attracting businesses in the healthcare sector and creating a medical hub in the area.",
        "roi": 'None',
        "occupancy":'Bneid Al Gar',
        "sqft": '500',
        "yearBuilt": 'None',
        "additionalImages": [],
        "coordinates": {
          lat: 29.36931474850145,     
          lng: 48.00837933864193,
        },
    },
    {
        "id": 7,
        "title": "Ibn Khaldoon Complex",
        "location": "Hawally, Kuwait",
        "type": "Commercial",
        "image": "/assets/ibn_khaldoon.jpg",
        "description": "The Ibn Khaldoun Commercial Complex, situated at Block 39, Plot No. 143 on Ibn Khaldoun Street in Hawally, is a well-known and sizable establishment in the area with a longstanding presence. This complex comprises two towers, one with five storeys and the other with four levels, including a basement, ground floor, mezzanine, and first floor. The commercial section of the building houses numerous shops, and on-site car parking is conveniently available at the ground level, accessible from both the front and rear of the complex.",
        "roi": 'None',
        "occupancy": 'Hawally',
        "sqft": '3,227',
        "yearBuilt": 'None',
        "additionalImages": [],
        "coordinates": {
          lat: 29.339956482863656,      
          lng: 48.00827955092208,
        },
    }
]
  // Handle property selection from carousel
  useEffect(() => {
    if (location.state && location.state.selectedPropertyId) {
      const property = propertiesData.find(
        (p) => p.id === location.state.selectedPropertyId,
      )
      if (property) {
        setSelectedProperty(property)
      }
    }
  }, [location.state])
  const toggleSaveProperty = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setSavedProperties((prev) =>
      prev.includes(id)
        ? prev.filter((propId) => propId !== id)
        : [...prev, id],
    )
  }
  // Filter and sort properties
  const processedProperties = propertiesData
    .filter((property) => {
      return (
        (filterType === 'All' || property.type === filterType)
      )
    })
    
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  // Property Type Icon
  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case 'Residential':
        return <HomeIcon className="h-5 w-5" />
      case 'Commercial':
        return <BuildingIcon className="h-5 w-5" />
      case 'Mixed-Use':
        return <LayoutGridIcon className="h-5 w-5" />
      default:
        return <BuildingIcon className="h-5 w-5" />
    }
  }
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/properties_hero.jpg')" }} // replace with correct path
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Title Text at Bottom Left */}
        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-widest">
            INVESTMENT PROPERTIES 
          </h1>
        </div>
      </section>

      {/* Properties Content */}
      <section className="py-12 bg-gray-50">
        <div className="w-full mx-auto px-4">
          {selectedProperty ? (
            <div className="mb-8">
              <button
                onClick={() => {
                  setSelectedProperty(null)
                  setActiveImageIndex(0)
                }}
                className="mb-6 flex items-center text-amber-800 hover:text-amber-900 font-medium"
              >
                <ChevronLeftIcon className="h-5 w-5 mr-1" />
                Back to All Properties
              </button>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Property Gallery - LARGER IMAGES */}
                <div className="relative">
                  <div className="h-[700px]">
                    <img
                      src={
                        selectedProperty.additionalImages?.[activeImageIndex] ||
                        selectedProperty.image
                      }
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Image Navigation */}
                  {selectedProperty.additionalImages && (
                    <div className="absolute bottom-6 left-0 right-0">
                      <div className="flex justify-center space-x-3">
                        {[
                          selectedProperty.image,
                          ...(selectedProperty.additionalImages || []),
                        ]
                          .slice(0, 4)
                          .map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImageIndex(idx)}
                              className={`w-24 h-16 rounded-md overflow-hidden border-2 ${activeImageIndex === idx ? 'border-amber-500' : 'border-white/50'}`}
                            >
                              <img
                                src={img}
                                alt={`View ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                      </div>
                    </div>
                  )}

                </div>
                <div className="p-8">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div
                          className={`p-1.5 rounded ${selectedProperty.type === 'Residential' ? 'bg-blue-100 text-blue-700' : selectedProperty.type === 'Commercial' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'}`}
                        >
                          {getPropertyTypeIcon(selectedProperty.type)}
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                          {selectedProperty.type}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedProperty.title}
                      </h2>
                      <div className="flex items-center text-gray-600">
                        <MapPinIcon className="h-5 w-5 mr-1 text-amber-800" />
                        <span>{selectedProperty.location}</span>
                      </div>
                    </div>
                  </div>
                  {/* Two-column layout for overview and details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {/* Property Overview - Left Column */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                        Property Overview
                      </h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {selectedProperty.description}
                      </p>
                    </div>
                    {/* Property Details - Right Column with Icons */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-5 text-gray-900">
                        Property Details
                      </h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                            <SquareIcon className="h-6 w-6 text-amber-800" />
                          </div>
                          <div>
                            <span className="block text-sm text-gray-500">
                              Square Footage
                            </span>
                            <span className="font-bold text-xl text-gray-900">
                              {selectedProperty.sqft} sq ft
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                            <DollarSignIcon className="h-6 w-6 text-amber-800" />
                          </div>
                          <div>
                            <span className="block text-sm text-gray-500">
                              Area
                            </span>
                            <span className="font-bold text-xl text-gray-900">
                              {selectedProperty.occupancy}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                            <CalendarIcon className="h-6 w-6 text-amber-800" />
                          </div>
                          <div>
                            <span className="block text-sm text-gray-500">
                              Year Built
                            </span>
                            <span className="font-bold text-xl text-gray-900">
                              {selectedProperty.yearBuilt}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                            {getPropertyTypeIcon(selectedProperty.type)}
                          </div>
                          <div>
                            <span className="block text-sm text-gray-500">
                              Property Type
                            </span>
                            <span className="font-bold text-xl text-gray-900">
                              {selectedProperty.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="mt-10 mb-6">
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                        Property Location
                      </h3>
                      <div className="mt-10 mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    </h3>
                      <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md h-[400px]">
                        <iframe
                          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${selectedProperty.coordinates?.lat},${selectedProperty.coordinates?.lng}&zoom=14`}
                          width="100%"
                          height="100%"
                          style={{
                            border: 0,
                          }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map showing location of ${selectedProperty.title}`}
                        ></iframe>
                      </div>
                    <p className="mt-3 text-gray-600 flex items-center">
                      <MapPinIcon className="h-5 w-5 mr-2 text-amber-800" />
                      {selectedProperty.location} -{' '}
                    </p>
                  </div>
                    </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {processedProperties.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                  <BuildingIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No properties match your criteria
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  <button
                    onClick={() => {
                      setFilterType('All')
                    }}
                    className="text-amber-800 hover:text-amber-900 font-medium bg-amber-50 px-4 py-2 rounded-md"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="space-y-12 w-full">
                  {/* All properties in full-width format */}
                  {processedProperties.map((property, index) => (
                    <div
                      key={property.id}
                      className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                      onClick={() => setSelectedProperty(property)}
                    >
                      <div className="relative">
                        <div className="h-[600px]">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center space-x-2">
                            {index === 0 && (
                              <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                          <div className="flex items-center space-x-2 mb-4">
                            <div
                              className={`p-2 rounded-full ${property.type === 'Residential' ? 'bg-blue-700/80 text-blue-100' : property.type === 'Commercial' ? 'bg-purple-700/80 text-purple-100' : 'bg-amber-700/80 text-amber-100'}`}
                            >
                              {getPropertyTypeIcon(property.type)}
                            </div>
                            <span className="text-sm font-medium text-white/90">
                              {property.type}
                            </span>
                          </div>
                          <h2 className="text-4xl font-bold mb-3">
                            {property.title}
                          </h2>
                          <div className="flex items-center mb-5">
                            <MapPinIcon className="h-5 w-5 mr-2 text-amber-300" />
                            <span className="text-xl text-amber-100">
                              {property.location}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedProperty(property)
                            }}
                            className="bg-amber-800 hover:bg-amber-900 text-white font-medium py-4 px-8 rounded-md transition-colors inline-flex items-center text-lg"
                          >
                            View Property Details
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  )
}
export default Properties

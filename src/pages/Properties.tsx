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
        "description": "A well-established residential complex offering comfortable living spaces in a convenient location.",
        "roi": '#',
        "occupancy": 'None',
        "sqft": 'None',
        "yearBuilt": 'None',
        "additionalImages": []
    },
    {
        "id": 2,
        "title": "Domus 1 & 2",
        "location": "Dubai, UAE",
        "type": "Residential",
        "image": "/assets/domus.jpg",
        "description": "Modern residential buildings known for their architectural design and strategic location.",
        "roi": 'None',
        "occupancy": 'None',
        "sqft": 'None',
        "yearBuilt": 'None',
        "additionalImages": []
    },
    {
        "id": 3,
        "title": "Farwaniya Residential Building",
        "location": "Farwaniya, Kuwait",
        "type": "Residential",
        "image": "/assets/farwaniya.jpg",
        "description": "Residential property located in the heart of Farwaniya district, ideal for long-term tenants.",
        "roi": 'None',
        "occupancy": 'None',
        "sqft": 'None',
        "yearBuilt": 'None',
        "additionalImages": []
    },
    {
        "id": 4,
        "title": "Fintas Residential Complex",
        "location": "Fintas, Kuwait",
        "type": "Residential",
        "image": "/assets/fintas.jpg",
        "description": "A peaceful residential community offering access to coastal areas and nearby amenities.",
        "roi": 'None',
        "occupancy": 'None',
        "sqft": 'None',
        "yearBuilt": 'None',
        "additionalImages": []
    },
    {
        "id": 5,
        "title": "Al Manar Complex",
        "location": "Farwaniya, Kuwait",
        "type": "Commercial",
        "image": "/assets/manar.jpg",
        "description": "Commercial complex offering office and retail space in a strategic business location.",
        "roi": 'None',
        "occupancy": 'None',
        "sqft": 'None',
        "yearBuilt": 'None',
        "additionalImages": []
    },
    {
        "id": 6,
        "title": "Bneid Al Gar Medical Center",
        "location": "Bneid Al Gar, Kuwait",
        "type": "Medical",
        "image": "/assets/bneid_al_gar.jpg",
        "description": "State-of-the-art medical complex serving the Bneid Al Gar area with high-quality healthcare services.",
        "roi": 'None',
        "occupancy":' None',
        "sqft": 'None',
        "yearBuilt": 'None',
        "additionalImages": []
    },
    {
        "id": 7,
        "title": "Ibn Khaldoon Complex",
        "location": "Hawally, Kuwait",
        "type": "Commercial",
        "image": "/assets/ibn_khaldoon.jpg",
        "description": "Commercial property offering flexible spaces for businesses in a well-connected urban area.",
        "roi": 'None',
        "occupancy": 'None',
        "sqft": 'None',
        "yearBuilt": 'None',
        "additionalImages": []
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
      <section className="relative bg-black text-white pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
            alt="Real estate properties"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
      <section className="sticky top-16 z-20 bg-white py-4 shadow-md border-b border-gray-200">
        <div className="w-full px-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <FilterIcon className="h-5 w-5 text-amber-800 mr-2" />
                <span className="text-gray-700 font-medium hidden md:inline">
                  Filter:
                </span>
              </div>
              <select
                className="bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Mixed-Use">Mixed-Use</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600 hidden md:block">
                Showing{' '}
                {processedProperties.length > 6
                  ? 6
                  : processedProperties.length}{' '}
                of {propertiesData.length} properties
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Content */}
      <section className="py-12 bg-gray-50">
        <div className="w-full px-0">
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
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-gray-50 p-6 rounded-lg">
                    <div>
                      <div className="flex items-center mb-2">
                        <PercentIcon className="h-5 w-5 mr-2 text-amber-800" />
                        <span className="text-gray-700 font-medium">
                          Expected ROI
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedProperty.roi}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <SquareIcon className="h-5 w-5 mr-2 text-amber-800" />
                        <span className="text-gray-700 font-medium">
                          Square Footage
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedProperty.sqft} sq ft
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <DollarSignIcon className="h-5 w-5 mr-2 text-amber-800" />
                        <span className="text-gray-700 font-medium">
                          Occupancy
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedProperty.occupancy}
                      </p>
                    </div>
                  </div>
                  {/* Property Details */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      Property Overview
                    </h3>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      {selectedProperty.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
                      <div>
                        <span className="block text-sm text-gray-500 mb-1">
                          Year Built
                        </span>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 text-amber-800 mr-2" />
                          <span className="font-medium text-gray-900">
                            {selectedProperty.yearBuilt}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="block text-sm text-gray-500 mb-1">
                          Property Type
                        </span>
                        <div className="flex items-center">
                          {getPropertyTypeIcon(selectedProperty.type)}
                          <span className="font-medium text-gray-900 ml-2">
                            {selectedProperty.type}
                          </span>
                        </div>
                      </div>
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
                  {processedProperties.slice(0, 6).map((property, index) => (
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
                        <button
                          onClick={(e) => toggleSaveProperty(property.id, e)}
                          className={`absolute top-4 right-4 p-2 rounded-full ${savedProperties.includes(property.id) ? 'bg-amber-100 text-amber-800' : 'bg-white/80 text-gray-600 hover:text-amber-800'}`}
                          aria-label={
                            savedProperties.includes(property.id)
                              ? 'Unsave property'
                              : 'Save property'
                          }
                        >
                          <HeartIcon
                            className="h-5 w-5"
                            fill={
                              savedProperties.includes(property.id)
                                ? 'currentColor'
                                : 'none'
                            }
                          />
                        </button>
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
                          <p className="text-gray-200 mb-8 max-w-3xl text-lg">
                            {property.description}
                          </p>
                          <div className="flex flex-wrap gap-8 mb-8">
                            <div>
                              <p className="text-amber-200 text-sm mb-1">
                                Minimum Investment
                              </p>
                              
                            </div>
                            <div>
                              <p className="text-amber-200 text-sm mb-1">
                                Expected ROI
                              </p>
                              <p className="text-2xl font-bold text-amber-300">
                                {property.roi}
                              </p>
                            </div>
                            <div>
                              <p className="text-amber-200 text-sm mb-1">
                                Investment Term
                              </p>

                            </div>
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

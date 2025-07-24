import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ShareIcon,
  BookmarkIcon,
  ArrowUpRightIcon,
  PlayCircleIcon,
  ArrowRightIcon,
  VideoIcon,
  MicIcon,
} from 'lucide-react'
import {
  mediaItems,
  getTypeIcon,
  getRelatedMedia,
} from '../utils/mediaData.tsx'
import type { MediaItem } from '../utils/mediaData.tsx'
const Media = () => {
  const location = useLocation()
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  // Handle selection from URL state (when coming from LatestMedia component)
  useEffect(() => {
    if (location.state && location.state.selectedMediaId) {
      const media = mediaItems.find(
        (m) => m.id === location.state.selectedMediaId,
      )
      if (media) {
        setSelectedMedia(media)
      }
    }
  }, [location.state])
const filteredMedia = [...mediaItems]
  .filter((item) => activeFilter === 'all' || item.type === activeFilter)
  .sort((a, b) => b.id - a.id) // Or use date sort if preferred

  const featuredMedia = mediaItems.filter((item) => item.featured)
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/media_title.jpg')" }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Title Text at Bottom Left */}
        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-widest">
            LATEST MEDIA 
          </h1>
        </div>
      </section>

      {selectedMedia ? (
        // Individual Media Item View
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setSelectedMedia(null)}
              className="mb-6 flex items-center text-amber-800 hover:text-amber-900 font-medium"
            >
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Back to All Media
            </button>
            <div className="max-w-4xl mx-auto">
              {/* Media Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mr-3 ${selectedMedia.type === 'article' ? 'bg-blue-100 text-blue-800' : selectedMedia.type === 'video' ? 'bg-red-100 text-red-800' : selectedMedia.type === 'podcast' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}
                  >
                    {getTypeIcon(selectedMedia.type)}
                    <span className="ml-1 capitalize">
                      {selectedMedia.type.replace('-', ' ')}
                    </span>
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{selectedMedia.date}</span>
                  </div>
                  {selectedMedia.duration && (
                    <div className="flex items-center text-sm text-gray-500 ml-3">
                      <span>Duration: {selectedMedia.duration}</span>
                    </div>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {selectedMedia.title}
                </h1>
                {selectedMedia.author && (
                  <p className="text-gray-600 mb-4">
                    By {selectedMedia.author}
                  </p>
                )}
                <div className="flex items-center space-x-3 mb-6">
                  <button className="inline-flex items-center text-gray-600 hover:text-amber-800">
                    <ShareIcon className="h-5 w-5 mr-1" />
                    Share
                  </button>
                  <button className="inline-flex items-center text-gray-600 hover:text-amber-800">
                    <BookmarkIcon className="h-5 w-5 mr-1" />
                    Save
                  </button>
                </div>
              </div>
              {/* Media Image */}
              <div className="mb-8">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    className="w-full h-[400px] object-cover"
                  />
                  {selectedMedia.type === 'video' && (
                    <a
                      href={selectedMedia.videoUrl}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-opacity"
                    >
                      <PlayCircleIcon className="h-20 w-20 text-white opacity-80 hover:opacity-100 transition-opacity" />
                    </a>
                  )}
                </div>
              </div>
              {/* Media Content */}
              <div className="prose prose-lg max-w-none mb-12">
                {selectedMedia.content
                  ?.split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700">
                      {paragraph}
                    </p>
                  ))}
              </div>
              {/* Media Player (for video/podcast) */}
              {(selectedMedia.type === 'video' ||
                selectedMedia.type === 'podcast') && (
                <div className="mb-12 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    {selectedMedia.type === 'video'
                      ? 'Watch Video'
                      : 'Listen to Podcast'}
                  </h3>
                </div>
              )}
              {/* Related Media */}
              {selectedMedia.relatedItems &&
                selectedMedia.relatedItems.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                      Related Media
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {getRelatedMedia(selectedMedia.relatedItems).map(
                        (item) => (
                          <div
                            key={item.id}
                            className="flex cursor-pointer"
                            onClick={() => {
                              setSelectedMedia(item)
                              window.scrollTo(0, 0)
                            }}
                          >
                            <div className="w-24 h-24 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="flex items-center mb-1">
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${item.type === 'article' ? 'bg-blue-100 text-blue-800' : item.type === 'video' ? 'bg-red-100 text-red-800' : item.type === 'podcast' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}
                                >
                                  {item.type.charAt(0).toUpperCase() +
                                    item.type.slice(1).replace('-', ' ')}
                                </span>
                              </div>
                              <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {item.date}
                              </p>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </section>
      ) : (
        // Media Listing View
        <>
          {/* Featured Media */}
          {featuredMedia.length > 0 && (
            <section className="py-12 bg-amber-50">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-gray-900">
                  Featured Coverage
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredMedia.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row cursor-pointer"
                      onClick={() => setSelectedMedia(item)}
                    >
                      <div className="md:w-2/5 h-64 md:h-auto">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center mb-3">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mr-2 ${item.type === 'article' ? 'bg-blue-100 text-blue-800' : item.type === 'video' ? 'bg-red-100 text-red-800' : item.type === 'podcast' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}
                            >
                              {getTypeIcon(item.type)}
                              <span className="ml-1 capitalize">
                                {item.type.replace('-', ' ')}
                              </span>
                            </span>
                            <div className="flex items-center text-sm text-gray-500">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>{item.date}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-900">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between">
                          <button className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium">
                            Read More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
          {/* Media Filters */}
          <section className="py-6 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-4">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-black text-amber-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveFilter('article')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'article' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {getTypeIcon('article')}
                  <span className="ml-1">Articles</span>
                </button>
                <button
                  onClick={() => setActiveFilter('press-release')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'press-release' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {getTypeIcon('press-release')}
                  <span className="ml-1">Press Releases</span>
                </button>
              </div>
            </div>
          </section>
          {/* Media Grid */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              {filteredMedia.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredMedia.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedMedia(item)}
                    >
                      <div className="relative h-[300px] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.type === 'article' ? 'bg-blue-100 text-blue-800' : item.type === 'video' ? 'bg-red-100 text-red-800' : item.type === 'podcast' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}
                          >
                            {getTypeIcon(item.type)}
                            <span className="ml-1 capitalize">
                              {item.type.replace('-', ' ')}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3 text-sm text-gray-500">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{item.date}</span>
                          <span className="mx-2">•</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">
                          {item.title}
                        </h3>
                        <button className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium">
                          Read More
                          <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-4">
                    No media items match your criteria.
                  </p>
                  <button
                    onClick={() => setActiveFilter('all')}
                    className="text-amber-800 hover:text-amber-900 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </main>
  )
}
export default Media
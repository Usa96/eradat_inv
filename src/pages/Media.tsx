import React, { useState } from 'react'
import {
  CalendarIcon,
  ExternalLinkIcon,
  NewspaperIcon,
  VideoIcon,
  MicIcon,
  ChevronLeftIcon,
  ShareIcon,
  BookmarkIcon,
  ArrowUpRightIcon,
  PlayCircleIcon,
  ArrowRightIcon,
} from 'lucide-react'
interface MediaItem {
  id: number
  image: string
  title: string
  date: string
  excerpt: string
  content?: string
  source: string
  author?: string
  link: string
  type: 'article' | 'video' | 'podcast' | 'press-release'
  featured?: boolean
  duration?: string
  videoUrl?: string
  podcastUrl?: string
  relatedItems?: number[]
}
const Media = () => {
  const mediaItems: MediaItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1770&q=80',
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'May 15, 2023',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    source: 'Lorem News Daily',
    author: 'John Lorem',
    link: '#',
    type: 'press-release',
    featured: true,
    relatedItems: [2, 3],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&fit=crop&w=1770&q=80',
    title: 'Consectetur Adipiscing Elit Interview',
    date: 'April 3, 2023',
    excerpt: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    source: 'Dolor Sit Magazine',
    author: 'Anna Ipsum',
    link: '#',
    type: 'article',
    relatedItems: [1, 7],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1770&q=80',
    title: 'Excepteur Sint Occaecat Cupidatat',
    date: 'March 12, 2023',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.',
    source: 'Velit Times',
    author: 'Marcus Dolorem',
    link: '#',
    type: 'press-release',
    relatedItems: [1, 4],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1770&q=80',
    title: 'Sed Do Eiusmod Tempor Incididunt',
    date: 'February 28, 2023',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    source: 'Adipiscing Insights',
    author: 'Emily Lorem',
    link: '#',
    type: 'article',
    relatedItems: [2, 6],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1524758870432-af57e54afa26?auto=format&fit=crop&w=1770&q=80',
    title: 'Ut Labore Et Dolore Magna',
    date: 'February 15, 2023',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    source: 'Video Ipsum',
    author: 'James Ipsum',
    link: '#',
    type: 'video',
    duration: '12:45',
    videoUrl: '#',
    relatedItems: [1, 8],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1770&q=80',
    title: 'Voluptate Velit Esse Cillum',
    date: 'January 20, 2023',
    excerpt: 'Tempor incididunt ut labore et dolore magna aliqua.',
    content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.',
    source: 'Podcast Lorem',
    author: 'John Ipsum',
    link: '#',
    type: 'podcast',
    duration: '47:32',
    podcastUrl: '#',
    relatedItems: [2, 4],
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=1773&q=80',
    title: 'Culpa Qui Officia Deserunt Mollit',
    date: 'January 5, 2023',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.',
    source: 'Tech Ipsum Review',
    author: 'Dolor Team',
    link: '#',
    type: 'press-release',
    featured: true,
    relatedItems: [2, 8],
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&w=1770&q=80',
    title: 'Investor Briefing Lorem Q4',
    date: 'December 15, 2022',
    excerpt: 'Sit amet, consectetur adipiscing elit. Quisque rutrum.',
    content: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    source: 'Investor Ipsum',
    author: 'Lorem Team',
    link: '#',
    type: 'video',
    duration: '38:22',
    videoUrl: '#',
    relatedItems: [4, 6],
  },
];

  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const filteredMedia = mediaItems.filter((item) => {
    return activeFilter === 'all' || item.type === activeFilter
  })
  const featuredMedia = mediaItems.filter((item) => item.featured)
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <NewspaperIcon className="h-4 w-4" />
      case 'video':
        return <VideoIcon className="h-4 w-4" />
      case 'podcast':
        return <MicIcon className="h-4 w-4" />
      case 'press-release':
        return <ExternalLinkIcon className="h-4 w-4" />
      default:
        return <NewspaperIcon className="h-4 w-4" />
    }
  }
  const getRelatedMedia = (ids: number[] = []) => {
    return mediaItems.filter((item) => ids.includes(item.id))
  }
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/media_title.jpg')" }} // replace with correct path
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
                  {(selectedMedia.type === 'article' ||
                    selectedMedia.type === 'press-release') && (
                    <a
                      href={selectedMedia.link}
                      className="inline-flex items-center text-amber-800 hover:text-amber-900"
                    >
                      <ArrowUpRightIcon className="h-5 w-5 mr-1" />
                      Original Source
                    </a>
                  )}
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
                <p className="text-sm text-gray-500 mt-2">
                  Source: {selectedMedia.source}
                </p>
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
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
                    <div className="text-center p-8">
                      {selectedMedia.type === 'video' ? (
                        <>
                          <VideoIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">
                            Video player would appear here
                          </p>
                          <a
                            href={selectedMedia.videoUrl}
                            className="mt-4 inline-flex items-center text-amber-800 hover:text-amber-900 font-medium"
                          >
                            Watch on {selectedMedia.source}
                            <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                          </a>
                        </>
                      ) : (
                        <>
                          <MicIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">
                            Audio player would appear here
                          </p>
                          <a
                            href={selectedMedia.podcastUrl}
                            className="mt-4 inline-flex items-center text-amber-800 hover:text-amber-900 font-medium"
                          >
                            Listen on {selectedMedia.source}
                            <ArrowUpRightIcon className="ml-1 h-4 w-4" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
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
                          <p className="text-gray-700 mb-4">{item.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">
                            {item.source}
                          </span>
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
                  <NewspaperIcon className="h-4 w-4 mr-1" />
                  Articles
                </button>
                <button
                  onClick={() => setActiveFilter('video')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'video' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <VideoIcon className="h-4 w-4 mr-1" />
                  Videos
                </button>
                <button
                  onClick={() => setActiveFilter('podcast')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'podcast' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <MicIcon className="h-4 w-4 mr-1" />
                  Podcasts
                </button>
                <button
                  onClick={() => setActiveFilter('press-release')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'press-release' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <ExternalLinkIcon className="h-4 w-4 mr-1" />
                  Press Releases
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
                      <div className="relative h-48 overflow-hidden">
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
                          <span>{item.source}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{item.excerpt}</p>
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

import React, { useState } from 'react';
import { CalendarIcon, ExternalLinkIcon, NewspaperIcon, VideoIcon, MicIcon } from 'lucide-react';
interface MediaItem {
  id: number;
  image: string;
  title: string;
  date: string;
  excerpt: string;
  source: string;
  link: string;
  type: 'article' | 'video' | 'podcast' | 'press-release';
  featured?: boolean;
}
const Media = () => {
  const mediaItems: MediaItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'May 15, 2023',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi vel orci gravida, sed porttitor libero tristique.',
    source: 'Lorem Weekly',
    link: '#',
    type: 'press-release',
    featured: true
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    title: 'Ut Enim Ad Minim Veniam',
    date: 'April 3, 2023',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    source: 'Investment Ipsum',
    link: '#',
    type: 'article'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    title: 'Sed Do Eiusmod Tempor Incididunt',
    date: 'March 12, 2023',
    excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    source: 'Finance Lorem',
    link: '#',
    type: 'press-release'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    title: 'Quis Nostrud Exercitation Ullamco',
    date: 'February 28, 2023',
    excerpt: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    source: 'Lorem Blog',
    link: '#',
    type: 'article'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    title: 'Video: Lorem Ipsum in Action',
    date: 'February 15, 2023',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    source: 'Lorem YouTube',
    link: '#',
    type: 'video'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    title: 'Podcast: Consectetur Adipiscing Elit',
    date: 'January 20, 2023',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    source: 'The Lorem Podcast',
    link: '#',
    type: 'podcast'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1773&q=80',
    title: 'Lorem Ipsum Recognized Globally',
    date: 'January 5, 2023',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus.',
    source: 'Tech Review Ipsum',
    link: '#',
    type: 'press-release',
    featured: true
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    title: 'Video: Q4 Lorem Briefing',
    date: 'December 15, 2022',
    excerpt: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante.',
    source: 'Lorem Investor Relations',
    link: '#',
    type: 'video'
  }
];

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const filteredMedia = mediaItems.filter(item => {
    return activeFilter === 'all' || item.type === activeFilter;
  });
  const featuredMedia = mediaItems.filter(item => item.featured);
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <NewspaperIcon className="h-4 w-4" />;
      case 'video':
        return <VideoIcon className="h-4 w-4" />;
      case 'podcast':
        return <MicIcon className="h-4 w-4" />;
      case 'press-release':
        return <ExternalLinkIcon className="h-4 w-4" />;
      default:
        return <NewspaperIcon className="h-4 w-4" />;
    }
  };
  return <main>
      {/* Hero Section */}
      <section className="bg-amber-900 text-white pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Media
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Stay updated with the latest news, insights, and announcements
              from ERADAT.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Media */}
      {featuredMedia.length > 0 && <section className="py-12 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Featured Coverage
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredMedia.map(item => <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-64 md:h-auto">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mr-2 ${item.type === 'article' ? 'bg-blue-100 text-blue-800' : item.type === 'video' ? 'bg-red-100 text-red-800' : item.type === 'podcast' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
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
                      <a href={item.link} className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>}
      {/* Media Filters */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-4">
            <button onClick={() => setActiveFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-black text-amber-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              All
            </button>
            <button onClick={() => setActiveFilter('article')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'article' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <NewspaperIcon className="h-4 w-4 mr-1" />
              Articles
            </button>
            <button onClick={() => setActiveFilter('video')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'video' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <VideoIcon className="h-4 w-4 mr-1" />
              Videos
            </button>
            <button onClick={() => setActiveFilter('podcast')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'podcast' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <MicIcon className="h-4 w-4 mr-1" />
              Podcasts
            </button>
            <button onClick={() => setActiveFilter('press-release')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${activeFilter === 'press-release' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <ExternalLinkIcon className="h-4 w-4 mr-1" />
              Press Releases
            </button>
          </div>
        </div>
      </section>
      {/* Media Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredMedia.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map(item => <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.type === 'article' ? 'bg-blue-100 text-blue-800' : item.type === 'video' ? 'bg-red-100 text-red-800' : item.type === 'podcast' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}`}>
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
                    <a href={item.link} className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium">
                      Read Full Article
                      <ExternalLinkIcon className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>)}
            </div> : <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                No media items match your criteria.
              </p>
              <button onClick={() => setActiveFilter('all')} className="text-amber-800 hover:text-amber-900 font-medium">
                Clear all filters
              </button>
            </div>}
        </div>
      </section>
    </main>;
};
export default Media;
import React from 'react';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react';
interface MediaItem {
  id: number;
  image: string;
  title: string;
  date: string;
  excerpt: string;
  source: string;
  link: string;
}
export const LatestMedia = () => {
  const mediaItems: MediaItem[] = [
  {
    id: 1,
    image: '',
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'May 15, 2023',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at convallis cursus, magna nulla blandit justo.',
    source: 'Lorem Weekly',
    link: '#'
  },
  {
    id: 2,
    image: '',
    title: 'Consectetur Adipiscing Elit',
    date: 'April 3, 2023',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    source: 'Investment Ipsum',
    link: '#'
  },
  {
    id: 3,
    image: '',
    title: 'Sed Do Eiusmod Tempor Incididunt',
    date: 'March 12, 2023',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    source: 'Finance Lorem',
    link: '#'
  }
];

  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Latest Media
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Stay updated with the latest news, market insights, and company
            announcements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map(item => <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
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
        </div>
        <div className="text-center mt-10">
          <a
            href="/media"
            className="inline-block bg-black hover:bg-gray-900 text-amber-100 font-medium py-3 px-8 rounded-md transition-colors"
          >
            View All News
          </a>
        </div>
      </div>
    </section>;
};
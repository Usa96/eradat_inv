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
  const mediaItems: MediaItem[] = [{
    id: 1,
    image: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'PrimeInvest Expands Portfolio with $50M Acquisition in Austin',
    date: 'May 15, 2023',
    excerpt: "PrimeInvest announces the acquisition of a premium multi-family complex in Austin's tech corridor, expanding its Texas portfolio.",
    source: 'Real Estate Weekly',
    link: '#'
  }, {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'CEO Interview: The Future of Real Estate Crowdfunding',
    date: 'April 3, 2023',
    excerpt: 'Our CEO discusses how technology is democratizing access to premium real estate investments and what it means for investors.',
    source: 'Investment Today',
    link: '#'
  }, {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    title: 'PrimeInvest Delivers 16% Returns on Miami Property Exit',
    date: 'March 12, 2023',
    excerpt: 'Investors celebrate as PrimeInvest completes successful exit of Miami waterfront property, delivering returns above projections.',
    source: 'Finance Insider',
    link: '#'
  }];
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
          <button className="bg-black hover:bg-gray-900 text-amber-100 font-medium py-3 px-8 rounded-md transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>;
};
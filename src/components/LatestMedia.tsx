import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react'
import { getLatestMediaItems } from '../utils/mediaData.tsx'
export const LatestMedia = () => {
  const mediaItems = getLatestMediaItems(3)
  const { t, i18n } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {t('Latest-Media')}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-xl">
            {t('Latest-Media-subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
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
                <Link
                  to={{
                    pathname: '/media',
                  }}
                  className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium"
                >
                  {t('Read-Full-Article')}
                  <ExternalLinkIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/media"
            className="bg-black hover:bg-gray-900 text-amber-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            {t('View-All-News')}
          </Link>
        </div>
      </div>
    </section>
  )
}

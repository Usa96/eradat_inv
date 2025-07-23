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
  content?: string
  type: 'article' | 'video' | 'podcast' | 'press-release'
  relatedItems?: number[]
}
const Media = () => {
  const mediaItems: MediaItem[] = [
  {
    id: 1,
    image: '/assets/media/Media 1.jpg',
    title: 'Real Estate Swap Approval: Sanam Real Estate Company and Fanan Real Estate Company',
    date: 'March 16, 2023',
    content: 'Sanam Real Estate Company has approved a real estate swap with its subsidiary, Fanan Real Estate Company K.S.C.C. The swap involves selling two properties in Bneid Al-Qar and Al-Farwaniya to Fanan Real Estate Company at a book value of KD 4,940,000. Additionally, the concession agreement rights of a land in Dubai, United Arab Emirates, will be transferred from Fanan Real Estate Company to a subsidiary of Sanam Real Estate Company, with a book value of KD 1,251,056',
    type: 'press-release',
    relatedItems: [2, 3],
  },
  {
    id: 2,
    image: '/assets/media/Media 2.jpg',
    title: 'Board-approved Property Exchange: Sanam Real Estate and Fanan Real Estate Company',
    date: 'May 11, 2023',
    content: 'The Board of Directors has approved the report of an independent asset assessor approved by the Capital Markets Authority regarding the exchange of properties with the subsidiary, Fanan Real Estate Company K.S.C.C. The details of the property swap are as follows: Selling the Property in Farwaniya: Sanam Real Estate Company will sell the property in Farwaniya to its subsidiary, Fanan Real Estate, at a book value of KD 2,240,000. Transferring the Right of Use of a Land in Dubai: The subsidiary company, Fanan Real Estate, will transfer the right of use of a land in Dubai, United Arab Emirates, to a subsidiary of Sanam Real Estate Company. The book value of this land is KD 1,251,056. In-Kind Increase of Subsidiarys Capital: The Board of Directors has also approved the in-kind increase of its subsidiarys capital by incorporating the property owned by Sanam Real Estate Company in Bneid Al Gar area at a book value of KD 2,700,000. These transactions reflect the strategic real estate exchange between Sanam Real Estate Company and its subsidiary, Fanan Real Estate Company, in order to optimize the utilization of assets and enhance the overall value of the companies involved.',
    type: 'article',
    relatedItems: [1, 7],
  },
  {
    id: 3,
    image: '/assets/media/Media 3.jpg',
    title: 'Decisions of the Extraordinary GA: Capital Increase, Name Change, and Sharia Compliance',
    date: 'June 7, 2023',
    content: 'The subsidiary companys extraordinary general assembly convened on 07/06/2023, where the following agenda items were unanimously approved: Capital Increase: The companys capital will be raised from 4,300,000 KWD to 6,798,697 KWD through an in-kind capital infusion. Name Change: The company will be rebranded from Fanan Real Estate Company to Eradat International Real Estate Company. Sharia Compliance: It was agreed that the company will operate in accordance with the principles of Islamic Sharia law. Profit Distribution: The ordinary general assembly, subject to the Board of Directors proposal, may approve the periodic distribution of profits.',
    type: 'press-release',
    relatedItems: [1, 4],
  },
  {
    id: 4,
    image: '/assets/media/13_July_2023.png',
    title: 'Formation of the Board of Directors of ERADAT International Real Estate Company',
    date: 'July 13, 2023',
    content: 'The Ordinary General Assembly of ERADAT International Real Estate Company was held on Thursday 13/07/2023 at the companys headquarters and approved the acceptance of the resignation submitted by the members of the Board of Directors in full and the election of the members of the Board of Directors for the next three years as follows: 1. Dr. Sulaiman Tareq Al-Abduljader – Chairman. 2. Mr. Waleed Al-Sumait – Vice Chairman. 3. Mr. Fawaz Al-Roudan – Independent Board Member. 4. Mr. Saad Al-Muneefi – Board Member. 5. Mr. Bader Al Hajeri – Board Member and CEO. The members of the new Board of Directors have extensive experience in various fields of economic work and a great ability to manage investment files and develop strategic plans. ERADAT International Real Estate Company hopes that the selection of the new Board of Directors is the beginning of a new era of achievements and ambitions to achieve the greatest benefit for shareholders.',
    type: 'article',
    relatedItems: [2, 6],
  },
  {
    id: 5,
    image: '/assets/media/9_August_1.png',
    title: 'Sanams Board of Directors Approves an Initial Partnership with an In-Kind Shares in the Capital of the Subsidiary "ERADAT".',
    date: 'August 9, 2023',
    content: 'On Wednesday 09/08/2023, the Board of Directors of Sanam Real Estate Company reached a preliminary agreement through its subsidiary “ERADAT International Real Estate Company K.S.C.C” with a public shareholding real estate company, to increase the capital of Eradat International Real Estate Company to reach KD 13,163,000. (The current capital of Eradat International Real Estate Company is 6,798,697 KD, and the accumulated losses will be amortized to bring the capital to 4,940,000 KD). Provided that the aforementioned capital increase be in-kind with a value of KD 8,223,000, representing 62.47% of the company’s capital (the in-kind increase consists of real estate with a total value of KD 49,463,000 and a net value of KD 8,223,000 after excluding the bank facilities granted with its guarantee). Thus, the share of Sanam Real Estate Company becomes 37.53%, equivalent to KD 4,940,000 of the capital, afterwards becoming an associate company.',
    type: 'video',
    relatedItems: [1, 8],
  },
  {
    id: 6,
    image: '/assets/media/9_August_2.png',
    title: 'Aqarat and Sanam Real Estate Enters into a Strategic Partnership in "ERADAT"',
    date: 'August 9, 2023',
    content: 'Aqarat - Kuwait Real Estate Company and Sanam Real Estate Company announced the signing of a preliminary agreement to enter a strategic partnership. This collaboration aims to introduce unique real estate products through a company partnership that is shariah compliant, named ERADAT International Real Estate Company. The partnership will result in a company with a diversified real estate portfolio, offering rewarding returns and enabling the distribution of periodic dividends to shareholders. Notably, this marks the first collaboration between these two entities, with a primary objective of delivering innovative and sustainable solutions within the realm of real estate investment. Following the signing of the preliminary agreement, the capital of ERADAT is poised to exceed KD 13 million. Aqarat - Company will be holding a majority share of 62.5%, while Sanam Real Estate Company will hold a share of 37.5%, after the completion of the strategic partnership procedures.',
    type: 'podcast',
    relatedItems: [2, 4],
  },
  {
    id: 7,
    image: '/assets/media/9_may-2024.webp',
    title: 'ERADAT International Real Estate Company convenes Ordinary General Assembly Meetings for 2023',
    date: 'May 9, 2024',
    content: 'The Ordinary General Assembly of Eradat International Real Estate Company was convened at 12:00 PM on Thursday, 09/05/2024, at the Company’s headquarters, in the presence of the following: Shareholders representing 131,629,267 shares out of the Company’s total capital of 131,630,000 shares, thereby achieving a quorum of 99.9994%. Dr. Sulaiman Tareq Al Abduljader – Chairman of the Board of Directors. Mr. Abdulaziz Nasser Jabr – Representative of Mr. Abdullatif Al Aiban from Al Qatami, Al Aiban & Partners (Grant Thornton) – External Auditor. Dr. Mohammad Abdulrahman Al Sharafa – Member of the Sharia Supervisory Board. Dr. Sulaiman Tareq Al Abduljader, Chairman of the Board, opened the meeting by welcoming the shareholders and presented the agenda as follows: First: Discussion and approval of the Board of Directors’ report for the financial year ended 31/12/2023. Second: Discussion and approval of the external auditor’s report for the financial year ended 31/12/2023. Third: Discussion and approval of the Sharia Supervisory Board’s report for the financial year ended 31/12/2023. Fourth: Discussion and approval of the financial statements of the Company for the financial year ended 31/12/2023. Fifth: Review of any violations and penalties recorded by regulatory authorities (financial or otherwise) for the financial year ended 31/12/2023. The Chairman of the Board confirmed that no penalties or violations were recorded against the Company during the year 2023. Sixth: Discussion of the Board of Directors’ recommendation not to distribute dividends to shareholders for the financial year ended 31/12/2023. Seventh: Discussion of the non-distribution of remuneration to the members of the Board of Directors for the financial year ended 31/12/2023. Eighth: Review of related party transactions for the financial year ended 31/12/2023 and authorization of the Board of Directors to enter into related party transactions until the next General Assembly meeting for the financial year ending 31/12/2024. Ninth: Discussion and approval of discharging the members of the Board of Directors from any liabilities regarding legal, financial, and administrative matters related to the management of the Company for the financial year ended 31/12/2023. Tenth: Appointment or reappointment of the external auditor for the financial year ending 31/12/2024 and authorizing the Board of Directors to determine their fees. The Ordinary General Assembly resolved to reappoint Mr. Abdullatif Al Aiban – License No. (94A) from Al Qatami, Al Aiban & Partners (Grant Thornton) as the Company’s auditor for the financial year ending 31/12/2024 and authorized the Board of Directors to determine the auditor’s fees. Eleventh: Appointment or reappointment of the Sharia Supervisory Board for the financial year ending 31/12/2024 and authorizing the Board of Directors to determine their fees. The Ordinary General Assembly resolved to reappoint the following esteemed scholars as members of the Sharia Supervisory Board for the financial year ending 31/12/2024 and authorized the Board of Directors to determine their fees: Dr. Hamad Yousif Al Mazroue Dr. Abdulrahman Mohammad Al Baloul Dr. Mohammad Abdulrahman Al Sharaf The meeting concluded at 12:15 PM.',
    type: 'press-release',
    relatedItems: [2, 8],
  },
  {
    id: 8,
    image: '/assets/media/april_2025.webp',
    title: 'ERADAT International Real Estate Company approves FY 2024 financials at General Assembly Meeting',
    date: 'April 17, 2024',
    content: 'The Ordinary General Assembly of Eradat International Real Estate Company was held at 12:00 PM on Thursday, 17/04/2025, at the company’s headquarters, in the presence of shareholders representing 131,629,267 shares out of the company’s total shares amounting to 131,630,000 shares, with an attendance rate of 99.99%. The meeting was attended by the Chairman of the Board of Directors, Dr. Sulaiman Tareq Al Abduljader, the Company Auditor Mr. Abdulaziz Nasser Jabr, representing Mr. Abdullatif Al Aiban from Al Qatami, Al Aiban & Partners (Grant Thornton), and Dr. Mohammed Abdulrahman Al Sharafa – Member of the Sharia Supervisory Board. Dr. Sulaiman Tareq Al Abduljader, Chairman of the Board, opened the meeting by welcoming the esteemed shareholders and presented the agenda as follows: First: Discussing and approving the Board of Directors’ Report for the fiscal year ending 31/12/2024. Second: Discussing and approving the External Auditor’s Report for the fiscal year ending 31/12/2024. Third: Discussing and approving the Sharia Supervisory Board’s Report for the fiscal year ending 31/12/2024. Fourth: Discussing and approving the Company’s financial statements for the fiscal year ending 31/12/2024. Fifth: Approving the deduction of 10% to the Legal Reserve, amounting to KD 71,905. Sixth: Discussing the deduction of 10% to the Voluntary Reserve, amounting to KD 71,905. Seventh: Reviewing any violations or penalties (financial or otherwise) issued by regulatory authorities. The Chairman stated there were none in 2024. Eighth: Discussing the Board’s proposal not to distribute dividends for the fiscal year ending 31/12/2024. Ninth: Discussing the non-distribution of remuneration to the members of the Board of Directors. Tenth: Reviewing related party transactions and authorizing the Board to continue such transactions until the next General Assembly for FY 2025. Eleventh: Discharging the Board members from liability related to their legal, financial, and administrative actions for FY 2024. Twelfth: Reappointing Mr. Abdullatif Al Aiban – License No. (94 A), from Al Qatami, Al Aiban & Partners (Grant Thornton) as External Auditor for FY 2025, and authorizing the Board to determine the fees. Thirteenth: Reappointing the following Sharia Supervisory Board members for FY 2025, and authorizing the Board to determine their fees: Dr. Hamad Yousef Al Mazrouei, Dr. Abdulrahman Mohammed Al Baloul, and Dr. Mohammed Abdulrahman Al Sharafa. The meeting concluded at 12:15 PM.',
    type: 'video',
    relatedItems: [4, 6],
  },
];

  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const filteredMedia = mediaItems
    .filter((item) => activeFilter === 'all' || item.type === activeFilter)
    .sort((a, b) => b.id - a.id); // Sorts by newest (higher id first)
  const featuredMedia = mediaItems
    .sort((a, b) => b.id - a.id)
    .slice(0, 2)
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
              className="mb-6 flex items-center text-amber-800 hover:text-amber-900 font-medium">
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
                  
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {selectedMedia.title}
                </h1>
              </div>

              {/* Media Image */}
              <div className="mb-8">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              {/* Media Content */}
              <div className="prose prose-lg max-w-none mb-12">
                {selectedMedia.content
                  ?.split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 text-xl text-justify">
                      {paragraph}
                    </p>
                  ))}
              </div>
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
                      <div className="relative h-[300px] overflow-hidden">
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

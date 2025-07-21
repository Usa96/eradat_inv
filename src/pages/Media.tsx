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
      image:
        'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'PrimeInvest Expands Portfolio with $50M Acquisition in Austin',
      date: 'May 15, 2023',
      excerpt:
        "PrimeInvest announces the acquisition of a premium multi-family complex in Austin's tech corridor, expanding its Texas portfolio.",
      content:
        "PrimeInvest, a leading real estate investment platform, today announced the acquisition of Oakridge Apartments, a premium multi-family complex in Austin's tech corridor for $50 million. This strategic acquisition expands PrimeInvest's Texas portfolio and positions the company to capitalize on Austin's booming tech industry and strong population growth.\n\nThe 120-unit property features premium amenities including a resort-style pool, fitness center, and co-working spaces, catering to the city's growing professional demographic. With an occupancy rate of 96% and strong rental demand in the area, the property is expected to deliver stable cash flows and appreciation potential for investors.\n\n\"Austin continues to be one of the most dynamic real estate markets in the country, driven by significant tech industry growth and migration from coastal cities,\" said John Anderson, Chief Investment Officer at PrimeInvest. \"Oakridge Apartments represents an ideal addition to our portfolio, offering our investors access to a high-quality asset in a prime location with strong fundamentals.\"\n\nThe acquisition was financed through a combination of equity investment from PrimeInvest's platform investors and senior debt from a leading national lender. The company plans to implement targeted improvements to common areas and unit interiors to drive rental growth and enhance property value.\n\nInvestors on the PrimeInvest platform can participate in this opportunity with a minimum investment of $50,000, with projected annual returns of 14% over a 36-month hold period. The investment includes quarterly dividend distributions and potential appreciation upon exit.",
      source: 'Real Estate Weekly',
      author: 'Sarah Johnson',
      link: '#',
      type: 'press-release',
      featured: true,
      relatedItems: [2, 3],
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'CEO Interview: The Future of Real Estate Crowdfunding',
      date: 'April 3, 2023',
      excerpt:
        'Our CEO discusses how technology is democratizing access to premium real estate investments and what it means for investors.',
      content:
        'In a wide-ranging interview, PrimeInvest CEO Michael Roberts discusses the transformative impact of technology on real estate investing and how platforms like PrimeInvest are democratizing access to premium investment opportunities that were previously only available to institutional investors.\n\n"What we\'re seeing is a fundamental shift in how people invest in real estate," explains Roberts. "Technology has removed the traditional barriers to entry – high capital requirements, geographical limitations, and management headaches – enabling everyday investors to build diversified real estate portfolios with relatively small amounts of capital."\n\nRoberts highlights several key trends shaping the future of real estate crowdfunding:\n\n1. **Increased accessibility**: Minimum investments continue to decrease, opening the door to more investors.\n\n2. **Enhanced transparency**: Detailed financial projections, market analyses, and property information give investors unprecedented visibility into their investments.\n\n3. **Regulatory evolution**: Changes in securities laws have created new opportunities for non-accredited investors to participate in real estate deals.\n\n4. **Data-driven investing**: Advanced analytics and AI are improving property selection and investment performance.\n\n5. **Secondary markets**: The development of platforms allowing investors to sell their positions before the end of the investment term.\n\n"The most exciting aspect of this evolution is how it\'s changing the wealth-building equation for the average person," Roberts notes. "Real estate has historically been one of the most reliable paths to wealth creation, but it was largely inaccessible to most people. Technology is changing that equation, and we\'re proud to be at the forefront of that transformation."\n\nLooking ahead, Roberts envisions a future where real estate becomes a core component of most investment portfolios, alongside stocks and bonds, with technology making the asset class as liquid and accessible as the public markets.',
      source: 'Investment Today',
      author: 'David Chen',
      link: '#',
      type: 'article',
      relatedItems: [1, 7],
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'PrimeInvest Delivers 16% Returns on Miami Property Exit',
      date: 'March 12, 2023',
      excerpt:
        'Investors celebrate as PrimeInvest completes successful exit of Miami waterfront property, delivering returns above projections.',
      content:
        'PrimeInvest announced today the successful exit of its Riverside Complex investment in Miami, Florida, delivering a 16% annualized return to investors, exceeding the original projection of 12%.\n\nThe mixed-use development, which includes 80 residential units and 15,000 sq ft of retail space, was acquired in 2021 for $32 million and sold for $42.5 million, representing a significant appreciation in value over the 24-month hold period. During the ownership period, investors received consistent quarterly dividends from rental income, in addition to the appreciation realized upon exit.\n\n"The successful exit of Riverside Complex demonstrates our team\'s ability to identify high-potential properties and execute value-add strategies that deliver strong returns for our investors," said Jennifer Martinez, Head of Acquisitions at PrimeInvest. "Miami\'s real estate market has shown remarkable resilience and growth, driven by population influx and business relocations to the area."\n\nThe property, located in Miami\'s Brickell neighborhood, benefited from several strategic improvements implemented by PrimeInvest during the ownership period, including interior unit renovations, enhanced amenities, and optimized retail tenant mix, which drove rental income growth and property value appreciation.\n\nInvestors who participated in the Riverside Complex opportunity with the minimum investment of $75,000 received total returns of approximately $99,000, representing their original principal plus $24,000 in combined dividend payments and appreciation.\n\n"We\'re extremely pleased with the outcome of this investment and the returns we\'ve delivered to our investors," said Michael Roberts, CEO of PrimeInvest. "This successful exit reinforces our investment thesis and our commitment to creating value for our investor community."',
      source: 'Finance Insider',
      author: 'Robert Thompson',
      link: '#',
      type: 'press-release',
      relatedItems: [1, 4],
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title:
        'Market Trends: Why Multifamily Properties Are Outperforming in 2023',
      date: 'February 28, 2023',
      excerpt:
        "PrimeInvest's research team analyzes the factors driving strong performance in the multifamily sector despite economic headwinds.",
      content:
        'In a comprehensive new market report, PrimeInvest\'s research team provides an in-depth analysis of the multifamily real estate sector\'s strong performance in 2023, despite broader economic uncertainties.\n\nThe report identifies several key factors contributing to the sector\'s resilience:\n\n1. **Persistent Housing Shortage**: The U.S. continues to face a significant housing shortage, with new construction failing to keep pace with household formation, creating sustained demand for rental housing.\n\n2. **Affordability Challenges in Home Buying**: Rising interest rates and elevated home prices have made homeownership less attainable for many Americans, extending their time as renters and increasing demand for quality rental units.\n\n3. **Demographic Tailwinds**: Millennials and Gen Z, who together represent the largest demographic cohorts, are in prime renting years, creating a substantial renter pool.\n\n4. **Migration Patterns**: The continued migration to the Sunbelt and secondary markets has created particularly strong demand in these regions, where PrimeInvest has strategically focused much of its portfolio.\n\n5. **Inflation Hedge**: Multifamily properties have proven effective as inflation hedges, with the ability to adjust rents annually or even more frequently in some markets.\n\n"While no real estate sector is immune to economic cycles, multifamily properties have historically demonstrated remarkable resilience during periods of economic uncertainty," notes Emily Chen, Head of Research at PrimeInvest. "The current environment, characterized by housing shortages and affordability challenges, has only strengthened the fundamental case for multifamily investments."\n\nThe report also highlights geographical variations in performance, with particularly strong results in markets like Austin, Nashville, Raleigh-Durham, Phoenix, and Tampa, where population and job growth continue to outpace the national average.\n\nLooking ahead, the research team maintains a positive outlook for the multifamily sector, projecting continued rent growth and strong occupancy rates in most major markets through 2023 and into 2024.',
      source: 'PrimeInvest Blog',
      author: 'Emily Chen',
      link: '#',
      type: 'article',
      relatedItems: [2, 6],
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Video: Inside Our Latest Development in Denver',
      date: 'February 15, 2023',
      excerpt:
        'Take a virtual tour of Highland Towers, our newest luxury residential property in downtown Denver.',
      content:
        "Join PrimeInvest's Director of Acquisitions, James Wilson, for an exclusive video tour of Highland Towers, our newest luxury residential property in downtown Denver, Colorado.\n\nThis 200-unit high-rise property features stunning mountain views, premium finishes, and an extensive amenity package designed for today's urban professionals. The video showcases the property's modern architecture, thoughtfully designed floor plans, and premium features including:\n\n- Rooftop lounge with panoramic mountain views\n- State-of-the-art fitness center and yoga studio\n- Co-working spaces with private meeting rooms\n- Smart home technology in all units\n- Chef's kitchens with premium appliances\n- Floor-to-ceiling windows\n- Outdoor pool and entertainment area\n\n\"Highland Towers represents the pinnacle of urban living in Denver,\" explains Wilson as he guides viewers through the property. \"We've carefully designed every aspect of this building to meet the needs and exceed the expectations of today's renters, while creating an asset that will deliver strong returns for our investors.\"\n\nThe video also highlights the property's prime location in Denver's trendy Highland neighborhood, within walking distance to restaurants, shops, parks, and major employers. The area has seen significant appreciation in recent years, driven by Denver's strong population growth and economic expansion.\n\nHighland Towers is currently available for investment on the PrimeInvest platform with a minimum investment of $65,000. The projected annual return is 13% over a 30-month hold period, with quarterly dividend distributions.",
      source: 'PrimeInvest YouTube',
      author: 'James Wilson',
      link: '#',
      type: 'video',
      duration: '12:45',
      videoUrl: '#',
      relatedItems: [1, 8],
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Podcast: Real Estate Investing During Economic Uncertainty',
      date: 'January 20, 2023',
      excerpt:
        'Our CIO discusses strategies for real estate investors to navigate market volatility and position for long-term success.',
      content:
        'In this episode of The Investment Hour Podcast, host Mark Stevens interviews PrimeInvest\'s Chief Investment Officer, John Anderson, about strategies for real estate investors during periods of economic uncertainty.\n\nAnderson shares insights from his 25+ years of experience navigating multiple real estate cycles and offers practical advice for investors looking to protect and grow their real estate portfolios in today\'s challenging environment.\n\nKey topics discussed include:\n\n- How different real estate sectors typically perform during economic downturns\n- The importance of focusing on cash flow rather than speculation during uncertain times\n- Why location fundamentals become even more critical during market volatility\n- Strategies for maintaining adequate liquidity while staying invested\n- How technology is changing the way investors can respond to market shifts\n- The potential opportunities that often emerge during market dislocations\n\n"The investors who succeed through market cycles are those who maintain discipline, focus on fundamentals, and have the courage to act when others are fearful," Anderson explains. "While every economic downturn has its unique characteristics, certain principles of successful real estate investing remain constant."\n\nAnderson also discusses PrimeInvest\'s current investment strategy, which emphasizes properties in supply-constrained markets with diverse economic drivers, strong population growth, and high barriers to new construction.\n\n"We\'re particularly focused on multifamily and select commercial properties in markets with strong job growth and favorable migration trends," notes Anderson. "These assets tend to demonstrate greater resilience during economic uncertainty while positioning investors to capture growth during the eventual recovery."',
      source: 'The Investment Hour Podcast',
      author: 'John Anderson',
      link: '#',
      type: 'podcast',
      duration: '47:32',
      podcastUrl: '#',
      relatedItems: [2, 4],
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
      title: 'PrimeInvest Named Among Top 10 Real Estate Investment Platforms',
      date: 'January 5, 2023',
      excerpt:
        'Industry publication recognizes PrimeInvest for its innovative approach to real estate investing and strong investor returns.',
      content:
        'Financial Technology Review has named PrimeInvest among the Top 10 Real Estate Investment Platforms for 2023, recognizing the company\'s innovative approach to real estate investing and consistent track record of delivering strong returns to investors.\n\nThe annual ranking evaluates platforms based on several criteria, including investment performance, technology innovation, user experience, transparency, and market impact. PrimeInvest scored particularly high in the investment performance and technology innovation categories.\n\n"PrimeInvest stands out for its rigorous investment selection process and proprietary analytics platform that has consistently identified high-performing properties across multiple markets," noted the publication. "The company\'s average annual returns of 14.2% over the past three years place it among the top performers in the industry."\n\nThe recognition comes as PrimeInvest celebrates its fifth anniversary and surpasses $500 million in assets under management. Since its founding in 2018, the platform has completed 37 investments across 14 markets, with 12 successful exits returning an average of 15.8% to investors.\n\n"We\'re honored to be recognized among the top platforms in the industry," said Michael Roberts, CEO of PrimeInvest. "This achievement reflects the dedication of our entire team to creating value for our investors and continuously enhancing our platform to provide an exceptional investment experience."\n\nRoberts attributes the company\'s success to its data-driven approach to property selection, focus on operational excellence, and commitment to investor education and transparency.\n\n"From day one, we\'ve been focused on not just providing access to real estate investments, but on creating a comprehensive platform that empowers investors with the tools, information, and opportunities they need to build wealth through real estate," he explained.',
      source: 'Financial Technology Review',
      author: 'Financial Technology Review Staff',
      link: '#',
      type: 'press-release',
      featured: true,
      relatedItems: [2, 8],
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      title: 'Video: Q4 2022 Investor Briefing',
      date: 'December 15, 2022',
      excerpt:
        'Watch our quarterly investor briefing covering portfolio performance, market outlook, and upcoming investment opportunities.',
      content:
        "In this quarterly investor briefing, PrimeInvest's leadership team provides a comprehensive update on the company's portfolio performance, market outlook, and upcoming investment opportunities.\n\nThe presentation begins with CEO Michael Roberts providing an overview of the company's performance in Q4 2022, highlighting several key achievements:\n\n- Addition of two new properties to the portfolio, including a multifamily complex in Nashville and a mixed-use development in Austin\n- Successful exit from a retail property in Atlanta, delivering a 15.2% annualized return to investors\n- Launch of the company's enhanced investor dashboard with new portfolio analytics features\n- Expansion of the investment team with two senior hires from institutional real estate firms\n\nChief Investment Officer John Anderson then provides an in-depth analysis of current market conditions, noting that while the broader real estate market is experiencing challenges due to rising interest rates, specific sectors and markets continue to show strength.\n\n\"We're seeing particularly strong fundamentals in multifamily and industrial properties in the Sunbelt markets, driven by continued population migration and business relocations to these regions,\" Anderson explains. \"These trends, which predated the pandemic but were accelerated by it, are creating compelling investment opportunities in select markets.\"\n\nThe briefing concludes with a preview of upcoming investment opportunities planned for Q1 2023, including:\n\n- A 180-unit multifamily property in Raleigh, North Carolina\n- A last-mile distribution facility in Phoenix, Arizona\n- A mixed-use development in Tampa, Florida\n\nThe full investor briefing is available for viewing in the investor portal, along with the accompanying slide presentation and detailed quarterly reports for each property in the portfolio.",
      source: 'PrimeInvest Investor Relations',
      author: 'PrimeInvest Team',
      link: '#',
      type: 'video',
      duration: '38:22',
      videoUrl: '#',
      relatedItems: [4, 6],
    },
  ]
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
      <section className="relative bg-amber-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Media
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Stay updated with the latest news, insights, and announcements
              from PrimeInvest.
            </p>
          </div>
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

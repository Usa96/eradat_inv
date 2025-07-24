import React from 'react';
import { Link } from 'react-router-dom';
import {
  LinkedinIcon,
  ChevronRightIcon,
  MapPinIcon,
  UsersIcon,
  BuildingIcon,
  AwardIcon,
  TargetIcon,
  CompassIcon,
  HeartIcon,
  BrainIcon,
  HandshakeIcon,
} from 'lucide-react';
interface LeaderProfile {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
}
const AboutUs = () => {
  const leadershipTeam: LeaderProfile[] = [{
    id: 1,
    name: 'Dr. Sulaiman Tareq Al AbdulJader',
    title: 'Chairman',
    image: '/assets/team/sulaiman.png',
    bio: 'A seasoned leader in finance, investment, and academia. He serves on the boards of major firms and advises institutions. His research focuses on alternative investments and financial economics.',
  }, {
    id: 2,
    name: 'Waleed Hamad Al Sumait',
    title: 'Vice Chairman',
    image: '/assets/team/waleed.png',
    bio: "Brings over 20 years of experience in investment and financial services. He holds a BBA from the U.S. and several certifications, with active participation in top-tier industry conferences.",
  }, {
    id: 3,
    name: 'Bader Al Hajeri',
    title: 'Chief Executive Officer',
    image: '/assets/team/bader.png',
    bio: "Has 16+ years of experience in real estate and public relations. Oversees real estate investments and maintains strong relationships across government and private sectors.",
  }, {
    id: 4,
    name: 'Sulaiman Khaled Aloudah',
    title: 'Board Member',
    image: '/assets/team/aoudah.png',
    bio: 'Over 15 years of expertise in corporate finance, M&A, and strategic planning. Certified in CGIA, CST, and CIDA, with strong IFRS knowledge and board-level insight.',
  }, {
    id: 5,
    name: 'Saad Nasser Al Muneefi',
    title: 'Board Member',
    image: '/assets/team/saad.png',
    bio: 'An experienced finance executive with a BBA and 15+ years in Kuwait’s financial sector. Board member of First Securities Brokerage and Global Investment House.',
  }]

  return <main>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about_hero.jpg')" }} // replace with correct path
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Title Text at Bottom Left */}
        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-widest">
            ABOUT US 
          </h1>
        </div>
      </section>
      <section className="relative w-full">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/about_us_section.jpg"
            alt="ERADAT headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          {/* Grid Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {/* Row 1 */}
            <div className="border-r border-white/20 px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">2006</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                FOUNDED
              </p>
            </div>
            <div className="border-r border-white/20 px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">Kuwait</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                HEADQUARTERED IN
              </p>
            </div>
            <div className="px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">KD 13.2 M</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                PAID UP CAPITAL
              </p>
            </div>
            {/* Row 2 */}
            <div className="border-r border-white/20 px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">KD 54 M</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                TOTAL ASSETS UNDER MANAGEMENT
              </p>
            </div>
            <div className="border-r border-white/20 px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">90%</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                TARGET DIVIDEND RATIO
              </p>
            </div>
            <div className="px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">20</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                YEARS OF EXPERIENCE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600">
              We use time-tested investment principles  to create exceptional value for our investors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src="/assets/our_approach.jpg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 bg-amber-800 text-white rounded-lg shadow-lg">
                <UsersIcon className="h-10 w-10" />
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <TargetIcon className="h-6 w-6 text-amber-800" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 text-xl">
                      To create a real estate leading company that represents a pass-through vehicle of quality income-producing assets for a diversified investor base with exposure to frequent (quarterly/monthly) and sustainable cash distributions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <CompassIcon className="h-6 w-6 text-amber-800" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-xl">
                      To build a diversified portfolio of quality income-producing properties. To expand its reach and presence of its underlying portfolio across sectors, property type and countries within the GCC.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <BuildingIcon className="h-6 w-6 text-amber-800" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Our Strategy
                    </h3>
                    <p className="text-gray-600 text-xl">
                      We focus on value-add opportunities in high-growth markets by identifying properties with strong appreciation potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  These principles guide every decision we make and every
                  relationship we build.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <HeartIcon className="h-8 w-8 text-amber-800" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Sharia-Compliant Integrity
                  </h3>
                  <p className="text-gray-600 text-xl">
                    We adhere to Sharia principles in all our dealings—focusing on ethical, transparent, and faith-aligned transactions to preserve investor and partner trust.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <AwardIcon className="h-8 w-8 text-amber-800" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Sustainable Growth
                  </h3>
                  <p className="text-gray-600 text-xl">
                    We build a diversified portfolio of quality, income-generating real estate across the GCC—anchored in long-term stability and sustainable returns.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <BrainIcon className="h-8 w-8 text-amber-800" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Investor-Centric Performance
                  </h3>
                  <p className="text-gray-600 text-xl">
                    Our aim is to be a vehicle for consistent, periodic distributions—ensuring regular, reliable income to our stakeholder base.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the experienced team guiding ERADAT's vision and
              strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map(leader => <div key={leader.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="text-amber-800 mb-4">{leader.title}</p>
                  <p className="text-gray-700 mb-4 text-xl">{leader.bio}</p>
                  <div className="flex justify-between items-center">
                    {leader.linkedin && <a href={leader.linkedin} className="inline-flex items-center text-amber-900 hover:text-amber-700 font-medium" aria-label={`${leader.name}'s LinkedIn profile`}>
                        <LinkedinIcon size={20} />
                      </a>}
                    <Link to={`/team/${leader.id}`} className="inline-block text-amber-900 hover:text-amber-700 font-medium">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </main>;
};
export default AboutUs;
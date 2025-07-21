import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon } from 'lucide-react';
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
    name: 'Sulaiman Al Awdah',
    title: 'Board Member',
    image: '/assets/team/aoudah.png',
    bio: 'Over 15 years of expertise in corporate finance, M&A, and strategic planning. Certified in CGIA, CST, and CIDA, with strong IFRS knowledge and board-level insight.',
  }, {
    id: 5,
    name: 'Saad Nasser Al Muneefi',
    title: 'Board Member',
    image: '/assets/team/saad.png',
    bio: 'An experienced finance executive with a BBA and 15+ years in Kuwait’s financial sector. Board member of First Securities Brokerage and Global Investment House.',
  }];
  return <main>
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white pt-40 pb-20">
        <div className="absolute inset-0 opacity-20 bg-pattern-diagonal" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ERADAT
            </h1>
            <p className="text-xl text-amber-100">
              ERADAT strives to become Kuwait's premier real estate investment company, operating in accordance with Sharia principles. Our focus is on acquiring high-quality, sustainable, and diversified income-generating properties.
            </p>
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-amber-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-amber-900">
                Our Vision
              </h2>
              <p className="text-gray-800 mb-4">
                Our vision is to become a leading real estate investment company that 
                serves as a pass-through vehicle for premium, 
                income-producing assets — offering a diversified investor base access to 
                institutional-quality opportunities with sustainable 
                and frequent cash distributions.
              </p>
              <p className="text-gray-800">
                We are committed to democratizing real estate investing by making long-term wealth creation through high-performing properties accessible to discerning investors seeking financial independence, not just the ultra-wealthy.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
              <h2 className="text-3xl font-bold mb-6 text-amber-200">
                Our Mission
              </h2>
              <p className="text-gray-100 mb-4">
                To identify, acquire, and manage high-performing real estate
                assets that generate consistent returns while minimizing risk
                for our investors.
              </p>
              <p className="text-gray-100">
                Through rigorous analysis, market expertise, and operational excellence, 
                we aim to build a diversified portfolio of quality, income-producing properties across sectors, 
                property types, and GCC countries — creating lasting value and outperforming market benchmarks for all stakeholders.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-amber-200 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-amber-900">
                  Integrity & Sharia Compliance
                </h4>
                <p className="text-gray-700">
                We uphold the highest ethical standards by operating in full accordance with Sharia principles, ensuring transparency, trust, and accountability in every investment decision.
                </p>
              </div>
              <div className="p-6 border border-amber-200 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-amber-900">
                  Sustainable Value Creation
                </h4>
                <p className="text-gray-700">
                  We focus on acquiring and managing high-quality, income-generating properties that deliver long-term, sustainable returns to our investors through stable and frequent distributions.
                </p>
              </div>
              <div className="p-6 border border-amber-200 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-amber-900">
                  Strategic Diversification
                </h4>
                <p className="text-gray-700">
                  We are committed to building a resilient and balanced real estate portfolio — diversified across sectors, property types, and GCC markets — to minimize risk and maximize growth potential.
                </p>
              </div>
            </div>
          </div>
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
                  <p className="text-gray-700 mb-4 text-sm">{leader.bio}</p>
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
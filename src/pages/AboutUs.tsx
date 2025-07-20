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
    name: 'Alexandra Reynolds',
    title: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    bio: 'Alexandra brings over 20 years of experience in real estate investment and development. Prior to founding PrimeInvest, she served as Managing Director at Global Capital Partners, where she oversaw $2B in real estate acquisitions.',
    linkedin: '#'
  }, {
    id: 2,
    name: 'Marcus Chen',
    title: 'Chief Investment Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    bio: "Marcus oversees all investment strategies and property acquisitions. With a background in finance and real estate economics, he has developed proprietary analytics models that drive PrimeInvest's market-beating returns.",
    linkedin: '#'
  }, {
    id: 3,
    name: 'Sophia Williams',
    title: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    bio: "Sophia manages day-to-day operations and investor relations. Her background in both technology and real estate has been instrumental in developing PrimeInvest's streamlined investment platform.",
    linkedin: '#'
  }, {
    id: 4,
    name: 'James Rodriguez',
    title: 'Head of Property Development',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    bio: 'James leads our property development initiatives, bringing 15 years of experience in construction management and architectural design. He specializes in value-add renovations that maximize property potential.',
    linkedin: '#'
  }, {
    id: 5,
    name: 'Emily Nakamura',
    title: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    bio: 'Emily brings over 15 years of financial leadership experience to PrimeInvest. Her expertise in capital markets and investor relations has been instrumental in securing funding for our largest acquisitions and development projects.',
    linkedin: '#'
  }];
  return <main>
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 opacity-20 bg-pattern-diagonal" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About PrimeInvest
            </h1>
            <p className="text-xl text-amber-100">
              Building a future of financial freedom through strategic real
              estate investments.
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
                To democratize access to institutional-quality real estate
                investments, creating pathways to financial independence for
                investors of all backgrounds.
              </p>
              <p className="text-gray-800">
                We envision a world where premium real estate investment
                opportunities are no longer exclusive to the ultra-wealthy, but
                accessible to anyone seeking to build long-term wealth through
                property ownership.
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
                Through rigorous analysis, market expertise, and operational
                excellence, we are committed to delivering investment
                opportunities that outperform market averages and create lasting
                value for our stakeholders.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-amber-200 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-amber-900">
                  Integrity
                </h4>
                <p className="text-gray-700">
                  We operate with unwavering honesty and transparency in all our
                  dealings with investors and partners.
                </p>
              </div>
              <div className="p-6 border border-amber-200 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-amber-900">
                  Excellence
                </h4>
                <p className="text-gray-700">
                  We pursue the highest standards in property selection,
                  management, and investor relations.
                </p>
              </div>
              <div className="p-6 border border-amber-200 rounded-lg">
                <h4 className="text-xl font-semibold mb-3 text-amber-900">
                  Innovation
                </h4>
                <p className="text-gray-700">
                  We constantly seek new approaches to optimize returns and
                  improve the investment experience.
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
              Meet the experienced team guiding PrimeInvest's vision and
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
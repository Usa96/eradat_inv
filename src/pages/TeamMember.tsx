import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
interface LeaderProfile {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  fullBio?: string;
  expertise?: string[];
  education?: string[];
  achievements?: string[];
}
const TeamMember = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  // Team member data
  const teamMembers: LeaderProfile[] = [{
    id: 1,
    name: 'Alexandra Reynolds',
    title: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    bio: 'Alexandra brings over 20 years of experience in real estate investment and development. Prior to founding PrimeInvest, she served as Managing Director at Global Capital Partners, where she oversaw $2B in real estate acquisitions.',
    fullBio: "Alexandra Reynolds is the visionary founder and CEO of PrimeInvest, bringing over two decades of experience in real estate investment, development, and asset management to the company. Under her leadership, PrimeInvest has grown from a small startup to one of the most respected real estate investment platforms in the industry.\n\nPrior to founding PrimeInvest in 2012, Alexandra served as Managing Director at Global Capital Partners, where she oversaw $2 billion in real estate acquisitions across North America. Her deep understanding of market dynamics and investment strategies has been instrumental in building PrimeInvest's impressive portfolio and track record of returns.\n\nAlexandra holds an MBA from Harvard Business School and a Bachelor's degree in Economics from Yale University. She is a frequent speaker at industry conferences and has been recognized with numerous awards for her contributions to the real estate investment sector.",
    expertise: ['Real Estate Acquisition & Development', 'Investment Strategy', 'Market Analysis', 'Capital Raising', 'Investor Relations'],
    education: ['MBA, Harvard Business School', 'Bachelor of Arts in Economics, Yale University', 'Certificate in Real Estate Finance, The Wharton School'],
    achievements: ['Named "Top 50 Women in Real Estate" by Real Estate Forum (2022)', 'Led the acquisition of over $3.5B in real estate assets', 'Keynote speaker at the International Real Estate Investment Summit', 'Board Member, Urban Land Institute']
  }, {
    id: 2,
    name: 'Marcus Chen',
    title: 'Chief Investment Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    bio: "Marcus oversees all investment strategies and property acquisitions. With a background in finance and real estate economics, he has developed proprietary analytics models that drive PrimeInvest's market-beating returns.",
    fullBio: "Marcus Chen serves as the Chief Investment Officer at PrimeInvest, where he oversees all investment strategies, property acquisitions, and portfolio management. His innovative approach to real estate investment analysis has been a cornerstone of PrimeInvest's success.\n\nWith a background in quantitative finance and real estate economics, Marcus has developed proprietary analytics models that drive PrimeInvest's market-beating returns. His team's rigorous due diligence process and data-driven approach have consistently identified high-performing assets across diverse market conditions.\n\nBefore joining PrimeInvest, Marcus was a Senior Vice President at Blackstone Real Estate, where he was involved in over $5 billion of transactions across multiple property types. He began his career as an investment banking analyst at Goldman Sachs, focusing on real estate and hospitality sectors.",
    expertise: ['Investment Analysis', 'Portfolio Management', 'Risk Assessment', 'Financial Modeling', 'Market Forecasting'],
    education: ['Master of Science in Real Estate Development, MIT', 'Bachelor of Science in Finance, University of Pennsylvania', 'CFA Charterholder'],
    achievements: ["Developed PrimeInvest's proprietary investment scoring system", 'Managed a $1.2B acquisition of a multi-family portfolio in 2021', 'Published in the Journal of Real Estate Finance and Economics', 'Guest lecturer at Columbia Business School']
  }, {
    id: 3,
    name: 'Sophia Williams',
    title: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    bio: "Sophia manages day-to-day operations and investor relations. Her background in both technology and real estate has been instrumental in developing PrimeInvest's streamlined investment platform.",
    fullBio: "Sophia Williams serves as the Chief Operating Officer at PrimeInvest, where she oversees day-to-day operations, technology implementation, and investor relations. Her unique background spanning both technology and real estate has been instrumental in developing PrimeInvest's streamlined investment platform and operational excellence.\n\nPrior to joining PrimeInvest, Sophia was the VP of Operations at RealTech Ventures, a real estate technology startup that revolutionized property management systems. She also spent five years at Zillow Group, where she led product development teams focused on investment tools and analytics.\n\nSophia's expertise in process optimization and technology integration has transformed PrimeInvest's operational efficiency, allowing the company to scale rapidly while maintaining high service standards for investors.",
    expertise: ['Operations Management', 'Technology Implementation', 'Investor Relations', 'Process Optimization', 'Team Leadership'],
    education: ['MBA, Stanford Graduate School of Business', 'Bachelor of Science in Computer Science, Duke University', 'Certificate in Real Estate Investment, NYU Schack Institute'],
    achievements: ["Led the development of PrimeInvest's investor portal", 'Increased operational efficiency by 35% through process redesign', 'Featured in "Women in PropTech" by Commercial Observer', 'Mentor, Women in Real Estate Technology program']
  }, {
    id: 4,
    name: 'James Rodriguez',
    title: 'Head of Property Development',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    bio: 'James leads our property development initiatives, bringing 15 years of experience in construction management and architectural design. He specializes in value-add renovations that maximize property potential.',
    fullBio: 'James Rodriguez serves as the Head of Property Development at PrimeInvest, where he leads all aspects of property improvements, renovations, and ground-up development projects. With 15 years of experience in construction management and architectural design, he has a proven track record of transforming underperforming properties into high-value assets.\n\nJames specializes in value-add renovations that maximize property potential while maintaining budget discipline. His expertise spans multiple property types, including multi-family, commercial, and mixed-use developments.\n\nBefore joining PrimeInvest, James was a Project Director at Trammell Crow Company, where he managed development projects valued at over $500 million. He began his career as an architect at Gensler, working on award-winning commercial and residential projects.',
    expertise: ['Property Development', 'Construction Management', 'Architectural Design', 'Value-Add Strategies', 'Project Planning'],
    education: ['Master of Architecture, University of California, Berkeley', 'Bachelor of Science in Civil Engineering, University of Texas at Austin', 'LEED Accredited Professional'],
    achievements: ['Led the $45M renovation of Highland Towers in Denver', 'Reduced construction costs by 12% through innovative design solutions', 'Recipient of the Urban Land Institute Excellence Award', 'Published in Architectural Digest for sustainable design practices']
  }, {
    id: 5,
    name: 'Emily Nakamura',
    title: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    bio: 'Emily brings over 15 years of financial leadership experience to PrimeInvest. Her expertise in capital markets and investor relations has been instrumental in securing funding for our largest acquisitions and development projects.',
    fullBio: "Emily Nakamura serves as the Chief Financial Officer at PrimeInvest, where she oversees all financial operations, capital raising activities, and investor reporting. With over 15 years of financial leadership experience, she has been instrumental in securing funding for PrimeInvest's largest acquisitions and development projects.\n\nEmily's expertise spans capital markets, financial reporting, tax strategy, and investor relations. She has structured over $1 billion in debt and equity financings for PrimeInvest since joining the company.\n\nPrior to PrimeInvest, Emily was a Vice President in the Real Estate Banking group at Morgan Stanley, where she advised REITs and private equity firms on capital markets transactions. She began her career at PricewaterhouseCoopers in their Real Estate Advisory practice.",
    expertise: ['Financial Management', 'Capital Markets', 'Investor Reporting', 'Tax Strategy', 'Financial Analysis'],
    education: ['MBA in Finance, Columbia Business School', 'Bachelor of Science in Accounting, University of California, Los Angeles', 'Certified Public Accountant (CPA)'],
    achievements: ["Structured a $350M equity fund for PrimeInvest's expansion", 'Implemented financial systems that improved reporting efficiency by 40%', 'Named "CFO of the Year" by Commercial Property Executive', 'Board Member, Commercial Real Estate Finance Council']
  }];
  const member = teamMembers.find(member => member.id === Number(id));
  if (!member) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Team member not found</h2>
        <Link to="/about" className="text-amber-800 hover:text-amber-900 font-medium inline-flex items-center">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Return to About Us
        </Link>
      </div>;
  }
  return <main>
      {/* Hero Section */}
      <section className="bg-amber-900 text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/about" className="text-amber-100 hover:text-white inline-flex items-center">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Team
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] w-full">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl text-amber-200 mb-6">{member.title}</p>
              <p className="text-amber-100 mb-6">{member.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Biography</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {member.fullBio?.split('\n\n').map((paragraph, index) => <p key={index} className="mb-4">
                  {paragraph}
                </p>)}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Achievements */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Areas of Expertise
              </h3>
              {member.expertise && <ul className="space-y-2">
                  {member.expertise.map((item, index) => <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-amber-800 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Education
              </h3>
              {member.education && <ul className="space-y-2">
                  {member.education.map((item, index) => <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-amber-800 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Achievements
              </h3>
              {member.achievements && <ul className="space-y-2">
                  {member.achievements.map((item, index) => <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-amber-800 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>}
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Meet Other Team Members
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.filter(m => m.id !== member.id).map(teamMember => <Link key={teamMember.id} to={`/team/${teamMember.id}`} className="group">
                  <div className="relative rounded-lg overflow-hidden h-40 mb-3">
                    <img src={teamMember.image} alt={teamMember.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-800 transition-colors">
                    {teamMember.name}
                  </h3>
                  <p className="text-sm text-gray-600">{teamMember.title}</p>
                </Link>)}
          </div>
        </div>
      </section>
    </main>;
};
export default TeamMember;
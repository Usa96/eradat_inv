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
    name: 'Dr. Sulaiman Tareq Al AbdulJader',
    title: 'Chairman',
    image: '/assets/team/sulaiman.png',
    bio: 'Dr. Sulaiman brings a distinguished career in finance, investment, and academia, with leadership roles in both the public and private sectors. He has served as Vice Chairman of Aqar Real Estate Investment Company and held board positions in several prominent institutions.',
    fullBio: `Dr. Sulaiman Tareq Al AbdulJader is an accomplished professional with a diverse background in finance, investment, and academia. He has held significant positions in renowned companies, including serving as Vice Chairman of Aqar Real Estate Investment Company and a board member of Al Mal Investment Company. Dr. Sulaiman's expertise extends to advisory roles for prestigious institutions such as the Kuwait Investment Authority and the Public Authority of Sports.\n\n With notable academic contributions and research focus on alternative investments and financial economics, he continues to make a lasting impact in the industry and academic community.`,
    expertise: ['Alternative Investments', 'Financial Economics', 'Strategic Investment Advisory', 'Governance & Board Leadership', 'Public Sector Policy'],
    education: ['PhD in Finance or Financial Economics (institution TBD)', 'Advanced courses or certifications in Investment Strategy (if applicable)', 'Bachelor’s degree (institution TBD)'],
    achievements: ['Vice Chairman, Aqar Real Estate Investment Company', 'Board Member, Al Mal Investment Company', 'Advisor to Kuwait Investment Authority and Public Authority of Sports','Published researcher in the field of alternative investments','Recognized for contributions to finance and academia in Kuwait'] 
    }, 
    {
    id: 2,
    name: 'Waleed Hamad Al Sumait',
    title: 'Vice Chairman',
    image: '/assets/team/waleed.png',
    bio: 'Mr. Waleed Hamad Al Sumait brings over 20 years of investment experience and currently serves as Senior Vice President at Wafra, where he has played a key role since joining the firm in 2000.',
    fullBio: `With over two decades of experience in the investment field, Mr. Al Sumait holds a wealth of expertise. He holds a BBA degree from a prestigious institution in the United States and possesses a collection of certifications pertinent to the investment domain. His active engagement in numerous top-tier conferences within the industry underscores his commitment to professional development. Commencing his journey at Wafra in the year 2000, he has steadily progressed to his present role as Senior Vice President.`,
    expertise: ['Investment Management', 'Strategic Planning', 'Portfolio Development', 'Risk Analysis', 'Market Trends'],
    education: ['BBA, U.S.-based Institution', 'Multiple Certifications in Investment & Finance'],
    achievements: ['Over 20 years of experience in investment and financial services', 'Senior Vice President at Wafra', 'Active participant in leading industry conferences','Recognized for strategic contributions to long-term investment planning']
    }, 
    {
    id: 3,
    name: 'Bader Al Hajeri',
    title: 'Chief Executive Officer',
    image: '/assets/team/bader.png',
    bio: 'Mr. Bader Al Hajeri is Vice President of the Real Estate Department at Kuwait Real Estate Company, with over 16 years of experience in real estate and public relations.',
    fullBio: `Bader Al Hajeri is a Vice President in the Real Estate Department at Kuwait Real Estate Company. He has over 16 years of experience in real estate and public relations. In his current role, he is responsible for overseeing the company's real estate investments and public relations. He has a strong reputation and many connections with companies, associates, and state organizations. He is dedicated to using his extensive experience to improve the company's efficiency and relationships.`,
    expertise: ['Real Estate Investment', 'Public Relations', 'Stakeholder Engagement', 'Portfolio Oversight', 'Government Relations'],
    education: ['Bachelor’s degree (field and institution TBD)', 'Professional training in Real Estate or PR (if applicable)'],
    achievements: [
      'Over 16 years of experience in real estate and public relations',
      'Vice President at Kuwait Real Estate Company',
      'Established a strong network across public and private sectors',
      'Key contributor to the firm’s investment oversight and communication strategy'
    ]
  }, {
    id: 4,
    name: 'Sulaiman Khaled Aloudah',
    title: 'Board Member',
    image: '/assets/team/aoudah.png',
    bio: 'Sulaiman Khaled Aloudah is Group Financial Controller at INSHA’A Holding, with over 15 years of experience in corporate finance, M&A, and strategic planning.',
    fullBio: `Sulaiman Khaled Aloudah is a senior finance executive with over 15 years of experience in corporate finance, M&A, and strategic planning. As Group Financial Controller at INSHA’A Holding, he leads financial operations, risk management, and ERP implementation. He has a strong track record in driving financial growth and aligning strategy with governance. Sulaiman is certified in investment analysis and financial auditing (CGIA, CST, CIDA) and holds a Bachelor’s in Accounting from Kuwait University. He brings board-level insight, regional market expertise, and a deep understanding of IFRS and corporate compliance.`,
    expertise: ['Corporate Finance', 'Mergers & Acquisitions', 'Strategic Planning', 'IFRS Compliance', 'Risk Management', 'ERP Implementation'],
    education: ['Bachelor of Accounting, Kuwait University', 'Certified in CGIA, CST, CIDA'],
    achievements: [
      'Over 15 years of experience in corporate finance and strategy',
      'Group Financial Controller at INSHA’A Holding',
      'Led successful ERP implementation and financial transformation initiatives',
      'Board-level contributor with deep expertise in IFRS and compliance',
      'Holds certifications in investment analysis and auditing (CGIA, CST, CIDA)'
    ]
  }, {
    id: 5,
    name: 'Saad Nasser Al Muneefi',
    title: 'Board Member',
    image: '/assets/team/saad.png',
    bio: 'Mr. Saad Al Muneefi is the Vice President of Asset Management at Kuwait Real Estate Company, bringing over 20 years of experience in real estate investment, asset optimization, and investor relations within the local market.',
    fullBio: `Mr. Saad Al Muneefi is the Vice President of Assets Management at Kuwait Real Estate Company and commands more than 20 years of professional expertise. His role includes overlooking all local properties, investments and developments as well as investor relations. Among other requirements, the post responsibilities include identifying new local opportunities, conducting financial feasibilities and best use scenarios for new projects, return enhancement for existing properties, performance measurement and analysis, third party local real estate portfolio advisory and periodic updates on the Company strategy, business and results to investors and investment managers.`,
    expertise: ['Investment Management', 'Corporate Finance', 'Executive Leadership', 'Board Governance', 'Strategic Growth'],
    education: ['Bachelor of Business Administration'],
    achievements: [
      'Managing Director of Ilimits Kuwait Company',
      'Over 15 years of experience in finance and investment',
      'Held executive roles in top Kuwaiti financial institutions',
      'Board Member at First Securities Brokerage Company and Global Investment House'
    ]
  }];
  const member = teamMembers.find(member => member.id === Number(id));
  if (!member) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Team member not found</h2>
        <Link to="/AboutUs" className="text-amber-800 hover:text-amber-900 font-medium inline-flex items-center">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Return to About Us
        </Link>
      </div>;
  }
  return <main>
      {/* Hero Section */}
      <section className="bg-[#222222] text-white pt-48 pb-16">
        <div className="container mx-auto px-4">
          {/* <div className="flex items-center mb-8">
            <Link to="/AboutUs" className="text-amber-100 hover:text-white inline-flex items-center">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Team
            </Link>
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] w-full">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl text-amber-200 mb-6">{member.title}</p>
              <p className="text-amber-100 mb-6 text-xl">{member.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Biography</h2>
            <div className="prose prose-lg text-xl max-w-none text-gray-700">
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Areas of Expertise
              </h3>
              {member.expertise && <ul className="space-y-2">
                  {member.expertise.map((item, index) => <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-amber-800 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700 text-xl">{item}</span>
                    </li>)}
                </ul>}
            </div>
            {/* <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Education
              </h3>
              {member.education && <ul className="space-y-2">
                  {member.education.map((item, index) => <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-amber-800 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>)}
                </ul>}
            </div> */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Achievements
              </h3>
              {member.achievements && <ul className="space-y-2">
                  {member.achievements.map((item, index) => <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-amber-800 rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-700 text-xl">{item}</span>
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
            Get to Know Our Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl">
            {teamMembers.filter(m => m.id !== member.id).map(teamMember => <Link key={teamMember.id} to={`/team/${teamMember.id}`} className="group">
                  <div className="relative rounded-lg overflow-hidden h-40 mb-3">
                    <img src={teamMember.image} alt={teamMember.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-800 transition-colors">
                    {teamMember.name}
                  </h3>
                  <p className="text-lg text-gray-600">{teamMember.title}</p>
                </Link>)}
          </div>
        </div>
      </section>
    </main>;
};
export default TeamMember;
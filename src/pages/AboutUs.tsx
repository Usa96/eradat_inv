import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
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
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about_hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className={`absolute bottom-10 z-10 ${ i18n.language === 'ar' ? 'right-10 text-right' : 'left-10 text-left'}`}>
          <h1 className="text-white text-4xl md:text-6xl font-light tracking-widest">
            {t('About-Us')}
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
              <h3 className="text-5xl md:text-6xl font-light mb-4">{t('founded-year')}</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                {t('founded')}
              </p>
            </div>
            <div className="border-r border-white/20 px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">{t('Kuwait')}</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                {t('HQ')}
              </p>
            </div>
            <div className="px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">{t('capital-amount')}</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                {t('paid-up-capital')}
              </p>
            </div>
            {/* Row 2 */}
            <div className="border-r border-white/20 px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">{t('aum-amount')}</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                {t('total-assets-under-management')}
              </p>
            </div>
            <div className="border-r border-white/20 px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">90%</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                {t('target-dividend-ratio')}
              </p>
            </div>
            <div className="px-6 py-10">
              <h3 className="text-5xl md:text-6xl font-light mb-4">20</h3>
              <p className="text-xl tracking-wider uppercase text-gray-300">
                {t('years')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          <div
            className={`max-w-3xl mx-auto mb-16 ${ i18n.language === 'ar' ? 'text-center' : 'text-center' }`}>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {t('our-approach-title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('our-approach-description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src="/assets/our_approach.jpg"
                  alt={t('our-approach-img-alt')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 bg-amber-800 text-white rounded-lg shadow-lg">
                <UsersIcon className="h-10 w-10" />
              </div>
            </div>
            <div className="space-y-8">
              {/* Vision */}
              <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <TargetIcon className="h-6 w-6 text-amber-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('our-vision-title')}</h3>
                  <p className="text-gray-600 text-xl">{t('our-vision-description')}</p>
                </div>
              </div>
              {/* Mission */}
              <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <CompassIcon className="h-6 w-6 text-amber-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('our-mission-title')}</h3>
                  <p className="text-gray-600 text-xl">{t('our-mission-description')}</p>
                </div>
              </div>
              {/* Strategy */}
              <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <BuildingIcon className="h-6 w-6 text-amber-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('our-strategy-title')}</h3>
                  <p className="text-gray-600 text-xl">{t('our-strategy-description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  {t('core-values-title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('core-values-subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <HeartIcon className="h-8 w-8 text-amber-800" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {t('core-values.integrity-title')}
                  </h3>
                  <p className="text-gray-600 text-xl">
                    {t('core-values.integrity-desc')}
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <AwardIcon className="h-8 w-8 text-amber-800" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {t('core-values.growth-title')}
                  </h3>
                  <p className="text-gray-600 text-xl">
                    {t('core-values.growth-desc')}
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                    <BrainIcon className="h-8 w-8 text-amber-800" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {t('core-values.performance-title')}
                  </h3>
                  <p className="text-gray-600 text-xl">
                    {t('core-values.performance-desc')}
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
            <h2 className="text-3xl font-bold mb-4">{t('leadership.title')}</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {t('leadership.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map(leader => (
              <div
                key={leader.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {leader.name}
            </h3>
            <p className="text-amber-800 mb-4">{leader.title}</p>
            <p className="text-gray-700 mb-4 text-xl">{leader.bio}</p>
            <div className="flex justify-between items-center">
              {leader.linkedin && (
                <a
                  href={leader.linkedin}
                  className="inline-flex items-center text-amber-900 hover:text-amber-700 font-medium"
                  aria-label={`${leader.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon size={20} />
                </a>
              )}
              <Link
                to={`/team/${leader.id}`}
                className="inline-block text-amber-900 hover:text-amber-700 font-medium"
              >
                {t('leadership.viewProfile')}
              </Link>
            </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>;
};
export default AboutUs;

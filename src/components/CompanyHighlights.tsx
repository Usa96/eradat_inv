import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChartIcon, BuildingIcon, LayoutIcon, PercentIcon } from 'lucide-react';
export const CompanyHighlights = () => {
  const { t, i18n } = useTranslation();
  return <section
  className="relative py-24 bg-fixed bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/assets/company_highlights.avif')" }}>
  <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-0"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4 text-white">
        {t('KPI-Title')}
      </h2>
      <p className="text-white max-w-2xl mx-auto text-xl">
        {t('KPI-Desc')}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xl">
      {/* Block 1 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-yellow-900">
        <div className="bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BarChartIcon className="h-8 w-8 text-white" />
        </div>
        <p className="text-4xl font-bold mb-2">KD 54M+</p>
        <p>{t('KPI-AUM')}</p>
      </div>

      {/* Block 2 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-yellow-900">
        <div className="bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <BuildingIcon className="h-8 w-8 text-white" />
        </div>
        <p className="text-4xl font-bold mb-2">14</p>
        <p>{t('Properties')}</p>
      </div>

      {/* Block 3 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-yellow-900">
        <div className="bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <LayoutIcon className="h-8 w-8 text-white" />
        </div>
        <p className="text-4xl font-bold mb-2">65</p>
        <p>{t('KPI-Area')} </p>
      </div>

      {/* Block 4 */}
      <div className="bg-white/90 p-8 rounded-lg shadow-md text-center text-yellow-900">
        <div className="bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <PercentIcon className="h-8 w-8 text-white" />
        </div>
        <p className="text-4xl font-bold mb-2">90%</p>
        <p>{t('KPI-Target-Ratio')}</p>
      </div>
    </div>
  </div>
</section>;
};
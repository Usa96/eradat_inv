import React from 'react';
export const HeroSection = () => {
  return <section className="relative w-full h-screen bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black opacity-60" aria-hidden="true"></div>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video className="absolute min-w-full min-h-full object-cover" autoPlay muted loop playsInline>
          <source src="/Home_page_video_eradat.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60" aria-hidden="true"></div>
      <div className="container mx-auto px-4 h-full flex items-end relative z-10 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-100">
            Innovative Solutions Traditional Values
          </h1>
          <p className="text-xl mb-8 text-amber-50">
            Your Gateway to Real Estate
          </p>
        </div>
      </div>
    </section>;
};
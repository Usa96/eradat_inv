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
        <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <p className="text-sm tracking-widest uppercase mb-2">
            International Real Estate Company
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">
            ERADAT
          </h1>
          <div className="space-y-1 text-sm md:text-base">
            <p>YOUR GATEWAY TO REAL ESTATE</p>
          </div>
        </div>
    </section>;
};
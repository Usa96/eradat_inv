import React from 'react';
export const HeroSection = () => {
  return <section className="relative w-full h-screen bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black opacity-60" aria-hidden="true"></div>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <img
          className="absolute min-w-full min-h-full object-cover bg-center"
          src="/assets/title_image.jpg"
          alt="Eradat Home Page Background"
        />
      </div>
        <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <p className="text-md tracking-widest uppercase mb-2">
            
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-4">
            ERADAT
          </h1>
          <div className="space-y-1 text-xl md:text-lg">
            <p>International Real Estate Company</p>
          </div>
        </div>
    </section>;
};
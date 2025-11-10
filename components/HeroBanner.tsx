

import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative">
      <img
        src="https://allnewteenpatti.com/Z_img/all-teen-patti-apps-header-banner.webp"
        alt="India's No.1 Teen Patti Download Platform"
        className="w-full h-auto"
      />
      <div className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-12 h-12 flex flex-col items-center justify-center text-xs font-bold border-2 border-white">
        <span>18+</span>
        <span>ONLY</span>
      </div>
    </section>
  );
};

export default HeroBanner;

import React from 'react';
import { GamesIcon } from './Icons';

interface KeywordSliderProps {
  keywords: string[];
}

const KeywordSlider: React.FC<KeywordSliderProps> = ({ keywords }) => {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-gray-100 py-3 border-t border-b border-gray-300">
      <div className="marquee-container">
        <div className="marquee-content flex items-center">
          {[...keywords, ...keywords].map((keyword, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-1.5 mx-3 shadow-sm flex-shrink-0"
            >
              <GamesIcon className="w-4 h-4 text-red-500 mr-2" />
              <span className="font-semibold text-sm text-gray-700 whitespace-nowrap">
                {keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordSlider;
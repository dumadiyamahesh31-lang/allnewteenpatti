import React from 'react';
import { SpeakerIcon } from './Icons';

interface NoticeSliderProps {
  keywords: string[];
}

const NoticeSlider: React.FC<NoticeSliderProps> = ({ keywords }) => {
  if (!keywords || keywords.length === 0) {
    return null;
  }

  return (
    <div className="bg-yellow-400 text-black flex items-center py-2 shadow-inner">
      <SpeakerIcon className="w-6 h-6 flex-shrink-0 mx-3 text-gray-800" />
      <div className="marquee-container flex-grow">
        <div className="marquee-content flex items-center">
          {[...keywords, ...keywords].map((keyword, index) => (
            <span key={index} className="mx-4 font-semibold whitespace-nowrap text-sm bg-white/50 rounded-full px-3 py-1">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeSlider;

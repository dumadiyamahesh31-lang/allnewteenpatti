import React from 'react';
import { AppInfo } from '../types';
import { DownloadIcon } from './Icons';

interface AppListItemProps {
  app: AppInfo;
  onSelect: (app: AppInfo) => void;
}

const AppListItem: React.FC<AppListItemProps> = ({ app, onSelect }) => {
  const handleClick = () => {
    if (app.isComingSoon) {
      alert('This app is coming soon and will be available for download shortly!');
      return;
    }
    onSelect(app);
  };
  
  return (
    <div className="flex items-center p-3 border-b border-gray-200 space-x-3">
      <div className="w-6 text-center text-gray-400 font-bold text-lg">{app.rank === 0 ? '★' : app.rank}</div>
      <img
        src={app.image}
        alt={app.name}
        className="rounded-lg flex-shrink-0"
        style={{
            width: app.imageWidth ? `${app.imageWidth}px` : '56px',
            height: app.imageHeight ? `${app.imageHeight}px` : '56px',
            objectFit: 'contain',
        }}
      />
      <div className="flex-grow">
        <h3 className="font-bold text-base">{app.name}</h3>
        {app.details.map((detail, index) => (
            <p key={index} className="text-xs text-gray-600">{detail}</p>
        ))}
      </div>
      <button 
        className={`text-white rounded-full px-4 py-2 flex items-center justify-center space-x-1.5 font-semibold text-sm flex-shrink-0 w-32 transition-colors ${
          app.isComingSoon ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'
        }`}
        onClick={handleClick}
      >
        {app.isComingSoon ? (
            <span>Coming Soon</span>
        ) : (
          <>
            <DownloadIcon className="w-4 h-4" />
            <span>Download</span>
          </>
        )}
      </button>
    </div>
  );
};

export default AppListItem;
import React from 'react';
import { AppInfo } from '../types';
import { DownloadIcon } from './Icons';

interface TopAppsListProps {
  currentAppName: string;
  allApps: AppInfo[];
  onAppSelect: (app: AppInfo) => void;
}

const TopAppsList: React.FC<TopAppsListProps> = ({ currentAppName, onAppSelect, allApps }) => {
  const topApps = allApps
    .filter(app => !app.isComingSoon && app.name !== currentAppName && app.rank > 0)
    .sort((a,b) => a.rank - b.rank)
    .slice(0, 5);

  return (
    <div className="mt-10 rounded-lg pt-4 px-4">
      <h2 className="text-2xl font-bold text-center text-[#0f2e5c] mb-4">Top 5 Trending Apps</h2>
      <div className="space-y-3">
        {topApps.map((app) => (
          <div key={app.name} className="flex items-center p-3 border border-gray-200 rounded-lg space-x-3 bg-white hover:bg-red-50 transition-colors">
            <div className="w-6 text-center text-gray-500 font-bold text-lg">{app.rank}</div>
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
              <p className="text-xs text-gray-600">{app.details[0]}</p>
            </div>
            <a
              href={app.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-red-600 hover:bg-red-800 text-white rounded-full px-4 py-2 flex items-center justify-center space-x-1.5 font-semibold text-sm flex-shrink-0 w-32 transition-colors"
              aria-label={`Download ${app.name}`}
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAppsList;
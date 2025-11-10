import React, { useMemo } from 'react';
import { AppInfo } from '../types';
import { DownloadIcon, TelegramIcon, CheckIcon } from './Icons';
import TopAppsList from './TopAppsList';
import AppFAQ from './AppFAQ';

interface AppDetailPageProps {
  app: AppInfo;
  allApps: AppInfo[];
  onBack: () => void;
  onAppSelect: (app: AppInfo) => void;
}

const AppDetailPage: React.FC<AppDetailPageProps> = ({ app, allApps, onBack, onAppSelect }) => {

  const similarApps = useMemo(() => {
    return allApps
      .filter(a => a.name !== app.name && !a.isComingSoon && a.rank > 0)
      .slice(0, 4);
  }, [app.name, allApps]);

  return (
    <div className="bg-white pt-4 px-4 sm:pt-6 sm:px-6 shadow-md rounded-lg max-w-4xl mx-auto mt-4 sm:mt-8 font-sans">
      <button onClick={onBack} className="flex items-center text-blue-600 hover:underline mb-6 font-semibold">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        Back to list
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={app.image}
          alt={app.name}
          className="rounded-3xl shadow-lg flex-shrink-0"
          style={{
            width: app.imageWidth ? `${app.imageWidth}px` : '128px',
            height: app.imageHeight ? `${app.imageHeight}px` : '128px',
            objectFit: 'contain',
          }}
        />
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl font-bold text-[#0f2e5c]">{app.name}</h1>
          <ul className="mt-4 space-y-2 text-gray-600 list-none">
            {app.details.map((detail, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-lg">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href={app.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 flex items-center justify-center space-x-2.5 font-bold text-lg w-full max-w-xs h-14 disabled:opacity-75 disabled:cursor-not-allowed transition-transform transform hover:scale-105 transition-colors"
        >
          <DownloadIcon className="w-6 h-6" />
          <span>Download APK</span>
        </a>
        <a
          href="https://t.me/allnewteenpatti"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 flex items-center justify-center space-x-2.5 font-bold text-lg w-full max-w-xs h-14 transition-transform transform hover:scale-105 transition-colors"
        >
          <TelegramIcon className="w-6 h-6" />
          <span>Join Telegram</span>
        </a>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center text-[#0f2e5c] mb-4">Similar Apps</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {similarApps.map((similarApp) => (
            <div key={similarApp.name} className="flex-shrink-0 w-32 text-center p-2 border rounded-lg shadow-sm bg-white">
              <img
                src={similarApp.image}
                alt={similarApp.name}
                className="rounded-lg mx-auto mb-2"
                style={{
                    width: similarApp.imageWidth ? `${similarApp.imageWidth}px` : '80px',
                    height: similarApp.imageHeight ? `${similarApp.imageHeight}px` : '80px',
                    objectFit: 'contain',
                }}
              />
              <h3 className="font-semibold text-sm truncate h-10 flex items-center justify-center">{similarApp.name}</h3>
              <button 
                onClick={() => onAppSelect(similarApp)}
                className="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full px-4 py-1.5 text-xs font-semibold w-full transition-colors"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {app.faqs && app.faqs.length > 0 && <AppFAQ faqs={app.faqs} />}

      <TopAppsList allApps={allApps} currentAppName={app.name} onAppSelect={onAppSelect} />
    </div>
  );
};

export default AppDetailPage;
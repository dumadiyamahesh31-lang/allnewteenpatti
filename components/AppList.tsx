
import React, { useState, useMemo } from 'react';
import { TABS } from '../constants';
import { AppInfo } from '../types';
import AppListItem from './AppListItem';
import { TrendIcon, GiftIcon, AppsIcon } from './Icons';

const tabIcons: { [key: string]: React.ElementType } = {
    "Top Trending": TrendIcon,
    "New Teen Patti": GiftIcon,
    "All Yono Apps": AppsIcon
};

interface AppListProps {
  apps: AppInfo[];
  onAppSelect: (app: AppInfo) => void;
  searchTerm: string;
}

const AppList: React.FC<AppListProps> = ({ apps, onAppSelect, searchTerm }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const filteredApps = useMemo(() => {
    let appList = apps || [];
    
    // Tab filtering based on categories
    appList = appList.filter(app => app.categories?.includes(activeTab));

    // Search filtering
    if (searchTerm.trim() !== '') {
      const lowercasedTerm = searchTerm.toLowerCase();
      appList = appList.filter(app => {
        const nameMatch = app.name.toLowerCase().includes(lowercasedTerm);
        return nameMatch;
      });
    }

    return appList;
  }, [activeTab, apps, searchTerm]);

  return (
    <section className="bg-white">
      <div className="flex border-b-2 border-gray-200">
        {TABS.map((tab) => {
            const Icon = tabIcons[tab];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center font-semibold text-gray-600 flex items-center justify-center space-x-2 border-r last:border-r-0
                  ${activeTab === tab ? 'bg-gray-100 border-b-4 border-blue-800 text-blue-800' : ''}`}
              >
                {Icon && <Icon className="w-5 h-5"/>}
                <span>{tab}</span>
              </button>
            )
        })}
      </div>
      <div>
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <AppListItem key={app.name} app={app} onSelect={onAppSelect} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">No apps found.</p>
        )}
      </div>
    </section>
  );
};

export default AppList;

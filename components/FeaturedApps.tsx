import React from 'react';
import { StarIcon, CheckIcon, DownloadIcon } from './Icons';
import { FeaturedApp } from '../types';

interface FeaturedAppsProps {
    apps: FeaturedApp[];
    onAppSelect: (appName: string) => void;
}

const FeaturedApps: React.FC<FeaturedAppsProps> = ({ apps, onAppSelect }) => {

    return (
        <section className="bg-white p-3 pt-6 pb-4">
            <div className="flex justify-around items-start space-x-2">
                {apps.sort((a,b)=>a.rank-b.rank).map((app, index) => {
                    // Elevate the middle card (index 1) and lower the side cards
                    const alignmentClass = index === 1 ? 'transform -translate-y-3' : 'transform translate-y-2';
                    return (
                        <div key={app.name} className={`w-1/3 flex flex-col items-center text-center relative p-2 transition-transform duration-300 ${alignmentClass}`}>
                            <img
                                src={app.image}
                                alt={app.name}
                                className="rounded-2xl mb-2 shadow-md"
                                style={{
                                    width: app.imageWidth ? `${app.imageWidth}px` : '80px',
                                    height: app.imageHeight ? `${app.imageHeight}px` : '80px',
                                    objectFit: 'contain',
                                }}
                            />
                            <h3 className="font-bold text-sm truncate w-full">{app.name}</h3>
                            <div className="flex my-1">
                                {[...Array(app.rating)].map((_, i) => (
                                    <StarIcon key={i} className="w-4 h-4 text-yellow-400"/>
                                ))}
                            </div>
                            <div className="flex items-center justify-center space-x-1 text-green-600 text-xs font-semibold">
                                <div className="bg-green-600 rounded-full p-0.5">
                                    <CheckIcon className="w-2 h-2 text-white"/>
                                </div>
                                <span>{app.securityText}</span>
                            </div>
                            <button
                                onClick={() => onAppSelect(app.name)}
                                className="mt-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-3 py-1.5 flex items-center justify-center space-x-1.5 font-semibold text-xs w-28 h-8 transition-colors"
                            >
                                <DownloadIcon className="w-4 h-4" />
                                <span>Download</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturedApps;
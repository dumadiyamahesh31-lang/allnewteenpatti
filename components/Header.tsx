
import React from 'react';
import { MenuIcon, HeartIcon } from './Icons';

interface HeaderProps {
  onMenuClick: () => void;
  siteLogoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, siteLogoUrl }) => {

  return (
    <header className="bg-[#0f2e5c] text-white flex items-center justify-between p-2 shadow-md relative z-20">
      <div className="flex items-center space-x-2">
        <img src={siteLogoUrl} alt="All New Teen Patti Logo" className="h-10 w-10 rounded-lg" />
        <div className="flex items-center">
            <span className="text-xl font-bold italic text-yellow-300">AllNew</span>
            <span className="text-xl font-bold italic">TeenPatti.com</span>
            <HeartIcon className="w-4 h-4 text-red-500 ml-1"/>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onMenuClick} className="flex items-center space-x-1.5 font-semibold">
          <MenuIcon className="w-6 h-6" />
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
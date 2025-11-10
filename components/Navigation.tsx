import React from 'react';
import { HomeIcon, GamesIcon, ContactIcon, PrivacyIcon, AboutIcon, AdminIcon } from './Icons';
import { View } from '../App';

const navItems: { name: View, icon: React.FC<{className?: string}> }[] = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Games', icon: GamesIcon },
  { name: 'Contact', icon: ContactIcon },
  { name: 'Privacy', icon: PrivacyIcon },
  { name: 'About', icon: AboutIcon },
  { name: 'Admin', icon: AdminIcon },
];

interface NavigationProps {
    activeView: View;
    setView: (view: View) => void;
    isAdminAuthenticated: boolean;
}

const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>, 
    itemName: View, 
    activeView: View, 
    setView: (view: View) => void
  ) => {
    e.preventDefault();

    const isMainView = (v: View) => v === 'Home' || v === 'Games';
    
    // Special handling to scroll to games section from other pages
    if (!isMainView(activeView) && isMainView(itemName)) {
      setView('Home'); // Switch to home first to ensure the main content is rendered
      requestAnimationFrame(() => { // then scroll
        if (itemName === 'Games') {
          document.getElementById('games-section')?.scrollIntoView({ behavior: 'smooth' });
        } else { 
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    } else { 
      setView(itemName);
      if (itemName === 'Games') {
        document.getElementById('games-section')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        if (itemName !== 'Admin') { // Don't scroll for admin page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

const TopNav: React.FC<NavigationProps> = ({ activeView, setView, isAdminAuthenticated }) => {
  return (
    <nav className="hidden sm:block bg-white shadow-sm">
      <ul className="flex justify-around items-stretch text-sm">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeView === item.name;
          return (
            <li
              key={index}
              className={`flex-1 flex items-center justify-center py-2 px-1 text-center font-semibold transition-colors duration-200 ${
                isActive
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <a href="#" onClick={(e) => handleNavClick(e, item.name, activeView, setView)} className="flex items-center space-x-1">
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const BottomNav: React.FC<NavigationProps> = ({ activeView, setView, isAdminAuthenticated }) => {
    return (
        <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <ul className="flex justify-around items-center h-16">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeView === item.name;
              return (
                <li key={index} className="flex-1 h-full">
                  <a href="#" 
                     onClick={(e) => handleNavClick(e, item.name, activeView, setView)} 
                     className={`flex flex-col items-center justify-center space-y-1 w-full h-full transition-colors duration-200 ${
                       isActive ? 'text-red-600' : 'text-gray-500 hover:text-red-500'
                     }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs font-semibold">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      );
};

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <>
      <TopNav {...props} />
      <BottomNav {...props} />
    </>
  );
};

export default Navigation;
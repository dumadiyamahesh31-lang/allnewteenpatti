import React from 'react';
import { View } from '../App';
import { HomeIcon, GamesIcon, ContactIcon, PrivacyIcon, AboutIcon, AdminIcon } from './Icons';

const navItems: { name: View, icon: React.FC<{className?: string}> }[] = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Games', icon: GamesIcon },
  { name: 'Contact', icon: ContactIcon },
  { name: 'Privacy', icon: PrivacyIcon },
  { name: 'About', icon: AboutIcon },
  { name: 'Admin', icon: AdminIcon },
];

interface MobileMenuProps {
  onClose: () => void;
  setView: (view: View) => void;
  activeView: View;
  isAdminAuthenticated: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, setView, activeView, isAdminAuthenticated }) => {
  
  const handleNavClick = (view: View) => {
    const isMainView = (v: View) => v === 'Home' || v === 'Games';
    
    if (!isMainView(activeView) && isMainView(view)) {
      setView('Home'); 
      requestAnimationFrame(() => {
        if (view === 'Games') {
          document.getElementById('games-section')?.scrollIntoView({ behavior: 'smooth' });
        } else { 
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    } else { 
      setView(view);
      if (view === 'Games') {
        document.getElementById('games-section')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out" onClick={onClose}>
      <div className="fixed top-0 right-0 h-full w-64 bg-[#0f2e5c] text-white p-4 shadow-lg transition-transform transform duration-300 ease-in-out translate-x-0" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={onClose} className="text-white p-1 rounded-full hover:bg-white/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <nav>
          <ul>
            {navItems.map(item => (
              <li key={item.name} className="mb-4">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name);
                  }}
                  className={`flex items-center space-x-3 text-lg p-2 rounded-md transition-colors ${activeView === item.name ? 'bg-red-600' : 'hover:bg-white/10'}`}
                >
                  <item.icon className="w-6 h-6" />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
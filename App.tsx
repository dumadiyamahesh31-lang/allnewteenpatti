
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FeaturedApps from './components/FeaturedApps';
import SearchBar from './components/SearchBar';
import AppList from './components/AppList';
import WhatsAppButton from './components/WhatsAppButton';
import TelegramButton from './components/TelegramButton';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
import AboutPage from './components/AboutPage';
import TermsPage from './components/TermsPage';
import DisclaimerPage from './components/DisclaimerPage';
import { AppInfo, FeaturedApp } from './types';
import AppDetailPage from './components/AppDetailPage';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import MobileMenu from './components/MobileMenu';
import KeywordSlider from './components/KeywordSlider';
import { APP_LIST, FEATURED_APPS } from './constants';
import NoticeSlider from './components/NoticeSlider';


export type View = 'Home' | 'Games' | 'Contact' | 'Privacy' | 'About' | 'Admin' | 'Terms' | 'Disclaimer';

const App: React.FC = () => {
  const [view, setView] = useState<View>('Home');
  const [selectedApp, setSelectedApp] = useState<AppInfo | null>(null);
  const [appList, setAppList] = useState<AppInfo[]>(APP_LIST);
  const [featuredApps, setFeaturedApps] = useState<FeaturedApp[]>(FEATURED_APPS);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [siteLogoUrl, setSiteLogoUrl] = useState<string>(() => {
    return localStorage.getItem('siteLogoUrl') || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADhAOEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/v4ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=";
  });

  const allKeywords = useMemo(() => {
    const allTags = appList.flatMap(app => app.tags || []);
    return [...new Set(allTags)];
  }, [appList]);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('isAdminLoggedIn');
    if (loggedIn === 'true') {
      setIsAdminAuthenticated(true);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('siteLogoUrl', siteLogoUrl);
  }, [siteLogoUrl]);

  useEffect(() => {
    const originalTitle = "All new teen patti";
    if (selectedApp) {
      document.title = selectedApp.postTitle || `${selectedApp.name} | allnewteenpatti.com`;
    } else {
      document.title = originalTitle;
    }

    return () => {
      document.title = originalTitle;
    };
  }, [selectedApp]);

  const handleAppSelect = (app: AppInfo) => {
    setSelectedApp(app);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetail = () => {
    setSelectedApp(null);
  };
  
  const handleLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    sessionStorage.setItem('isAdminLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('isAdminLoggedIn');
    setView('Home');
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };


  const renderMainContent = () => (
    <>
      <FeaturedApps apps={featuredApps} onAppSelect={(name) => {
        const app = appList.find(a => a.name === name);
        if (app) handleAppSelect(app);
      }} />
      <div className="my-2">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div id="games-section">
        <AppList apps={appList} onAppSelect={handleAppSelect} searchTerm={searchTerm} />
      </div>
    </>
  );

  const renderContent = () => {
    if (selectedApp) {
      return <AppDetailPage app={selectedApp} allApps={appList} onBack={handleBackFromDetail} onAppSelect={handleAppSelect} />;
    }

    switch (view) {
      case 'Home':
      case 'Games':
        return renderMainContent();
      case 'Contact':
        return <ContactPage />;
      case 'Privacy':
        return <PrivacyPage />;
      case 'About':
        return <AboutPage />;
      case 'Terms':
        return <TermsPage />;
      case 'Disclaimer':
        return <DisclaimerPage />;
      case 'Admin':
        return isAdminAuthenticated ? (
          <AdminPage 
            apps={appList} 
            setApps={setAppList} 
            featuredApps={featuredApps} 
            setFeaturedApps={setFeaturedApps}
            onLogout={handleLogout}
            siteLogoUrl={siteLogoUrl}
            setSiteLogoUrl={setSiteLogoUrl}
          />
        ) : (
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        );
      default:
        return renderMainContent();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header onMenuClick={toggleMenu} siteLogoUrl={siteLogoUrl} />
      <Navigation activeView={view} setView={setView} isAdminAuthenticated={isAdminAuthenticated}/>
      <main className="pb-20 sm:pb-4">
        {renderContent()}
      </main>
      {isMenuOpen && <MobileMenu onClose={toggleMenu} setView={setView} activeView={view} isAdminAuthenticated={isAdminAuthenticated} />}
      <WhatsAppButton />
      <TelegramButton />
      {selectedApp && selectedApp.tags && selectedApp.tags.length > 0 && (
        <KeywordSlider keywords={selectedApp.tags} />
      )}
      {(view === 'Home' || view === 'Games') && <NoticeSlider keywords={allKeywords} />}
      <Footer setView={setView} />
    </div>
  );
};

export default App;

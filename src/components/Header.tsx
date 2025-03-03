
import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  showBack?: boolean;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ showBack = false, title = 'Newsfeed' }) => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-3 px-4">
      <div className="flex items-center justify-between">
        {showBack ? (
          <button 
            onClick={() => navigate(-1)} 
            className="p-1 -ml-1 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : (
          <div className="flex items-center">
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
        )}
        
        <div className="flex items-center gap-3">
          <button 
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Home, Newspaper, Bookmark, Settings } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`bottom-nav-item ${path === '/' ? 'active' : ''}`}>
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link to="/discover" className={`bottom-nav-item ${path === '/discover' ? 'active' : ''}`}>
        <Newspaper size={20} />
        <span>Discover</span>
      </Link>
      <Link to="/saved" className={`bottom-nav-item ${path === '/saved' ? 'active' : ''}`}>
        <Bookmark size={20} />
        <span>Saved</span>
      </Link>
      <Link to="/settings" className={`bottom-nav-item ${path === '/settings' ? 'active' : ''}`}>
        <Settings size={20} />
        <span>Settings</span>
      </Link>
    </nav>
  );
};

export default BottomNav;

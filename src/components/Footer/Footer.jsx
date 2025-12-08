import React from 'react';
import './Footer.scss';

const Footer = ({ activeTab = 'home' }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home.png' },
    { id: 'browse', label: 'Browse', icon: 'search.png' },
    { id: 'favourites', label: 'Favourites', icon: 'heart.png', badge: 2 },
    { id: 'cart', label: 'Cart', icon: 'cart.png' },
    { id: 'profile', label: 'Profile', icon: 'profile.png' }
  ];

  return (
    <footer className="footer">
      <div className="footer__nav">
        {navItems.map(item => (
          <button 
            key={item.id}
            className={`footer__nav-item ${activeTab === item.id ? 'footer__nav-item--active' : ''}`}
          >
            <div className="footer__icon-wrapper">
              <img 
                src={`/src/assets/${item.icon}`} 
                alt={item.label}
                className="footer__icon"
              />
              {item.badge && (
                <span className="footer__badge">{item.badge}</span>
              )}
            </div>
            <span className="footer__label">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="footer__indicator"></div>
    </footer>
  );
};

export default Footer;
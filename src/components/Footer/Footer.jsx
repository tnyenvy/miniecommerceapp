import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './Footer.scss';

const Footer = ({ cartCount = 0, favouriteCount = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: 'home.png' },
    { path: '/browse', label: 'Browse', icon: 'search.png' },
    { path: '/favourites', label: 'Favourites', icon: 'heart.png', badge: favouriteCount }, 
    { path: '/cart', label: 'Cart', icon: 'cart.png', badge: cartCount },
    { path: '/profile', label: 'Profile', icon: 'profile.png' }
  ];

  return (
    <footer className="footer">
      <div className="footer__nav">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <button 
              key={index}
              className={`footer__nav-item ${isActive ? 'footer__nav-item--active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <div className="footer__icon-wrapper">
                <img 
                  src={`/src/assets/${item.icon}`} 
                  alt={item.label}
                  className="footer__icon"
                />
                {/* Chỉ hiện badge nếu có số lượng > 0 */}
                {item.badge > 0 && (
                  <span className="footer__badge">{item.badge}</span>
                )}
              </div>
              <span className="footer__label">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="footer__indicator"></div>
    </footer>
  );
};

export default Footer;
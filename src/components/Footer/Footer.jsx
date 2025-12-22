import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { useAtomValue } from 'jotai'; 
import { cartItemsAtom, favouriteItemsAtom } from '../../state/store.js'; 
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // --- Lấy dữ liệu từ atoms ---
  const cartItems = useAtomValue(cartItemsAtom);
  const favouriteItems = useAtomValue(favouriteItemsAtom);

  // Tính toán số lượng
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const favouriteCount = favouriteItems.length;

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
          const isActive = item.path === '/' 
            ? location.pathname === '/' 
            : location.pathname.startsWith(item.path);

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
                  onError={(e) => e.target.style.display = 'none'}
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
    </footer>
  );
};

export default Footer;
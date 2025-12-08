import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = ({ userName = 'Michael' }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar__time">{currentTime}</div>
        <div className="status-bar__notch"></div>
        <div className="status-bar__icons">
          <svg className="status-bar__icon status-bar__icon--signal" width="16" height="12" viewBox="0 0 16 12" fill="none">
            <rect x="0.5" y="6.5" width="2" height="4" rx="0.6" fill="currentColor"/>
            <rect x="4.5" y="4.5" width="2" height="6" rx="0.6" fill="currentColor"/>
            <rect x="8.5" y="2.5" width="2" height="8" rx="0.6" fill="currentColor"/>
            <rect x="12.5" y="0.5" width="2" height="10" rx="0.6" fill="currentColor"/>
          </svg>
          <svg className="status-bar__icon status-bar__icon--wifi" width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 10.5C8.82843 10.5 9.5 9.82843 9.5 9C9.5 8.17157 8.82843 7.5 8 7.5C7.17157 7.5 6.5 8.17157 6.5 9C6.5 9.82843 7.17157 10.5 8 10.5Z" fill="currentColor"/>
            <path d="M4.5 6C5.5 5 6.5 4.5 8 4.5C9.5 4.5 10.5 5 11.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M2 3C4 1 6 0.5 8 0.5C10 0.5 12 1 14 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <svg className="status-bar__icon status-bar__icon--battery" width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="1.5" width="20" height="9" rx="2" stroke="currentColor" strokeOpacity="0.4"/>
            <rect x="2" y="3" width="17" height="6" rx="1" fill="currentColor"/>
            <path d="M21.5 4.5V7.5C22.5 7.2 23 6.5 23 6C23 5.5 22.5 4.8 21.5 4.5Z" fill="currentColor" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>

      <h1 className="header__greeting">Hello {userName}</h1>
      <nav className="header__nav">
        <button className="header__nav-item header__nav-item--active">All</button>
        <button className="header__nav-item">Audio</button>
        <button className="header__nav-item">Drones + Electronics</button>
        <button className="header__nav-item">Photo + Video</button>
      </nav>
    </header>
  );
};

export default Header;
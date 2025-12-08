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
      {/* --- STATUS BAR --- */}
      <div className="status-bar">
        <div className="status-bar__time">{currentTime}</div>
        <div className="status-bar__notch"></div>
        <div className="status-bar__icons">
          {/* Signal Icon */}
          <svg className="status-bar__icon status-bar__icon--signal" width="17" height="11" viewBox="0 0 17 11" fill="none">
            <path d="M1 7.5C1 7.22386 1.22386 7 1.5 7H2.5C2.77614 7 3 7.22386 3 7.5V10C3 10.2761 2.77614 10.5 2.5 10.5H1.5C1.22386 10.5 1 10.2761 1 10V7.5Z" fill="#000"/>
            <path d="M5.5 5C5.22386 5 5 5.22386 5 5.5V10C5 10.2761 5.22386 10.5 5.5 10.5H6.5C6.77614 10.5 7 10.2761 7 10V5.5C7 5.22386 6.77614 5 6.5 5H5.5Z" fill="#000"/>
            <path d="M9.5 2.5C9.22386 2.5 9 2.72386 9 3V10C9 10.2761 9.22386 10.5 9.5 10.5H10.5C10.7761 10.5 11 10.2761 11 10V3C11 2.72386 10.7761 2.5 10.5 2.5H9.5Z" fill="#000"/>
            <path d="M13.5 0.5C13.2239 0.5 13 0.723858 13 1V10C13 10.2761 13.2239 10.5 13.5 10.5H14.5C14.7761 10.5 15 10.2761 15 10V1C15 0.723858 14.7761 0.5 14.5 0.5H13.5Z" fill="#000"/>
          </svg>
          {/* Wifi Icon */}
          <svg className="status-bar__icon status-bar__icon--wifi" width="16" height="11" viewBox="0 0 16 11" fill="none">
            <path d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z" fill="#000"/>
            <path d="M4.5 5C5.5 4 6.5 3.5 8 3.5C9.5 3.5 10.5 4 11.5 5" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M2 2C4 0 6 -0.5 8 -0.5C10 -0.5 12 0 14 2" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {/* Battery Icon */}
          <svg className="status-bar__icon status-bar__icon--battery" width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="1.5" width="20" height="9" rx="2.5" stroke="#000" strokeOpacity="0.4"/>
            <rect x="2" y="3" width="17" height="6" rx="1.5" fill="#000"/>
            <path d="M22 4.5V7.5C23 7.2 23.5 6.5 23.5 6C23.5 5.5 23 4.8 22 4.5Z" fill="#000" fillOpacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* --- CONTENT --- */}
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
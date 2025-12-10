import React from 'react';
import './Header.scss';

const Header = ({ userName = 'Michael', activeTab, onTabChange }) => {
  
  // Danh sách các tab
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'audio', label: 'Audio' },
    { id: 'drones', label: 'Drones + Electronics' },
    { id: 'photo', label: 'Photo + Video' }
  ];

  return (
    <header className="header">
      <h1 className="header__greeting">Hello {userName}</h1>
      
      <nav className="header__nav">
        {tabs.map(tab => (
          <button 
            key={tab.id}
            className={`header__nav-item ${activeTab === tab.id ? 'header__nav-item--active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import { Tabs } from 'zmp-ui';
import './Header.scss';

const Header = ({ userName = 'Michael', activeTab, onTabChange }) => {
  
  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'audio', label: 'Audio' },
    { key: 'drones', label: 'Drones + Electronics' },
    { key: 'photo', label: 'Photo + Video' }
  ];

  const renderTabBar = () => {
    return (
      <div className="custom-tab-bar">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`custom-tab-bar__item ${activeTab === tab.key ? 'custom-tab-bar__item--active' : ''}`}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };

  return (
    <header className="header">
      <h1 className="header__greeting">Hello {userName}</h1>
      
      <Tabs 
        id="header-tabs"
        activeKey={activeTab}
        onChange={(key) => onTabChange(key)}
        renderTabBar={renderTabBar}
      >
        <Tabs.Tab key="all" />
        <Tabs.Tab key="audio" />
        <Tabs.Tab key="drones" />
        <Tabs.Tab key="photo" />
      </Tabs>
    </header>
  );
};

export default Header;
import React from 'react';
import './Header.scss';
import StatusBar from '../StatusBar/StatusBar.jsx';

const Header = ({ userName = 'Michael' }) => {

  return (
    <header className="header"> <StatusBar />
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
import React from 'react';
import './Header.scss';

const Header = ({ userName = 'Michael' }) => {
  return (
    <header className="header">
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
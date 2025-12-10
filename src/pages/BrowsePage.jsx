import React from 'react';
import { useNavigate } from 'zmp-ui';
import Footer from '../components/Footer/Footer.jsx'; 
import '../css/browse.scss'; 

const BrowsePage = ({ cartCount }) => {
  const navigate = useNavigate();
  
  const categories = [
    'Audio', 'Drones + Electronics', 'Photo + Video', 'Gaming + VR',
    'Networking', 'Notebooks + PCs', 'PC components', 'Peripherals',
    'Smartphones + Tablets', 'Software solutions', 'TV + Home cinema'
  ];

  const handleCategoryClick = (category) => {
    navigate('/category', { state: { categoryName: category } });
  };

  return (
    <div className="browse-page">
      {/* Search Bar */}
      <div className="browse-page__header">
        <div className="search-box">
          <input type="text" placeholder="Search" className="search-box__input" />
          <svg className="search-box__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#ACB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21L16.65 16.65" stroke="#ACB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>

      <div className="browse-page__list">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className="category-item"
            onClick={() => handleCategoryClick(item)}
          >
            <span className="category-item__text">{item}</span>
            <svg className="category-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        ))}
      </div>

      <Footer cartCount={cartCount} />
    </div>
  );
};

export default BrowsePage;
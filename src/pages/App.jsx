import React, { useState } from 'react';
import HomePage from './index.jsx'; 
import BrowsePage from './BrowsePage.jsx';
import CategoryPage from './CategoryPage.jsx';
import Footer from '../components/Footer/Footer.jsx'; 
import '../css/app.scss';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const [selectedCategory, setSelectedCategory] = useState(null); 

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName); 
    setActiveTab('category-detail');
  };

  const PlaceholderPage = ({ title }) => (
    <div className="page-placeholder">
      <h2>{title}</h2>
      <p>Tính năng đang được phát triển.</p>
      <Footer activeTab={activeTab} onNavigate={setActiveTab} />
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} />;
        
      case 'browse':
        return <BrowsePage onNavigate={setActiveTab} onCategoryClick={handleCategoryClick} />;
        
      case 'category-detail':
        return (
          <CategoryPage 
            categoryName={selectedCategory} 
            onBack={() => setActiveTab('browse')} 
            onNavigate={setActiveTab} 
          />
        );
        
      case 'favourites': return <PlaceholderPage title="Favourites" />;
      case 'cart': return <PlaceholderPage title="My Cart" />;
      case 'profile': return <PlaceholderPage title="Profile" />;
      default: return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      {renderContent()}
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer.jsx';
import StatusBar from '../components/StatusBar/StatusBar.jsx';
import '../css/productdetail.scss'; 

const ProductDetailPage = ({ product, onBack, onNavigate }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const defaultProduct = {
    image: '/src/assets/sony-headphones-black.png',
    title: 'SONY Premium Wireless Headphones',
    price: '349.99',
    model: 'Model: WH-1000XM4, Black',
    description: 'The technology with two noise sensors and two microphones on each ear cup detects ambient noise and sends the data to the HD noise minimization processor QN1. Using a new algorithm, the QN1 then processes and minimizes noise for different acoustic environments in real time. Together with a new Bluetooth Audio SoC.'
  };

  const currentProduct = product || defaultProduct;
  
  const descriptionToShow = currentProduct.description || defaultProduct.description;

  return (
    <div className="product-detail-page">
      <StatusBar />
      <div className="product-detail-page__status-placeholder"></div>

      {/* --- HEADER --- */}
      <div className="product-detail-page__header">
        <button className="icon-btn" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        
        <h2 className="header-title">Headphones</h2>
        
        <button className="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="product-detail-page__content">
        
        {/* KHUNG SP */}
        <div className="product-image-container">
          <img src={currentProduct.image} alt={currentProduct.title} className="product-image" />
          
          <div className="floating-actions">
            
            {/* NÚT TIM */}
            <button 
              className="action-btn" 
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              )}
            </button>

            <button className="action-btn">
              {/* Icon Cart */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </button>
          </div>
        </div>

        {/* THÔNG TIN SP */}
        <div className="product-info">
          <div className="product-price">${currentProduct.price}</div>
          <h1 className="product-title">{currentProduct.title}</h1>
          <p className="product-model">{currentProduct.model}</p>
        </div>

        {/* MÔ TẢ  */}
        <div className="product-description">
          <p>{descriptionToShow}</p>
        </div>
      </div>

      <Footer activeTab="browse" onNavigate={onNavigate} />
    </div>
  );
};

export default ProductDetailPage;
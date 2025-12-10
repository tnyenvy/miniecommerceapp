import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer.jsx';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import '../css/category.scss';

const CategoryPage = ({ cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const categoryName = location.state?.categoryName || "Headphones";

  const products = [
    {
      image: '/src/assets/sony-headphones-black.png',
      title: 'SONY Premium Wireless Headphones',
      price: '349.99',
      model: 'Model: WH-1000XM4, Black'
    },
    {
      image: '/src/assets/sony-headphones-beige.png',
      title: 'SONY Premium Wireless Headphones',
      price: '349.99',
      model: 'Model: WH-1000XM4, Beige'
    },
    {
      image: '/src/assets/apple-airpods-max.png',
      title: 'APPLE AirPods Pro MagSafe Case',
      price: '179.00',
      model: 'NC, 4 h, Wireless'
    },
    {
      image: '/src/assets/samsung-buds.png',
      title: 'SAMSUNG Galaxy Buds 2 Pro',
      price: '119.99',
      originalPrice: '149.99',
      model: 'NC, 6 h, Wireless'
    },
    {
      image: '/src/assets/rode-podmic.png',
      title: 'RØDE PodMic',
      price: '108.20',
      model: 'Dynamic Microphone'
    },
    {
      image: '/src/assets/speaker.png',
      title: 'GOOGLE Nest Mini',
      price: '70.99',
      model: 'Google Assistant, IFTTT'
    },
  ];

  return (
    <div className="category-page">
      <div className="category-page__sticky-wrapper">

        {/* --- HEADER --- */}
        <div className="category-page__header">
          {/* Nút Back */}
          <button className="icon-btn" onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <h2 className="header-title">{categoryName}</h2>

          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* --- FILTER BAR --- */}
        <div className="category-page__filter-bar">
          <button className="filter-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 21V14" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 10V3" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 21V12" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8V3" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 21V16" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 12V3" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 14H7" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 8H15" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 16H23" stroke="#212429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button className="filter-chip">
            Category <svg className="chevron-down" width="12" height="8" viewBox="0 0 12 8">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#212429" strokeWidth="1.5" />
            </svg>
          </button>

          <button className="filter-chip">
            Brand <svg className="chevron-down" width="12" height="8" viewBox="0 0 12 8">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#212429" strokeWidth="1.5" />
            </svg>
          </button>

          <button className="filter-chip">
            Price <svg className="chevron-down" width="12" height="8" viewBox="0 0 12 8">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#212429" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        {/* --- SORT BAR --- */}
        <div className="category-page__sort-bar">
          <span className="product-count">{products.length} products</span>

          <span className="sort-text">
            Sort by <b>Relevance</b>
            <svg className="chevron-down" width="12" height="8" viewBox="0 0 12 8" style={{ marginLeft: 6 }}>
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#212429" strokeWidth="1.5" />
            </svg>
          </span>
        </div>
      </div>

      {/* --- GRID LIST PRODUCT --- */}
      <div className="category-page__grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            size="small"
            {...product}
            onClick={() => navigate('/product', { state: { product } })}
          />
        ))}
      </div>

      {/* FOOTER */}
      <Footer cartCount={cartCount} />
    </div>
  );
};

export default CategoryPage;

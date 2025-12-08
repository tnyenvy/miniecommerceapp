import React, { useState } from 'react';
import './ProductCard.scss';

const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  category, 
  description,
  model,
  size = 'large'
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Kiểm tra giảm giá để đổi màu text
  const isDiscounted = !!originalPrice;

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`product-card product-card--${size}`}>
      
      <button 
        className="product-card__favorite" 
        onClick={handleFavoriteClick}
      >
        {isFavorite ? '🖤' : '🤍'}
      </button>

      {/* KHUNG ẢNH */}
      <div className="product-card__image-wrapper">
        <img src={image} alt={title} className="product-card__image" />
      </div>

      {/* KHUNG THÔNG TIN */}
      <div className="product-card__info">
        {size === 'large' && category && (
          <p className="product-card__category">{category}</p>
        )}
        
        <div className="product-card__price-wrapper">
          <span className={`product-card__price ${isDiscounted ? 'product-card__price--discount' : ''}`}>
            ${price}
          </span>
          {originalPrice && (
            <span className="product-card__original-price">${originalPrice}</span>
          )}
        </div>
        
        <h3 className="product-card__title">{title}</h3>
        
        {size === 'large' && description && (
          <p className="product-card__description">{description}</p>
        )}
        
        {size === 'small' && model && (
          <p className="product-card__model">{model}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
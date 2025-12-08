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

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`product-card product-card--${size}`}>
      <button 
        className="product-card__favorite"
        onClick={toggleFavorite}
      >
        {isFavorite ? '🖤' : '🤍'}
      </button>
      
      <div className="product-card__image-wrapper">
        <img 
          src={image} 
          alt={title}
          className="product-card__image"
        />
      </div>
      
      <div className="product-card__info">
        {size === 'large' && category && (
          <p className="product-card__category">{category}</p>
        )}
        
        <div className="product-card__price-wrapper">
          <span className="product-card__price">${price}</span>
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
      
      {size === 'large' && (
        <div className="product-card__indicators">
          <span className="product-card__indicator product-card__indicator--active"></span>
          <span className="product-card__indicator"></span>
          <span className="product-card__indicator"></span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
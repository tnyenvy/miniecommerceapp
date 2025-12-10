import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ 
  image, title, price, originalPrice, category, description, model, 
  size = 'large', 
  onClick,
  isFavorite,      
  onToggleFavorite 
}) => {
  const isDiscounted = !!originalPrice;

  const handleFavoriteClick = (e) => {
    // 1. Chặn sự kiện click lan ra ngoài (để không kích hoạt onClick của card)
    e.stopPropagation(); 
    
    // 2. Gọi hàm từ cha (Chỉ báo hiệu là "đã bấm", không cần truyền 'e' nữa)
    if (onToggleFavorite) {
      onToggleFavorite(); 
    }
  };

  return (
    <div className={`product-card product-card--${size}`} onClick={onClick}>
      
      <button 
        className="product-card__favorite" 
        onClick={handleFavoriteClick}
      >
        {isFavorite ? '🖤' : '🤍'}
      </button>

      {/* Các phần hiển thị ảnh và thông tin giữ nguyên */}
      <div className="product-card__image-wrapper">
        <img src={image} alt={title} className="product-card__image" />
      </div>

      <div className="product-card__info">
        {size === 'large' && category && <p className="product-card__category">{category}</p>}
        <div className="product-card__price-wrapper">
          <span className={`product-card__price ${isDiscounted ? 'product-card__price--discount' : ''}`}>${price}</span>
          {originalPrice && <span className="product-card__original-price">${originalPrice}</span>}
        </div>
        <h3 className="product-card__title">{title}</h3>
        {size === 'large' && description && <p className="product-card__description">{description}</p>}
        {size === 'small' && model && <p className="product-card__model">{model}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
import React from 'react';
import { useNavigate } from 'zmp-ui';
import ActionMenu from '../ActionMenu/ActionMenu.jsx';
import './FavouriteItem.scss'; 

const FavouriteItem = ({ item, onAddToCart, onRemove }) => {
  const navigate = useNavigate();

  return (
    <div className="favourite-item">
      {/* Ảnh */}
      <div 
        className="favourite-item__image-wrapper"
        onClick={() => navigate('/product', { state: { product: item } })}
      >
        <img src={item.image} alt={item.title} />
      </div>

      {/* Thông tin */}
      <div className="favourite-item__info">
        <div className="favourite-item__price">
          <span className={item.originalPrice ? 'discount-price' : ''}>
            ${item.price}
          </span>
          {item.originalPrice && (
            <span className="original-price">${item.originalPrice}</span>
          )}
        </div>
        <h3 className="favourite-item__title">{item.title}</h3>
        <p className="favourite-item__model">{item.subtitle || item.model}</p>
      </div>

      <div className="favourite-item__actions">
        <button 
          className="btn-cart" 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(item);
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </button>
        
        {/* Menu xóa */}
        <ActionMenu onDelete={() => onRemove(item.id)} />
      </div>
    </div>
  );
};

export default FavouriteItem;
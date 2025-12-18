import React from 'react';
import { useNavigate } from 'zmp-ui';
import ActionMenu from '../ActionMenu/ActionMenu.jsx';
import './CartItem.scss';

const CartItem = ({ item, updateQuantity, onRemove }) => {
  const navigate = useNavigate();

  // Kiểm tra giảm giá
  const hasDiscount = item.originalPrice && (item.originalPrice > item.price);

  return (
    <div className="cart-item">
      {/* ẢNH */}
      <div 
        className="cart-item__image-wrapper"
        onClick={() => navigate('/product', { state: { product: item } })}
      >
        <img 
            src={item.image} 
            alt={item.title} 
            onError={(e) => e.target.src = 'https://via.placeholder.com/80'} // Fallback nếu ảnh lỗi
        />
      </div>

      {/* THÔNG TIN */}
      <div className="cart-item__info">
        
        {/* Giá */}
        <div className="cart-item__price-row">
           <span className={`cart-item__price ${hasDiscount ? 'cart-item__price--discount' : ''}`}>
             ${item.price.toFixed(2)}
           </span>
           {hasDiscount && (
             <span className="cart-item__original-price">${item.originalPrice}</span>
           )}
        </div>

        {/* Tên SP */}
        <h3 className="cart-item__title">{item.title}</h3>

        {/* Model/Subtitle */}
        <p className="cart-item__model">
           {item.model || 'No description'}
        </p>
      </div>

      {/* NÚT TĂNG GIẢM */}
      <div className="cart-item__controls">
        <button 
          className="qty-btn qty-btn--minus" 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        > - </button>
        
        <span className="qty-value">{item.quantity}</span>
        
        <button 
          className="qty-btn qty-btn--plus" 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        > + </button>
      </div>

      {/* NÚT XÓA */}
      <div className="cart-item__more-btn-wrapper">
         <ActionMenu onDelete={() => onRemove(item.id)} />
      </div>
    </div>
  );
};

export default CartItem;
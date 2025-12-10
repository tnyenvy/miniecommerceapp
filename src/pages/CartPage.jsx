import React from 'react';
import { useNavigate } from 'zmp-ui';
import Footer from '../components/Footer/Footer.jsx';
import '../css/cart.scss';

const CartPage = ({ cartItems, updateQuantity, cartCount }) => {
  const navigate = useNavigate();

  // Tính tổng tiền thêo cartItems
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const paymentIcons = [
    'paypal.png', 'visa.png', 'mastercard.png', 'ggpay.png', 'applepay.png', 'amex.png'
  ];

  return (
    <div className="cart-page">
      {/* --- HEADER --- */}
      <div className="cart-page__header">
        <h2 className="header-title">Cart</h2>
      </div>

      {/* --- CART LIST --- */}
      <div className="cart-page__content">
        {cartItems.length === 0 ? (
           <div style={{textAlign: 'center', marginTop: 40, color: '#888'}}>
             <p>Your cart is empty</p>
             <button 
                onClick={() => navigate('/browse')}
                style={{marginTop: 10, padding: '8px 16px', background: '#212429', color: '#fff', border: 'none', borderRadius: 8}}
             >
               Go Shopping
             </button>
           </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Ảnh */}
              <div 
                className="cart-item__image-wrapper"
                onClick={() => navigate('/product', { state: { product: item } })}
              >
                <img src={item.image} alt={item.title} />
              </div>

              {/* Thông tin */}
              <div className="cart-item__info">
                {/* Giá tiền */}
                <div className="cart-item__price-row">
                  <span className={`cart-item__price ${item.originalPrice ? 'cart-item__price--discount' : ''}`}>
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && (
                    <span className="cart-item__original-price">${item.originalPrice}</span>
                  )}
                </div>

                {/* Tên & Subtitle */}
                <h3 className="cart-item__title">{item.title}</h3>
                <p className="cart-item__subtitle">{item.subtitle}</p>

                {/* Bộ điều khiển số lượng */}
                <div className="cart-item__controls">
                  <button className="qty-btn qty-btn--minus" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn qty-btn--plus" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>

              {/* Nút 3 chấm */}
              <button className="cart-item__more-btn">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* --- CHECKOUT SECTION --- */}
      {cartItems.length > 0 && (
        <div className="cart-page__checkout-section">
          <div className="summary-row">
            <span className="label">Shipping</span>
            <span className="value">$0.00</span>
          </div>
          <div className="summary-row summary-row--total">
            <span className="label">Total <span style={{fontSize: 10, fontWeight: 400}}>(TVA included)</span></span>
            <span className="value">${totalAmount.toFixed(2)}</span>
          </div>

          <button className="btn-checkout">Checkout</button>

          <div className="payment-icons">
            {paymentIcons.map((icon, index) => (
              <img 
                key={index} 
                src={`/src/assets/${icon}`} 
                alt="payment" 
                onError={(e) => {e.target.style.display='none'}} // Ẩn nếu lỗi ảnh
              />
            ))}
          </div>
        </div>
      )}

      <Footer cartCount={cartCount} />
    </div>
  );
};

export default CartPage;
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer.jsx';
import StatusBar from '../components/StatusBar/StatusBar.jsx';
import '../css/cart.scss';

const CartPage = ({ onNavigate, favouritesCount = 0 }) => {
  // Dữ liệu giả lập giỏ hàng
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/src/assets/rode-podmic.png',
      title: 'RØDE PodMic',
      subtitle: 'Dynamic microphone, Speaker microphone',
      price: 108.20,
      originalPrice: 199.99,
      quantity: 1
    },
    {
      id: 2,
      image: '/src/assets/speaker.png',
      title: 'GOOGLE Nest Mini',
      subtitle: 'Google Assistant, IFTTT',
      price: 70.99,
      quantity: 2
    },
    {
      id: 3,
      image: '/src/assets/watch.png', 
      title: 'XIAOMI Redmi Watch 3',
      subtitle: '42.58 mm, Aluminium, Plastic, One size',
      price: 94.90,
      quantity: 1
    },
    {
      id: 4,
      image: '/src/assets/sony-headphones-black.png',
      title: 'SONY Premium Wireless Headphones',
      subtitle: 'Model: WH-1000XM4, Black',
      price: 349.99,
      quantity: 1
    }
  ]);

  // Hàm tăng giảm số lượng
  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return { ...item, quantity: newQty > 0 ? newQty : 1 }; // Không cho giảm dưới 1
      }
      return item;
    }));
  };

  // Tính tổng tiền
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Danh sách icon payment 
  const paymentIcons = [
    'paypal.png', 'visa.png', 'mastercard.png', 'ggpay.png', 'applepay.png', 'amex.png'
  ];

  return (
    <div className="cart-page">
      <StatusBar />
      <div className="cart-page__status-placeholder"></div>

      {/* --- HEADER --- */}
      <div className="cart-page__header">
        <h2 className="header-title">Cart</h2>
      </div>

      {/* --- CART LIST --- */}
      <div className="cart-page__content">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            {/* Ảnh */}
            <div className="cart-item__image-wrapper">
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
        ))}
      </div>

      {/* --- CHECKOUT SECTION --- */}
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

      <Footer 
        activeTab="cart" 
        onNavigate={onNavigate} 
        favouritesCount={favouritesCount}
      />
    </div>
  );
};

export default CartPage;
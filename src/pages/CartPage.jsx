import React from 'react';
import { useNavigate } from 'zmp-ui';
import Footer from '../components/Footer/Footer.jsx';
import ActionMenu from '../components/ActionMenu/ActionMenu.jsx'; 
import favouriteItems from './FavouritesPage.jsx';
import '../css/cart.scss';

const CartPage = ({ cartItems, updateQuantity, removeFromCart, cartCount, favouriteItems = [] }) => {
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const paymentIcons = ['paypal.png', 'visa.png', 'mastercard.png', 'ggpay.png', 'applepay.png', 'amex.png'];

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <h2 className="header-title">Cart</h2>
      </div>

      <div className="cart-page__content">
        {cartItems.length === 0 ? (
           <div style={{textAlign: 'center', marginTop: 40, color: '#888'}}>
             <p>Your cart is empty</p>
             <button onClick={() => navigate('/browse')} style={{marginTop: 10, padding: '8px 16px', background: '#212429', color: '#fff', border: 'none', borderRadius: 8}}>Go Shopping</button>
           </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div 
                className="cart-item__image-wrapper"
                onClick={() => navigate('/product', { state: { product: item } })}
              >
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cart-item__info">
                <div className="cart-item__price-row">
                  <span className={`cart-item__price ${item.originalPrice ? 'cart-item__price--discount' : ''}`}>
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && <span className="cart-item__original-price">${item.originalPrice}</span>}
                </div>
                <h3 className="cart-item__title">{item.title}</h3>
                <p className="cart-item__subtitle">{item.subtitle}</p>

                <div className="cart-item__controls">
                  <button className="qty-btn qty-btn--minus" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn qty-btn--plus" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>

              <div className="cart-item__more-btn-wrapper">
                  <ActionMenu onDelete={() => removeFromCart(item.id)} />
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-page__checkout-section">
          
          <div className="summary-row">
            <span className="label">Shipping</span>
            <span className="value">$0.00</span>
          </div>

          <div className="summary-row summary-row--total">
            <span className="label">Total (TVA incl.)</span>
            <span className="value">${totalAmount.toFixed(2)}</span>
          </div>

          <button className="btn-checkout">Checkout</button>

          <div className="payment-icons">
            {paymentIcons.map((icon, index) => (
              <img key={index} src={`/src/assets/${icon}`} alt="payment" onError={(e) => {e.target.style.display='none'}} />
            ))}
          </div>
        </div>
      )}

      <Footer cartCount={cartCount} favouriteCount={favouriteItems.length} />
    </div>
  );
};

export default CartPage;
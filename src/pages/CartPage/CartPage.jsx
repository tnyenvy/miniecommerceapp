import React from 'react';
import { useNavigate } from 'zmp-ui';
import { useAtomValue, useSetAtom } from 'jotai';
import { cartItemsAtom, updateQuantityAtom, removeFromCartAtom } from '../../state/store.js';

import CartItem from '../../components/CartItem/CartItem.jsx';
import './cart.scss'; 

const CartPage = () => {
  const navigate = useNavigate();

  // --- JOTAI HOOKS ---
  const cartItems = useAtomValue(cartItemsAtom); 
  const updateQuantity = useSetAtom(updateQuantityAtom);
  const removeFromCart = useSetAtom(removeFromCartAtom);

  // Tính tổng tiền
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
             <button 
               onClick={() => navigate('/browse')}
               style={{marginTop: 10, padding: '8px 16px', background: '#212429', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer'}}
             >
               Go Shopping
             </button>
           </div>
        ) : (
          cartItems.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateQuantity={updateQuantity} 
              onRemove={removeFromCart} 
            />
          ))
        )}
      </div>

      {/* CHECKOUT */}
      {cartItems.length > 0 && (
        <div className="cart-page__checkout-section">
          
          <div className="summary-row">
            <span className="label">Shipping</span>
            <span className="value">$0.00</span>
          </div>

          <div className="summary-row summary-row--total">
            <span className="label">
              Total <span className="tva-text">(TVA incl.)</span>
            </span>
            <span className="value">${totalAmount.toFixed(2)}</span>
          </div>

          <button className="btn-checkout">Checkout</button>

          <div className="payment-icons">
            {paymentIcons.map((icon, index) => (
              <img 
                key={index} 
                src={`/src/assets/${icon}`} 
                alt="payment" 
                onError={(e) => {e.target.style.display='none'}} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
import React from 'react';
import { useNavigate } from 'zmp-ui';
import Footer from '../components/Footer/Footer.jsx';
import ActionMenu from '../components/ActionMenu/ActionMenu.jsx'; 
import '../css/favourites.scss';

const FavouritesPage = ({ favouriteItems, addToCart, removeFavourite, cartCount }) => {
  const navigate = useNavigate();

  return (
    <div className="favourites-page">
      <div className="favourites-page__header">
        <h2 className="header-title">Favourites</h2>
      </div>

      <div className="favourites-page__content">
        {favouriteItems.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: 50, color: '#999' }}>
            <p>No favourite items yet.</p>
            <button 
              onClick={() => navigate('/browse')}
              style={{ marginTop: 10, padding: '8px 16px', background: '#212429', color: '#fff', border: 'none', borderRadius: 8 }}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          favouriteItems.map((item) => (
            <div key={item.id} className="favourite-item">
              <div 
                className="favourite-item__image-wrapper"
                onClick={() => navigate('/product', { state: { product: item } })}
              >
                <img src={item.image} alt={item.title} />
              </div>

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
                    addToCart(item);
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </button>
                
                <ActionMenu onDelete={() => removeFavourite(item.id)} />
                
              </div>
            </div>
          ))
        )}
      </div>

      {/* --- CẬP NHẬT TẠI ĐÂY --- */}
      <Footer 
        cartCount={cartCount} 
        favouriteCount={favouriteItems.length} 
      />
    </div>
  );
};

export default FavouritesPage;
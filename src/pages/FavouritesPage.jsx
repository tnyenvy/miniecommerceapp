import React from 'react';
import { useNavigate } from 'zmp-ui';
import Footer from '../components/Footer/Footer.jsx';
import FavouriteItem from '../components/FavouriteItem/FavouriteItem.jsx'; 
import '../css/favourites.scss'; 

const FavouritesPage = ({ favouriteItems, addToCart, removeFavourite, cartCount }) => {
  const navigate = useNavigate();

  return (
    <div className="favourites-page">
      <div className="favourites-page__header">
        <h2 className="header-title">Favourites </h2>
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
            <FavouriteItem 
              key={item.id} 
              item={item} 
              onAddToCart={addToCart} 
              onRemove={removeFavourite} 
            />
          ))
        )}
      </div>

      <Footer 
        cartCount={cartCount} 
        favouriteCount={favouriteItems.length} 
      />
    </div>
  );
};

export default FavouritesPage;
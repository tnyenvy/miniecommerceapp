import React from 'react';
import { useNavigate, useSnackbar } from 'zmp-ui';
import { useAtomValue, useSetAtom } from 'jotai';
import { favouriteItemsAtom, addToCartAtom, toggleFavouriteAtom } from '../state/store.js';
import FavouriteItem from '../components/FavouriteItem/FavouriteItem.jsx'; 
import '../css/favourites.scss'; 

const FavouritesPage = () => {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  // --- JOTAI HOOKS ---
  const favouriteItems = useAtomValue(favouriteItemsAtom);
  const addToCart = useSetAtom(addToCartAtom);
  const toggleFavourite = useSetAtom(toggleFavouriteAtom);

  const handleAddToCart = (item) => {
    addToCart(item); 
    openSnackbar({
      icon: true,
      text: "Added to cart successfully!",
      type: "success",
      duration: 3000,
    });
  };

  return (
    <div className="favourites-page">
      <div className="favourites-page__header">
        <h2 className="header-title">Favourites </h2>
      </div>

      <div className="favourites-page__content">
        {favouriteItems.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            marginTop: 50, 
            color: '#999' }}>
            <p>No favourite items yet.</p>
            <button 
              onClick={() => navigate('/browse')}
              style={{ 
                marginTop: 10, 
                padding: '8px 16px', 
                background: '#212429', 
                color: '#fff', 
                border: 'none', 
                borderRadius: 8 }}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          favouriteItems.map((item) => (
            <FavouriteItem 
              key={item.id} 
              item={item} 
              onAddToCart={() => handleAddToCart(item)} 
              onRemove={() => toggleFavourite(item)} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
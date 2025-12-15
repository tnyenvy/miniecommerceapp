import React from 'react';
import { useNavigate, useSnackbar } from 'zmp-ui'; // 1. Import useSnackbar
import Footer from '../components/Footer/Footer.jsx';
import FavouriteItem from '../components/FavouriteItem/FavouriteItem.jsx'; 
import '../css/favourites.scss'; 

const FavouritesPage = ({ favouriteItems, addToCart, removeFavourite, cartCount }) => {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar(); // 2. Khởi tạo Snackbar

  // 3. Hàm xử lý: Thêm vào giỏ + Hiện thông báo
  const handleAddToCart = (item) => {
    addToCart(item); // Gọi hàm gốc từ App.jsx
    
    // Hiện thông báo Zalo
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
              // 4. Truyền hàm handleAddToCart thay vì addToCart gốc
              onAddToCart={() => handleAddToCart(item)} 
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
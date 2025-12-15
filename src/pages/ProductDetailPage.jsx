import React from 'react'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from 'zmp-ui'; 
import Footer from '../components/Footer/Footer.jsx';
import '../css/productdetail.scss'; 

const ProductDetailPage = ({ cartCount, favouriteItems = [], toggleFavourite, addToCart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 2. Khởi tạo snackbar
  const { openSnackbar } = useSnackbar();

  const defaultProduct = {
    id: 999,
    image: '/src/assets/sony-headphones-black.png',
    title: 'SONY Premium Wireless Headphones',
    price: 349.99,
    originalPrice: 450.00, 
    model: 'Model: WH-1000XM4, Black',
    description: 'The technology with two noise sensors and two microphones on each ear cup detects ambient noise and sends the data to the HD noise minimization processor QN1.'
  };

  const currentProduct = location.state?.product || defaultProduct;
  const descriptionToShow = currentProduct.description || defaultProduct.description;
  const isFavorite = favouriteItems.some(item => item.id === currentProduct.id);
  const hasDiscount = currentProduct.originalPrice && (currentProduct.originalPrice > currentProduct.price);

  // --- HÀM XỬ LÝ THÊM VÀO GIỎ HÀNG  ---
  const handleAddToCart = () => {
    addToCart(currentProduct); 
    
    // Gọi Snackbar của Zalo
    openSnackbar({
      icon: true, 
      text: "Added to cart successfully!",
      type: "success", 
      duration: 3000, 
    });
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-page__header">
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h2 className="header-title">Product Detail</h2>
        <button className="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      <div className="product-detail-page__content">
        <div className="product-image-container">
          <img src={currentProduct.image} alt={currentProduct.title} className="product-image" />
          <div className="floating-actions">
            <button className="action-btn" onClick={() => toggleFavourite(currentProduct)}>
              {isFavorite ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              )}
            </button>
            
            <button className="action-btn" onClick={handleAddToCart}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="product-info">
          <div className="product-price-wrapper">
             <span className={`product-price ${hasDiscount ? 'is-discount' : ''}`}>
                ${currentProduct.price}
             </span>
             {hasDiscount && (
               <span className="product-price--original">${currentProduct.originalPrice}</span>
             )}
          </div>
          <h1 className="product-title">{currentProduct.title}</h1>
          <p className="product-model">{currentProduct.model}</p>
        </div>

        <div className="product-description">
          <p>{descriptionToShow}</p>
        </div>
      </div>

      <Footer cartCount={cartCount} favouriteCount={favouriteItems.length} />
    </div>
  );
};

export default ProductDetailPage;
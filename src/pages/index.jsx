import React from 'react';
import { useNavigate } from 'zmp-ui';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import favouriteItems from './FavouritesPage.jsx';
import '../css/homepage.scss'; 

// Nhận props favouriteItems và toggleFavourite từ App.jsx
const HomePage = ({ cartCount, favouriteItems = [], toggleFavourite }) => {
  const navigate = useNavigate();

  // QUAN TRỌNG: Sản phẩm phải có ID để so sánh
  const dealOfTheDay = {
    id: 1, 
    image: '/src/assets/rode-podmic.png', 
    title: 'RØDE PodMic',
    price: 108.20,
    originalPrice: 199.99,
    category: 'Microphones',
    description: 'Dynamic microphone, Speaker microphone'
  };

  const recommendedProducts = [
    {
      id: 4,
      image: '/src/assets/sony-headphones-black.png',
      title: 'SONY Premium Wireless Headphones',
      price: 349.99,
      model: 'Model: WH-1000XM4, Black'
    },
    {
      id: 2, // ID phải khớp với dữ liệu trong App.jsx nếu có sẵn
      image: '/src/assets/sony-headphones-beige.png',
      title: 'SONY Premium Wireless Headphones',
      price: 349.99,
      model: 'Model: WH-1000XM4, Beige'
    }
  ];

  const handleProductClick = (product) => {
    navigate('/product', { state: { product: product } });
  };

  // Helper để kiểm tra xem sản phẩm đã được like chưa
  const checkIsFavorite = (productId) => {
    // Thêm kiểm tra an toàn để tránh lỗi nếu favouriteItems chưa sẵn sàng
    if (!favouriteItems) return false;
    return favouriteItems.some(item => item.id === productId);
  };

  return (
    <div className="homepage">
      <Header userName="Michael" />
      
      <main className="homepage__content">
        <section className="homepage__section">
          <div className="homepage__section-header">
            <h2 className="homepage__section-title">Deals of the day</h2>
            <button className="homepage__see-all" onClick={() => navigate('/browse')}>See all</button>
          </div>
          
          <div className="homepage__deals">
            <ProductCard
              size="large"
              {...dealOfTheDay}
              // Truyền trạng thái tim đỏ/trắng
              isFavorite={checkIsFavorite(dealOfTheDay.id)}
              // Truyền hàm xử lý khi bấm tim
              onToggleFavorite={() => toggleFavourite(dealOfTheDay)}
              onClick={() => handleProductClick(dealOfTheDay)}
            />
          </div>

          <div className="slide-indicators">
            <span className="slide-indicators__dot slide-indicators__dot--active"></span>
            <span className="slide-indicators__dot"></span>
            <span className="slide-indicators__dot"></span>
          </div>
        </section>

        <section className="homepage__section">
          <h2 className="homepage__section-title">Recommended for you</h2>
          <div className="homepage__recommended">
            {recommendedProducts.map((product, index) => (
              <ProductCard
                key={index}
                size="small"
                {...product}
                isFavorite={checkIsFavorite(product.id)}
                
                // --- ĐÃ SỬA LẠI ĐÚNG BIẾN Ở ĐÂY ---
                // Trước đó bạn để nhầm là toggleFavourite(dealOfTheDay)
                onToggleFavorite={() => toggleFavourite(product)}
                
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer cartCount={cartCount} favouriteCount={favouriteItems.length} />
    </div>
  );
};

export default HomePage;
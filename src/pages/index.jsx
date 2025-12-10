import React, { useState } from 'react'; 
import { useNavigate } from 'zmp-ui';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import '../css/homepage.scss'; 

const HomePage = ({ cartCount, favouriteItems = [], toggleFavourite }) => {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('all');

  const dealOfTheDay = {
    id: 1, 
    image: '/src/assets/rode-podmic.png', 
    title: 'RØDE PodMic',
    price: 108.20,
    originalPrice: 199.99,
    category: 'Microphones',
    description: 'Dynamic microphone, Speaker microphone'
  };

  const allProducts = [
    {
      id: 4,
      image: '/src/assets/sony-headphones-black.png',
      title: 'SONY Premium Wireless Headphones',
      price: 349.99,
      model: 'Model: WH-1000XM4, Black',
      category: 'audio'
    },
    {
      id: 2, 
      image: '/src/assets/sony-headphones-beige.png',
      title: 'SONY Premium Wireless Headphones',
      price: 349.99,
      model: 'Model: WH-1000XM4, Beige',
      category: 'audio'
    },
    {
      id: 10, 
      image: '/src/assets/samsung-buds.png',
      title: 'Drones Mavic Pro',
      price: 999.00,
      model: '4K Camera, 30mins flight',
      category: 'drones'
    },
    {
      id: 11, 
      image: '/src/assets/speaker.png',
      title: 'Google Nest Mini', 
      price: 49.00,
      model: 'Smart Speaker',
      category: 'drones' 
    }
  ];

  // Lọc sản phẩm
  const filteredProducts = activeTab === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeTab);

  const handleProductClick = (product) => {
    navigate('/product', { state: { product: product } });
  };

  const checkIsFavorite = (productId) => {
    if (!favouriteItems) return false;
    return favouriteItems.some(item => item.id === productId);
  };

  return (
    <div className="homepage">
      {/* Truyền state xuống Header */}
      <Header 
        userName="Michael" 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
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
              isFavorite={checkIsFavorite(dealOfTheDay.id)}
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
          
          {/* Animation-wrapper và key để kích hoạt hiệu ứng */}
          <div 
            className="homepage__recommended fade-in-up" 
            key={activeTab} 
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  size="small"
                  {...product}
                  isFavorite={checkIsFavorite(product.id)}
                  onToggleFavorite={() => toggleFavourite(product)}
                  onClick={() => handleProductClick(product)}
                />
              ))
            ) : (
              <p style={{color: '#999', colSpan: 2}}>No products found in this category yet.</p>
            )}
          </div>
        </section>
      </main>
      
      <Footer cartCount={cartCount} favouriteCount={favouriteItems.length} />
    </div>
  );
};

export default HomePage;
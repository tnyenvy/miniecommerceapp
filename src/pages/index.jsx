import React, { useState } from 'react';
import { useNavigate } from 'zmp-ui';
import { Swiper } from 'zmp-ui';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import '../css/homepage.scss'; 

const HomePage = ({ cartCount, favouriteItems = [], toggleFavourite }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0); 

  // Deals of the day 
  const deals = [
    {
      id: 1, 
      image: '/src/assets/rode-podmic.png', 
      title: 'RØDE PodMic',
      price: 108.20,
      originalPrice: 199.99,
      category: 'Microphones',
      description: 'Dynamic microphone, Speaker microphone'
    },
    {
      id: 99, 
      image: '/src/assets/camera.png', 
      title: 'Canon EOS R5',
      price: 3899.00,
      originalPrice: 4200.00,
      category: 'Camera',
      description: 'Mirrorless Camera, 8K Video, 45MP, 80fps'
    },
    {
      id: 88, 
      image: '/src/assets/watch.png', 
      title: 'Apple Watch Series 9',
      price: 399.00,
      originalPrice: 459.00,
      category: 'Watches',
      description: 'Smartwatch, GPS, Midnight Aluminum'
    }
  ];

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
            <Swiper 
              autoplay 
              loop 
              duration={3500}
              afterChange={(index) => setActiveIndex(index)}
            >
              {deals.map((deal) => (
                <Swiper.Slide key={deal.id}>
                  <ProductCard
                    size="large"
                    {...deal}
                    isFavorite={checkIsFavorite(deal.id)}
                    onToggleFavorite={() => toggleFavourite(deal)}
                    onClick={() => handleProductClick(deal)}
                  />
                </Swiper.Slide>
              ))}
            </Swiper>
          </div>

          <div className="slide-indicators">
            {deals.map((_, index) => (
              <span 
                key={index}
                className={`slide-indicators__dot ${index === activeIndex ? 'slide-indicators__dot--active' : ''}`}
              ></span>
            ))}
          </div>
        </section>

        <section className="homepage__section">
          <h2 className="homepage__section-title">Recommended for you</h2>
          
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
              <p style={{color: '#999', gridColumn: 'span 2'}}>No products found in this category yet.</p>
            )}
          </div>
        </section>
      </main>
      
      <Footer cartCount={cartCount} favouriteCount={favouriteItems.length} />
    </div>
  );
};

export default HomePage;
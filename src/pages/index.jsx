import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import StatusBar from '../components/StatusBar/StatusBar.jsx'; // Nhớ import StatusBar nếu đã tách
import '../css/homepage.scss'; 

const HomePage = ({ onNavigate, onProductClick }) => {
  
  const dealOfTheDay = {
    image: '/src/assets/rode-podmic.png', 
    title: 'RØDE PodMic',
    price: '108.20',
    originalPrice: '199.99',
    category: 'Microphones',
    description: 'Dynamic microphone, Speaker microphone'
  };

  const recommendedProducts = [
    {
      image: '/src/assets/sony-headphones-black.png',
      title: 'SONY Premium Wireless Headphones',
      price: '349.99',
      model: 'Model: WH-1000XM4, Black'
    },
    {
      image: '/src/assets/sony-headphones-beige.png',
      title: 'SONY Premium Wireless Headphones',
      price: '349.99',
      model: 'Model: WH-1000XM4, Beige'
    }
  ];

  return (
    <div className="homepage">
      <StatusBar />
      
      <Header userName="Michael" />
      
      <main className="homepage__content">
        {/* --- DEALS OF THE DAY --- */}
        <section className="homepage__section">
          <div className="homepage__section-header">
            <h2 className="homepage__section-title">Deals of the day</h2>
            <button className="homepage__see-all">See all</button>
          </div>
          
          <div className="homepage__deals">
            <ProductCard
              size="large"
              {...dealOfTheDay}
              onClick={() => onProductClick && onProductClick(dealOfTheDay)}
            />
          </div>

          <div className="slide-indicators">
            <span className="slide-indicators__dot slide-indicators__dot--active"></span>
            <span className="slide-indicators__dot"></span>
            <span className="slide-indicators__dot"></span>
          </div>
        </section>

        {/* ---  RECOMMENDED --- */}
        <section className="homepage__section">
          <h2 className="homepage__section-title">Recommended for you</h2>
          
          <div className="homepage__recommended">
            {recommendedProducts.map((product, index) => (
              <ProductCard
                key={index}
                size="small"
                {...product}
                onClick={() => onProductClick && onProductClick(product)}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer activeTab="home" onNavigate={onNavigate} />
    </div>
  );
};

export default HomePage;
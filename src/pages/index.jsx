import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import ProductCard from '../components/ProductCard/ProductCard.jsx';
import '../css/app.scss';

const HomePage = () => {
  const dealOfTheDay = {
    image: '/src/assets/rode-podmic.png',
    title: 'RODE PodMic',
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
      <Header userName="Michael" />
      
      <main className="homepage__content">
        <section className="homepage__section">
          <div className="homepage__section-header">
            <h2 className="homepage__section-title">Deals of the day</h2>
            <button className="homepage__see-all">See all</button>
          </div>
          
          <div className="homepage__deals">
            <ProductCard
              size="large"
              image={dealOfTheDay.image}
              title={dealOfTheDay.title}
              price={dealOfTheDay.price}
              originalPrice={dealOfTheDay.originalPrice}
              category={dealOfTheDay.category}
              description={dealOfTheDay.description}
            />
          </div>
        </section>

        <section className="homepage__section">
          <h2 className="homepage__section-title">Recommended for you</h2>
          
          <div className="homepage__recommended">
            {recommendedProducts.map((product, index) => (
              <ProductCard
                key={index}
                size="small"
                image={product.image}
                title={product.title}
                price={product.price}
                model={product.model}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer activeTab="home" />
    </div>
  );
};

export default HomePage;
import React from 'react';
import Footer from '../components/Footer/Footer.jsx';
import StatusBar from '../components/StatusBar/StatusBar.jsx';
import '../css/favourites.scss';

const FavouritesPage = ({ onNavigate }) => {
  const favouriteItems = [
    {
      id: 1,
      image: '/src/assets/sony-headphones-black.png',
      title: 'SONY Premium Wireless Headphones',
      price: '349.99',
      model: 'Model: WH-1000XM4, Black'
    },
    {
      id: 2,
      image: '/src/assets/micro.png', 
      title: 'SHURE SM7B',
      price: '379.49',
      subtitle: 'Studio microphone',
      discount: true 
    },
    {
      id: 3,
      image: '/src/assets/watch.png', 
      title: 'XIAOMI Redmi Watch 3',
      price: '94.90',
      subtitle: '42.58 mm, Aluminium, Plastic, One Size'
    },
    {
      id: 4,
      image: '/src/assets/speaker.png',
      title: 'GOOGLE Nest Mini',
      price: '70.99',
      subtitle: 'Google Assistant, IFTTT'
    },
    {
      id: 5,
      image: '/src/assets/rode-podmic.png',
      title: 'RØDE PodMic',
      price: '108.20',
      originalPrice: '199.99',
      subtitle: 'Dynamic microphone, Speaker...'
    },
    {
      id: 6,
      image: '/src/assets/camera.png', 
      title: 'SONY Alpha 7 IV',
      price: '1,499.99',
      subtitle: 'Full-frame Interchangeable Lens Camera 33MP, 10FPS, 4K/60p'
    }
  ];

  return (
    <div className="favourites-page">
      <StatusBar />
      <div style={{ height: '44px' }}></div>

      {/* --- HEADER --- */}
      <div className="favourites-page__header">
        <h2 className="header-title">Favourites</h2>
      </div>

      {/* --- LIST --- */}
      <div className="favourites-page__content">
        {favouriteItems.map((item) => (
          <div key={item.id} className="favourite-item">
            {/* Ảnh */}
            <div className="favourite-item__image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            {/* Thông tin */}
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

            {/* Actions */}
            <div className="favourite-item__actions">
              {/* Nút Cart */}
              <button className="btn-cart">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </button>
              
              {/* Nút More */}
              <button className="btn-more">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer activeTab="favourites" onNavigate={onNavigate} />
    </div>
  );
};

export default FavouritesPage;
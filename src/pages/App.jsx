import React, { useState } from 'react';
import HomePage from './index.jsx'; 
import BrowsePage from './BrowsePage.jsx';
import CategoryPage from './CategoryPage.jsx';
import ProductDetailPage from './ProductDetailPage.jsx';
import CartPage from './CartPage.jsx'; 
import FavouritesPage from './FavouritesPage.jsx';
import ProfilePage from './ProfilePage.jsx'; 
import Footer from '../components/Footer/Footer.jsx'; 
import '../css/app.scss';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: '/src/assets/rode-podmic.png',
      title: 'RØDE PodMic',
      subtitle: 'Dynamic microphone, Speaker microphone',
      price: 108.20,
      originalPrice: 199.99,
      quantity: 1
    },
    {
      id: 2,
      image: '/src/assets/sony-headphones-beige.png',
      title: 'GOOGLE Nest Mini',
      subtitle: 'Google Assistant, IFTTT',
      price: 70.99,
      quantity: 2
    },
    {
      id: 3,
      image: '/src/assets/samsung-buds.png',
      title: 'XIAOMI Redmi Watch 3',
      subtitle: '42.58 mm, Aluminium, Plastic, One size',
      price: 94.90,
      quantity: 1
    },
    {
      id: 4,
      image: '/src/assets/sony-headphones-black.png',
      title: 'SONY Premium Wireless Headphones',
      subtitle: 'Model: WH-1000XM4, Black',
      price: 349.99,
      quantity: 1
    }
  ]);

  // CẬP NHẬT SỐ LƯỢNG
  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName); 
    setActiveTab('category-detail');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveTab('product-detail');
  };

  const PlaceholderPage = ({ title }) => (
    <div className="page-placeholder">
      <h2>{title}</h2>
      <p>Tính năng đang được phát triển.</p>
      <Footer activeTab={activeTab} onNavigate={setActiveTab} cartCount={totalItems} />
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} onProductClick={handleProductClick} cartCount={totalItems} />;
        
      case 'browse':
        return <BrowsePage onNavigate={setActiveTab} onCategoryClick={handleCategoryClick} cartCount={totalItems} />;
        
      case 'category-detail':
        return (
          <CategoryPage 
            categoryName={selectedCategory} 
            onBack={() => setActiveTab('browse')} 
            onNavigate={setActiveTab} 
            onProductClick={handleProductClick}
            cartCount={totalItems} 
          />
        );

      case 'product-detail':
        return (
          <ProductDetailPage 
            product={selectedProduct}
            onBack={() => setActiveTab('category-detail')} 
            onNavigate={setActiveTab}
            cartCount={totalItems}
          />
        );

      case 'favourites': 
        return <FavouritesPage onNavigate={setActiveTab} cartCount={totalItems} />;

      case 'cart':
        return (
          <CartPage 
            onNavigate={setActiveTab} 
            cartItems={cartItems} 
            updateQuantity={updateQuantity}
            cartCount={totalItems} 
          />
        );
        
      case 'profile': 
        return <ProfilePage onNavigate={setActiveTab} cartCount={totalItems} />;
      default: return <HomePage onNavigate={setActiveTab} cartCount={totalItems} />;
    }
  };

  return (
    <div className="app-container">
      {renderContent()}
    </div>
  );
};

export default App;
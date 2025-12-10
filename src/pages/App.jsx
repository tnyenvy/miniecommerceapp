import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { getSystemInfo } from "zmp-sdk";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui"; 

import HomePage from './index.jsx'; 
import BrowsePage from './BrowsePage.jsx';
import CategoryPage from './CategoryPage.jsx';
import ProductDetailPage from './ProductDetailPage.jsx';
import CartPage from './CartPage.jsx'; 
import FavouritesPage from './FavouritesPage.jsx';
import ProfilePage from './ProfilePage.jsx'; 

const MyApp = () => {
  // --- STATE GIỎ HÀNG ---
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

  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            
            <Route 
              path="/" 
              element={<HomePage cartCount={totalItems} />} 
            />

            <Route 
              path="/browse" 
              element={<BrowsePage cartCount={totalItems} />} 
            />

            <Route 
              path="/category" 
              element={<CategoryPage cartCount={totalItems} />} 
            />

            <Route 
              path="/product" 
              element={<ProductDetailPage cartCount={totalItems} />} 
            />

            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems} 
                  updateQuantity={updateQuantity} 
                  cartCount={totalItems} 
                />
              } 
            />

            <Route 
              path="/favourites" 
              element={<FavouritesPage cartCount={totalItems} />} 
            />

            <Route 
              path="/profile" 
              element={<ProfilePage cartCount={totalItems} />} 
            />

          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};

export default MyApp;
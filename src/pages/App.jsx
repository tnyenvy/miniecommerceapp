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
  const [cartItems, setCartItems] = useState([]); 
  const [favouriteItems, setFavouriteItems] = useState([]);

  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    alert("Added to Cart!");
  };

  const removeFromCart = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const toggleFavourite = (product) => {
    setFavouriteItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <App theme={getSystemInfo().zaloTheme}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            
            <Route 
              path="/" 
              element={
                <HomePage 
                  cartCount={totalItems} 
                  favouriteItems={favouriteItems} 
                  toggleFavourite={toggleFavourite} 
                />
              } 
            />

            <Route 
              path="/browse" 
              element={
                <BrowsePage 
                  cartCount={totalItems} 
                  favouriteItems={favouriteItems} 
                />
              } 
            />
            
            <Route 
              path="/category" 
              element={
                <CategoryPage 
                  cartCount={totalItems} 
                  favouriteItems={favouriteItems}
                  toggleFavourite={toggleFavourite} 
                />
              } 
            />

            <Route 
              path="/product" 
              element={
                <ProductDetailPage 
                  cartCount={totalItems} 
                  favouriteItems={favouriteItems}
                  toggleFavourite={toggleFavourite} 
                  addToCart={addToCart} 
                />
              } 
            />
            
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems} 
                  updateQuantity={updateQuantity} 
                  removeFromCart={removeFromCart}
                  cartCount={totalItems} 
                  favouriteItems={favouriteItems} 
                />
              } 
            />

            <Route 
              path="/favourites" 
              element={
                <FavouritesPage 
                  favouriteItems={favouriteItems}
                  addToCart={addToCart}
                  removeFavourite={(id) => toggleFavourite({ id })} 
                  cartCount={totalItems} 
                />
              } 
            />

            <Route 
              path="/profile" 
              element={
                <ProfilePage 
                  cartCount={totalItems} 
                  favouriteItems={favouriteItems} 
                />
              } 
            />

          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};

export default MyApp;
import React, { memo } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { AnimationRoutes } from 'zmp-ui';
import HomePage from '../pages/HomePage/index.jsx'; 
import BrowsePage from '../pages/BrowsePage/BrowsePage.jsx';
import CategoryPage from '../pages/CategoryPage/CategoryPage.jsx';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage.jsx';
import CartPage from '../pages/CartPage/CartPage.jsx'; 
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage.jsx';
import ProfilePage from '../pages/ProfilePage/ProfilePage.jsx'; 

import Footer from './Footer/Footer.jsx';

const Layout = memo(() => {
  const location = useLocation();

  // --- FOOTER ---
  const routesWithFooter = ['/', '/browse', '/cart', '/favourites', '/profile', '/category'];
  const shouldShowFooter = routesWithFooter.includes(location.pathname);

  return (
    <div className="layout-container" style={{ minHeight: '100vh', position: 'relative' }}>
      
      <AnimationRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </AnimationRoutes>

      {shouldShowFooter && <Footer />}
      
    </div>
  );
});

export default Layout;
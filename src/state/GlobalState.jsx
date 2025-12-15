import React, { createContext, useState, useEffect, useContext } from 'react';

const GlobalContext = createContext();

export const useGlobalState = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Lỗi đọc localStorage:", error);
      return [];
    }
  });

  const [favouriteItems, setFavouriteItems] = useState([]);

  // --- TỰ ĐỘNG LƯU  ---
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ---CÁC HÀM XỬ LÝ  ---
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
  };

  const removeFromCart = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const toggleFavourite = (product) => {
    setFavouriteItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) return prev.filter(item => item.id !== product.id);
      return [...prev, product];
    });
  };

  // Tính tổng số lượng 
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // --- TRẢ VỀ DỮ LIỆU TOÀN CỤC ---
  const value = {
    cartItems,
    favouriteItems,
    totalItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleFavourite
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
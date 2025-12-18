import { atom } from 'jotai';

// --- USER & FAVOURITE 
export const userInfoAtom = atom({
  name: 'Michael',
  phone: '+84 123 456 789',
  email: 'michael.design@gmail.com',
  address: '123 Hoang Dieu 2, Thu Duc, HCMC',
  avatar: 'https://i.pinimg.com/1200x/5c/4f/e0/5c4fe02d352a96e89c2c9f66dfe7c23d.jpg'
});

export const favouriteItemsAtom = atom([]);

export const toggleFavouriteAtom = atom(null, (get, set, product) => {
  const currentList = get(favouriteItemsAtom);
  const isExist = currentList.some(item => item.id === product.id);
  if (isExist) {
    set(favouriteItemsAtom, currentList.filter(item => item.id !== product.id));
  } else {
    set(favouriteItemsAtom, [...currentList, product]);
  }
});

// --- CART ---
export const cartItemsAtom = atom([]);

// Thêm vào giỏ hàng
export const addToCartAtom = atom(null, (get, set, product) => {
  const currentCart = get(cartItemsAtom);
  const existingItem = currentCart.find((item) => item.id === product.id);

  if (existingItem) {
    // Nếu có rồi thì tăng số lượng sp lênn
    set(cartItemsAtom, currentCart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    // Chưa có thì thêm mới với quantity = 1
    set(cartItemsAtom, [...currentCart, { ...product, quantity: 1 }]);
  }
});

// Xóa sp khỏi giỏ hàng
export const removeFromCartAtom = atom(null, (get, set, productId) => {
  const currentCart = get(cartItemsAtom);
  set(cartItemsAtom, currentCart.filter((item) => item.id !== productId));
});

// Cập nhật số lượng
export const updateQuantityAtom = atom(null, (get, set, id, quantity) => {
  const currentCart = get(cartItemsAtom);
  
  //Không cho số lượng nhỏ hơn 1
  if (quantity < 1) return; 

  set(cartItemsAtom, currentCart.map((item) =>
    item.id === id ? { ...item, quantity: quantity } : item
  ));
});
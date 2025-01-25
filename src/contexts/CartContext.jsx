import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existingItem = cartItems.find((product) => product.id === item.id);

    if (existingItem) {
      // increment the quantity if it already exist
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }
  function removeFromCart(item) {
    setCartItems(cartItems.filter((product) => product.id !== item.id));
  }
  function clearCart() {
    setCartItems([]);
  }
  function increaseQuantity(item) {
    const existingItem = cartItems.find((product) => product.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }
  function decreaseQuantity(item) {
    const existingItem = cartItems.find((product) => product.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

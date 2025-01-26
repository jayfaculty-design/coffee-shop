import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Retrieve cart items from local storage if they exist
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
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
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
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

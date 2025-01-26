import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoritesItems, setFavoriteItems] = useState(() => {
    const savedFavoriteItems = localStorage.getItem("favoriteItems");
    return savedFavoriteItems ? JSON.parse(savedFavoriteItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoritesItems));
  }, [favoritesItems]);
  function addToFavorites(item) {
    const isAlreadyInFavorites = favoritesItems.find(
      (product) => product.id === item.id
    );

    if (isAlreadyInFavorites) {
      setFavoriteItems(
        favoritesItems.map((product) =>
          product.id === item.id ? { ...product } : product
        )
      );
    } else {
      setFavoriteItems([...favoritesItems, { ...item }]);
    }
  }
  function removeFromFavorites(item) {
    setFavoriteItems(
      favoritesItems.filter((product) => product.id !== item.id)
    );
  }
  function clearFavorites() {
    setFavoriteItems([]);
  }

  return (
    <FavoriteContext.Provider
      value={{
        favoritesItems,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

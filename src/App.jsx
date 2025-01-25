import React, { createContext, useState } from "react";
import Home from "./components/Home";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AllProducts from "./components/AllProducts";
import AvailableProducts from "./components/AvailableProducts";
import Header from "./components/Header";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="all-products" />} />

            <Route path="all-products" element={<AllProducts />} />
            <Route path="available-products" element={<AvailableProducts />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

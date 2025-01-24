import React from "react";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router";
import AllProducts from "./components/AllProducts";
import AvailableProducts from "./components/AvailableProducts";

const App = () => {
  return (
    <div className="">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="all-products" element={<AllProducts />} />
              <Route
                path="available-products"
                element={<AvailableProducts />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

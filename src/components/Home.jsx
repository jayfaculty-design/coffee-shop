import React from "react";
import { NavLink, Outlet } from "react-router";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container relative">
      <div className="products flex flex-col w-full  items-center ">
        <div className="bg-black product-container rounded-lg w-full">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl font-semibold">Our Collection</h1>
            <p className="text-center md:w-96 md:text-[16px] text-whitish-black text-[14px] font-medium">
              Introducing Our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly
            </p>
            <div className="flex items-center gap-7 font-medium">
              <NavLink to="all-products">All Products</NavLink>
              <NavLink to="available-products">Available Now</NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

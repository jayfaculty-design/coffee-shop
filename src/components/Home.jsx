import React from "react";
import { NavLink, Outlet } from "react-router";
import { IconCoffee, IconHeart, IconShoppingBag } from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="home-container relative">
      <div className="header-top w-full justify-between flex items-center">
        <div className="flex flex-col items-center text-green">
          <IconCoffee size={30} />
          <p className="text-[12px]">JayFee</p>
        </div>
        <div className="flex gap-3">
          <div className="flex relative">
            <IconShoppingBag className="text-yellowish relative" size={25} />
            <span className="bg-green absolute top-4 left-3 flex items-center justify-center text-[10px] text-deepish-black h-4 w-4 rounded-full">
              0
            </span>
          </div>
          <div className="flex relative">
            <IconHeart className="text-yellowish relative" size={25} />
            <span className="bg-green absolute top-4 left-2.5 flex items-center justify-center text-[10px] text-deepish-black h-4 w-4 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="products absolute top-20 flex flex-col  items-center h-[100vh] ">
        <div className="bg-black product-container rounded-lg">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl font-semibold">Our Collection</h1>
            <p className="text-center text-whitish-black text-[14px] font-medium">
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

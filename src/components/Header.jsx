import { IconCoffee, IconHeart, IconShoppingBag } from "@tabler/icons-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router";


const Header = () => {
 
  return (
    <div className="header-top fixed top-0 z-[999] w-full justify-between flex items-center">
      <Link to="/" className="flex flex-col items-center text-green">
        <IconCoffee size={35} />
        <p className="text-[12px]">JayFee</p>
      </Link>
      <div className="flex gap-3">
        <NavLink
          to="cart"
          className="btn flex relative w-10 bg-transparent border-none"
        >
          <IconShoppingBag className="text-yellowish relative" size={30} />
          <span className="bg-green font-bold absolute top-5 left-4 flex items-center justify-center text-[10px] text-deepish-black h-4 w-4 rounded-full">
            0
          </span>
        </NavLink>
        <NavLink
          to="favorites"
          className="btn flex relative w-10 bg-transparent border-none"
        >
          <IconHeart className="text-yellowish relative" size={30} />
          <span className="bg-green font-bold absolute  top-5 left-4 flex items-center justify-center text-[10px] text-deepish-black h-4 w-4 rounded-full">
            0
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

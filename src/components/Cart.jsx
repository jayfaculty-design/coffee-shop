import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, NavLink } from "react-router";
import { IconX } from "@tabler/icons-react";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="products absolute top-20 flex flex-col w-full  items-center h-[100vh]">
      <div className="bg-black product-container rounded-lg w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Cart(0)</h1>
          <p
            onClick={() => clearCart()}
            className="cursor-pointer underline underline-offset-3"
          >
            {cartItems.length === 0 ? "" : "Clear Cart"}
          </p>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center flex-col gap-3 h-[50vh]">
              <p>Cart is Empty</p>
              <Link to="/" className="bg-browish btn p-[5rem] w-[250px]">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="items grid gap-10">
              {cartItems.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="item flex gap-5 border-b border-mid-black"
                  >
                    <div>
                      <img
                        className="w-42 rounded-lg"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2 items-center justify-between">
                        <span className="sale bg-green flex justify-center items-center text-black text-[14px]">
                          Sale
                        </span>
                        <p className="relative">{product.name}</p>
                        <button
                          onClick={() => removeFromCart(product)}
                          className="btn h-5 bg-none border-none"
                        >
                          <IconX className="" size={20} />
                        </button>
                      </div>
                      <p className="flex items-center justify-center rounded-lg font-semibold top-2 left-3 text-[12px] text-black bg-yellowish w-14">
                        {product.popular === true ? "Popular" : "Hot"}
                      </p>
                      <div className="flex justify-between items-center w-[200px]">
                        <p className="font-semibold text-orange-pink">
                          {product.price}
                        </p>
                        <div className="flex gap-3 items-center">
                          <button
                            onClick={() => decreaseQuantity(product)}
                            className="btn h-5 w-5 bg-yellowish rounded-full text-deepish-black flex items-center justify-center"
                          >
                            -
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(product)}
                            className="btn h-5 w-5 bg-yellowish rounded-full flex items-center justify-center text-deepish-black"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

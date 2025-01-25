import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="products absolute top-20 flex flex-col w-full  items-center h-[100vh]">
      <div className="bg-black product-container rounded-lg w-full h-[80vh]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Cart</h1>
          <p className="cursor-pointer underline underline-offset-3">
            {cartItems.length === 0 ? "" : "Clear Cart"}
          </p>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center h-[50vh]">
              <p>Cart is Empty</p>
            </div>
          ) : (
            <div>
              {cartItems.map((product) => {
                return (
                  <div key={product.id}>
                    <img src={product.image} alt="" />
                    <p>{product.name}</p>
                    <p>{product.quantity}</p>
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

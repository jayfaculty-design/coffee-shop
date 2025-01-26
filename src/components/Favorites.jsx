import React, { useContext, useEffect } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { Link } from "react-router";
import { CartContext } from "../contexts/CartContext";
import { IconTrash } from "@tabler/icons-react";

const Favorites = () => {
  const { favoritesItems, removeFromFavorites, clearFavorites } =
    useContext(FavoriteContext);
  const { addToCart, cartItems } = useContext(CartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="products absolute top-20 flex flex-col w-full  items-center ">
      <div className="bg-black product-container rounded-lg w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">{`Favorites(${favoritesItems.length})`}</h1>
          <p
            onClick={() => clearFavorites()}
            className="cursor-pointer underline capitalize underline-offset-3"
          >
            {favoritesItems.length === 0 ? "" : "clear favorites"}
          </p>
        </div>

        <div>
          {favoritesItems.length === 0 ? (
            <div className="flex items-center justify-center flex-col gap-3 h-[50vh]">
              <p>Empty Wishlist</p>
              <Link
                to="/"
                className="bg-browish btn p-[5rem] w-[250px] text-whitish-yellow"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-7 favorite-items">
              {favoritesItems.map((product) => {
                const isInCart = cartItems.some(
                  (item) => item.id === product.id
                );
                return (
                  <div key={product.id} className="flex gap-5 items-center">
                    <div>
                      <img
                        className="w-42 rounded-lg"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex w-56 justify-between">
                        <p>{product.name}</p>
                        <IconTrash
                          onClick={() => removeFromFavorites(product)}
                          className="btn bg-browish text-whitish-yellow border-none h-6"
                        />
                      </div>
                      <p className="text-orange-pink font-semibold">
                        {product.price}
                      </p>
                      <div className="flex justify-between items-center">
                        {product.available === false ? (
                          <button
                            disabled
                            className="btn disabled:text-whitish-yellow disabled:bg-whitish-black cart-btn text-deepish-black bg-yellowish"
                          >
                            Sold Out
                          </button>
                        ) : (
                          <button
                            disabled={isInCart ? true : false}
                            onClick={() => addToCart(product)}
                            className="btn disabled:text-whitish-yellow disabled:bg-whitish-black cart-btn text-deepish-black bg-yellowish"
                          >
                            {isInCart ? "Added To Cart" : "Add To Cart"}
                          </button>
                        )}
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

export default Favorites;

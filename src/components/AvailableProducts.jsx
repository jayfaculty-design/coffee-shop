import React, { useContext } from "react";
import useFetch from "../customHooks/useFetch";
import { CartContext } from "../contexts/CartContext";
import { IconHeart } from "@tabler/icons-react";
import { FavoriteContext } from "../contexts/FavoriteContext";

const AvailableProducts = () => {
  const [loading, products, error, fetchData] = useFetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
  );
  const { addToCart } = useContext(CartContext);
  const { addToFavorites } = useContext(FavoriteContext);
  return (
    <div className="all-products grid gap-9 grid-cols-1 grid-rows-1">
      {loading && (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <img className="w-10" src="/loader.svg" alt="" />
          <p>Loading....</p>
        </div>
      )}
      {products.length === 0
        ? error && (
            <div className="flex flex-col items-center justify-center gap-1 h-[50vh]">
              <p>{error}</p>
              <button
                onClick={() => fetchData()}
                className="reload-btn btn text-whitish-yellow bg-browish flex items-center justify-center"
              >
                Reload
              </button>
            </div>
          )
        : products.map((product) => {
            if (product.available === true) {
              return (
                <div key={product.id} className="flex flex-col gap-3">
                  <div className="relative">
                    <img
                      className="rounded-2xl relative"
                      src={product.image}
                      alt=""
                    />
                    <p className="absolute flex items-center justify-center rounded-lg font-semibold top-2 left-3 text-[12px] text-black bg-yellowish w-14">
                      {product.popular === true ? "Popular" : ""}
                    </p>
                    <IconHeart
                      onClick={() => addToFavorites(product)}
                      className="absolute btn bg-transparent border-none h-6 right-2.5 top-1.5 cursor-pointer"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{product.name}</p>
                    <p className="bg-green text-center font-semibold text-deepish-black text-[14px] p-4 w-12 rounded-sm">
                      {product.price}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center flex-row">
                      <img
                        src={product.votes < 1 ? "/Star.svg" : "/Star_fill.svg"}
                        alt=""
                      />
                      <p
                        className={`${
                          product.rating < 1
                            ? "text-whitish-black font-semibold"
                            : ""
                        }`}
                      >
                        {product.rating < 1 ? "No Ratings" : product.rating}
                      </p>
                      <p className="text-whitish-black font-semibold">
                        {product.votes > 0 ? `(${product.votes} votes)` : ""}
                      </p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn cart-btn bg-yellowish text-[14px] text-deepish-black font-bold"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            }
          })}
    </div>
  );
};

export default AvailableProducts;

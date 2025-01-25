import React from "react";
import { Outlet } from "react-router";
import useFetch from "../customHooks/useFetch";

const AllProducts = () => {
  const [loading, products, error, fetchData] = useFetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
  );
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
                className="btn text-whitish-yellow bg-browish flex items-center justify-center"
              >
                Reload
              </button>
            </div>
          )
        : products.map((product) => {
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
                  <p className="font-medium text-orange-pink">
                    {product.available === false ? (
                      "Sold out"
                    ) : (
                      <button className="btn cart-btn bg-yellowish text-[14px] text-deepish-black font-bold">
                        Add To Cart
                      </button>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default AllProducts;

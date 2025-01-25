import React from "react";

const Favorites = () => {
  return (
    <div className="products absolute top-20 flex flex-col w-full  items-center h-[100vh]">
      <div className="bg-black product-container rounded-lg w-full h-[80vh]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Favorites</h1>
          <p className="cursor-pointer underline underline-offset-3">
            clear favorites
          </p>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

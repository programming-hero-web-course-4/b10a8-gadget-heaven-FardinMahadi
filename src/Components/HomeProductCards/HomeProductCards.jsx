import { useEffect, useState } from "react";
import HomeProductCard from "../HomeProductCard/HomeProductCard";

const HomeProductCards = ({ products }) => {
  return (
    <div className="text-black w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {products.map((product) => (
        <HomeProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default HomeProductCards;

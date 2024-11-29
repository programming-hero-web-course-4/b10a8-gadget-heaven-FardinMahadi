import React, { useState, useEffect } from "react";
import HomeProductCards from "../HomeProductCards/HomeProductCards";
import SortByCategory from "../SortByCategorys/SortByCategorys";

const HomeExplore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 p-10">
      <div>
        <SortByCategory products={products} />
      </div>
      <div className="col-span-3 w-full">
        <HomeProductCards products={products} />
      </div>
    </div>
  );
};

export default HomeExplore;

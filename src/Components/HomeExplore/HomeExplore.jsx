import React, { useState, useEffect } from "react";
import HomeProductCards from "../HomeProductCards/HomeProductCards";
import SortByCategory from "../SortByCategorys/SortByCategorys";

const HomeExplore = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCategoryBtn = (category) => {
    setActiveCategory(category);
    console.log(category);
  };

  return (
    <>
      <h1 className="text-center text-black font-bold text-3xl">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="grid grid-cols-4 gap-5 p-10">
        <div>
          <SortByCategory
            products={products}
            activeCategory={activeCategory}
            handleCategoryBtn={handleCategoryBtn}
          />
        </div>
        <div className="col-span-3 w-full">
          <HomeProductCards
            products={products}
            activeCategory={activeCategory}
            handleCategoryBtn={handleCategoryBtn}
          />
        </div>
      </div>
    </>
  );
};

export default HomeExplore;

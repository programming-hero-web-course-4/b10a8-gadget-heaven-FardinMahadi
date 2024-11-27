import { useState, useEffect } from "react";
import SortCategoryItem from "../SortCategoryItem/SortCategoryItem";
import "../../assets/style.css";

const SortByCategorys = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setCategories(filterCategory(data)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filterCategory = (products) => {
    const uniqueCategories = [];
    const categorySet = new Set();

    products.forEach((product) => {
      if (!categorySet.has(product.category)) {
        categorySet.add(product.category);
        uniqueCategories.push(product);
      }
    });

    return uniqueCategories;
  };

  const handleCategoryBtn = (category) => {
    setActiveCategory(category);
  };

  const sortCategories = () => {};

  return (
    <div className="bg-gray-100 rounded-xl p-6 flex flex-col ">
      {categories.map((product) => (
        <SortCategoryItem
          key={product.product_id}
          category={product.category}
          isActive={activeCategory === product.category}
          onClick={() => handleCategoryBtn(product.category)}
        />
      ))}
    </div>
  );
};

export default SortByCategorys;

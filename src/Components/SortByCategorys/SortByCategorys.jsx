import { useState, useEffect } from "react";
import SortCategoryItem from "../SortCategoryItem/SortCategoryItem";
import "../../assets/style.css";

const SortByCategorys = ({ products, activeCategory, handleCategoryBtn }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  return (
    <div className="bg-gray-100 rounded-xl p-6 flex flex-col">
      {categories.map((category, index) => (
        <SortCategoryItem
          key={index}
          category={category}
          isActive={activeCategory === category}
          onClick={() => handleCategoryBtn(category)}
        />
      ))}
    </div>
  );
};

export default SortByCategorys;
